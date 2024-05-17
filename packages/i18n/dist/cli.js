#! /usr/bin/env node

// src/index.ts
import * as XLSX from "xlsx";
import {writeFileSync} from "node:fs";
import * as path from "node:path";
import * as fs from "node:fs";

// src/download.ts
import {GoogleSpreadsheet} from "google-spreadsheet";
import {JWT} from "google-auth-library";
async function download(id, opts) {
  const serviceAccountAuth = new JWT({
    email: opts.google_service_account_email,
    key: opts.google_private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  });
  const doc = new GoogleSpreadsheet(id, serviceAccountAuth);
  await doc.loadInfo();
  const buffer = await doc.downloadAsXLSX();
  return buffer;
}

// src/index.ts
async function mergeLocalesByBuffer(buffer, localesDir) {
  const json = transformExcel2Json(buffer);
  let en = buildLocaleYaml("en", json);
  writeFileSync(resolve(localesDir, "./en.yaml"), en);
  let zh = buildLocaleYaml("zh", json);
  writeFileSync(resolve(localesDir, "./zh-CN.yaml"), zh);
}
async function mergeLocales(input, localesDir, opts) {
  let isFile = input.includes(".xlsx");
  let buffer;
  if (isFile) {
    buffer = fs.readFileSync(input, "utf-8");
  } else {
    buffer = await download(input, opts);
  }
  mergeLocalesByBuffer(buffer, localesDir);
}
var transformExcel2Json = function(buffer) {
  const workbook = XLSX.read(buffer);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: null });
  let filteredData = jsonData.map((row) => {
    const filteredRow = {};
    for (const key in row) {
      if (isValidFieldValue(row[key])) {
        filteredRow[key] = row[key];
      }
    }
    if (!filteredRow["zh"] && !filteredRow["en"]) {
      return { key: filteredRow["key"], _comment: true };
    }
    return filteredRow;
  }).filter((row) => row["key"]);
  filteredData = filteredData.map((v) => {
    return {
      ...v,
      zh: formatLiteral(v.zh),
      en: formatLiteral(v.en)
    };
  });
  return filteredData;
};
var buildLocaleYaml = function(locale, data) {
  let jsoncData = "";
  data.forEach((item) => {
    if (item._comment) {
      jsoncData += `# ${item.key}\n`;
    } else {
      jsoncData += `${[item.key]}: ${item[locale]}\n`;
    }
  });
  return jsoncData;
};
var formatLiteral = function(text) {
  if (!text) {
    return "";
  }
  text = text.toString();
  text = text.replace(/\n/g, "").replace(/\"/g, '\\"').replace(/\r/g, "\\n").trim();
  return text.replace(/\$s{\d}/g, (val) => {
    let match = val.match(/\d/g);
    let num = match ? Number(match[0]) - 1 : 0;
    return `{${num}}`;
  }).replace(/\$d{\d}/g, (val) => {
    let match = val.match(/\d/g);
    let num = match ? Number(match[0]) - 1 : 0;
    return `{${num}}`;
  });
};
var isValidFieldValue = function(text) {
  if (typeof text === "string") {
    return text.trim() !== "";
  }
  return text !== null && text !== undefined;
};
var { resolve } = path;

// src/cli.ts
import {Command} from "commander";

// src/utils.ts
import fs2 from "fs";
import path2 from "path";
import {parse} from "yaml";
var parseYamlEnvVar = (json) => {
  const envReg = /\${\s?env.(\w+)}/;
  for (const i in json) {
    const field = json[i];
    if (field instanceof Object) {
      parseYamlEnvVar(field);
    } else if (field instanceof Array) {
      for (let i2 = 0;i2 < field.length; i2++) {
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
  const filePath = path2.resolve(root || process.cwd(), file);
  const json = parse(fs2.readFileSync(filePath, "utf-8"));
  parseYamlEnvVar(json);
  return json;
};

// src/cli.ts
var main = function() {
  const program = new Command;
  program.command("generate").requiredOption("-c, --config <file>", "config file", "./i18n.yaml").description("generate locale files").action(generateAction);
  program.parseAsync(process.argv);
};
var generateAction = function(opts) {
  const { input, output, google_private_key, google_service_account_email } = readYamlFile(opts.config);
  mergeLocales(input, output, {
    google_private_key,
    google_service_account_email
  });
};
main();
