import fs from "fs";
import path from "path";
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
