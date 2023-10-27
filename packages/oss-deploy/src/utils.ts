import fs from "fs";
import path from "path";
import { LocalOptions, OssOptions, TargetOptions } from "./types";
import { parse } from "yaml";

const parseYamlEnvVar = (json: Record<string, any>) => {
  const envReg = /\${\s?env.(\w+)}/;
  for (const i in json) {
    const field = json[i];
    if (field instanceof Object) {
      parseYamlEnvVar(field);
    } else if (field instanceof Array) {
      for (let i = 0; i < field.length; i++) {
        if (field[i] instanceof Object) {
          parseYamlEnvVar(field[i]);
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

export const readYamlFile = (
  file: string,
  root?: string
): Record<string, any> => {
  const filePath = path.resolve(root || process.cwd(), file);
  const json = parse(fs.readFileSync(filePath, "utf-8"));
  parseYamlEnvVar(json);
  return json;
};

const rules = {
  required: (field: string | boolean, label: string) => {
    if (field === "" || field === undefined || field === null) {
      throw new Error(`${label} is required.`);
    }
  },
  prefix: (value: string) => {
    if (!value) {
      throw new Error("prefix is not correct. example:oss-deploy");
    }
  },
};

export const formatTargetOptions = (opts: TargetOptions): TargetOptions => {
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
    cacheControl,
  };
};

export const formatOssOptions = (opts: OssOptions): OssOptions => {
  rules.required(opts.secretId, "secretId");
  rules.required(opts.secretKey, "secretKey");
  rules.required(opts.region, "region");
  rules.required(opts.bucket, "bucket");
  return opts;
};

export const formatLocalOptions = (opts: LocalOptions): LocalOptions => {
  rules.required(opts.dist, "dist");
  return opts;
};
