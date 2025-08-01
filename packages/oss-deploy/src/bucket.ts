import { BucketManager, OssOptions } from "./types";
import fs from "fs";
import COS from "cos-nodejs-sdk-v5";
import path from "path";
import readdirp from "readdirp";
import PQueue from "p-queue";
import pRetry from "p-retry";

// 最大3个文件并发上传
const queue = new PQueue({ concurrency: 3 });
class CosBucketManager implements BucketManager {
  private _client?;
  private _options;
  constructor(options: OssOptions) {
    this._options = options;
    this._client = new COS({
      SecretId: options.secretId,
      SecretKey: options.secretKey,
    });
  }

  async uploadLocalFile(prefixPath: string, filePath: string, options = {}) {
    if (!this._client) {
      return;
    }
    try {
      const res = await this._client.putObject({
        Bucket: this._options.bucket,
        Region: this._options.region,
        Key: prefixPath,
        Body: fs.createReadStream(filePath),
        ...options,
      });
      console.info(`Upload ${prefixPath} success.`);
      return res;
    } catch (e: any) {
      console.error(`Upload ${prefixPath} failed.`);
      throw new Error(e);
    }
  }

  async checkDirectoryExists(prefix: string) {
    if (!this._client) {
      return false;
    }
    const result = await this._client.getBucket({
      Bucket: this._options.bucket,
      Region: this._options.region,
      Prefix: prefix.endsWith("/") ? prefix : prefix + "/",
      MaxKeys: 1, // 只取一个对象即可
    });

    if (result.Contents.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  async uploadLocalDirectory(
    prefix: string,
    dirPath: string,
    options: {
      filter?: any;
      cacheControl?: string;
    },
  ) {
    dirPath = path.resolve(dirPath);
    for await (const entry of readdirp(dirPath, options.filter)) {
      const { fullPath } = entry;
      const relativePath = path.relative(dirPath, fullPath);
      const prefixPath = (prefix + relativePath).replace("\\", "/");
      const task = pRetry(
        () =>
          this.uploadLocalFile(
            prefixPath,
            fullPath,
            options.cacheControl
              ? {
                  CacheControl: options.cacheControl,
                }
              : {},
          ),
        {
          retries: 1,
        },
      );
      queue.add(() => task);
    }
    await queue.onIdle();
  }
}

export default class BucketManagerFactory {
  static create(config: OssOptions): CosBucketManager {
    return new CosBucketManager(config);
  }
}
