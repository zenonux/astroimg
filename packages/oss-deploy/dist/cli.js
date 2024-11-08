#! /usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/cli.ts
var import_commander = require("commander");

// src/bucket.ts
var import_fs = __toESM(require("fs"));
var import_cos_nodejs_sdk_v5 = __toESM(require("cos-nodejs-sdk-v5"));
var import_node_path = __toESM(require("path"));
var import_readdirp = __toESM(require("readdirp"));
var import_p_limit = __toESM(require("p-limit"));
var limit = (0, import_p_limit.default)(3);
var CosBucketManager = class {
  constructor(options) {
    this._options = options;
    this._client = new import_cos_nodejs_sdk_v5.default({
      SecretId: options.secretId,
      SecretKey: options.secretKey
    });
  }
  async uploadLocalFile(prefixPath, filePath, options = {}) {
    if (!this._client) {
      return;
    }
    try {
      const res = await this._client.putObject({
        Bucket: this._options.bucket,
        Region: this._options.region,
        Key: prefixPath,
        Body: import_fs.default.createReadStream(filePath),
        ...options
      });
      console.info(`Upload ${prefixPath} success.`);
      return res;
    } catch (e) {
      console.error(`Upload ${prefixPath} failed.`);
      throw new Error(e);
    }
  }
  async uploadLocalDirectory(prefix, dirPath, options) {
    dirPath = import_node_path.default.resolve(dirPath);
    const input = [];
    for await (const entry of (0, import_readdirp.default)(dirPath, options.filter)) {
      const { fullPath } = entry;
      const relativePath = import_node_path.default.relative(dirPath, fullPath);
      const prefixPath = (prefix + relativePath).replace("\\", "/");
      input.push(
        limit(
          () => this.uploadLocalFile(
            prefixPath,
            fullPath,
            options.cacheControl ? {
              CacheControl: options.cacheControl
            } : {}
          )
        )
      );
    }
    await Promise.all(input);
  }
};
var BucketManagerFactory = class {
  static create(config) {
    return new CosBucketManager(config);
  }
};

// src/utils.ts
var import_fs2 = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_yaml = require("yaml");
var parseYamlEnvVar = (json) => {
  const envReg = /\${\s?env.(\w+)}/;
  for (const i in json) {
    const field = json[i];
    if (field instanceof Object) {
      parseYamlEnvVar(field);
    } else if (field instanceof Array) {
      for (let i2 = 0; i2 < field.length; i2++) {
        if (field[i2] instanceof Object) {
          parseYamlEnvVar(field[i2]);
        }
      }
    } else {
      if (envReg.test(field)) {
        const envVar = field.match(envReg)[1];
        json[i] = process.env[envVar];
      }
    }
  }
};
var readYamlFile = (file, root) => {
  const filePath = import_path.default.resolve(root || process.cwd(), file);
  const json = (0, import_yaml.parse)(import_fs2.default.readFileSync(filePath, "utf-8"));
  parseYamlEnvVar(json);
  return json;
};
var rules = {
  required: (field, label) => {
    if (field === "" || field === void 0 || field === null) {
      throw new Error(`${label} is required.`);
    }
  },
  prefix: (value) => {
    if (!value) {
      throw new Error("prefix is not correct. example:oss-deploy");
    }
  }
};
var formatTargetOptions = (opts) => {
  const { cacheControl } = opts;
  let prefix = opts.prefix;
  rules.prefix(prefix);
  if (prefix.charAt(0) === "/") {
    prefix = prefix.substring(1);
  }
  if (prefix.charAt(prefix.length - 1) !== "/") {
    prefix = prefix + "/";
  }
  return {
    prefix,
    cacheControl
  };
};
var formatOssOptions = (opts) => {
  rules.required(opts.secretId, "secretId");
  rules.required(opts.secretKey, "secretKey");
  rules.required(opts.region, "region");
  rules.required(opts.bucket, "bucket");
  return opts;
};
var formatLocalOptions = (opts) => {
  rules.required(opts.dist, "dist");
  return opts;
};

// src/index.ts
var OssDeploy = class {
  constructor(options) {
    const ossOptions = formatOssOptions(options);
    this._bucket = BucketManagerFactory.create(ossOptions);
  }
  async uploadAssets(local, target) {
    const { dist, filter } = formatLocalOptions(local);
    const { prefix, cacheControl } = formatTargetOptions(target);
    await this._bucket.uploadLocalDirectory(prefix, dist, {
      filter,
      cacheControl
    });
    console.info(`upload ${prefix} success.`);
  }
};

// src/cli.ts
var program = new import_commander.Command();
main();
async function main() {
  program.command("upload").requiredOption(
    "-c, --config <file>",
    "deploy config file",
    "./oss-deploy.yaml"
  ).description("upload assets to cos").action(uploadAction);
  await program.parseAsync(process.argv);
}
async function uploadAction(opts) {
  const { local, target, oss } = readYamlFile(opts.config);
  const client = new OssDeploy(oss);
  await client.uploadAssets(local, target);
}
