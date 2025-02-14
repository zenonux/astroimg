import { LocalOptions, OssOptions, TargetOptions } from "./types";
import BucketManagerFactory from "./bucket";
import {
  formatLocalOptions,
  formatOssOptions,
  formatTargetOptions,
} from "./utils";

export class OssDeploy {
  private _bucket;

  constructor(options: OssOptions) {
    const ossOptions = formatOssOptions(options);
    this._bucket = BucketManagerFactory.create(ossOptions);
  }

  checkDirectoryExists(prefix: string): Promise<boolean> {
    return this._bucket.checkDirectoryExists(prefix);
  }

  async uploadAssets(
    local: LocalOptions,
    target: TargetOptions
  ): Promise<void> {
    const { dist, filter } = formatLocalOptions(local);
    const { prefix, cacheControl } = formatTargetOptions(target);
    // upload target version
    await this._bucket.uploadLocalDirectory(prefix, dist, {
      filter,
      cacheControl,
    });
    console.info(`upload ${prefix} success.`);
  }
}
