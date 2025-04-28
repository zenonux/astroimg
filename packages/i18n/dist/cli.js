#! /usr/bin/env node

// src/index.ts
import * as XLSX from "xlsx";
import { writeFileSync } from "node:fs";
import * as path from "node:path";
import * as fs from "node:fs";

// src/download.ts
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
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
import pm from "picomatch";
var { resolve } = path;
async function mergeLocalesByBuffer(buffer, localesDir, ignore, extension) {
  try {
    let json = transformExcel2Json(buffer);
    json = json.filter((v) => !ignore.some((k) => {
      return pm(k)(v.key);
    }));
    let en = buildLocaleTsFile("en", json);
    writeFileSync(resolve(localesDir, `./en.${extension}`), en);
    let zh = buildLocaleTsFile("zh", json);
    writeFileSync(resolve(localesDir, `./zh-CN.${extension}`), zh);
    console.info("generate i18n locales succeed.");
  } catch (e) {
    console.error(e);
  }
}
async function mergeLocales(input, localesDir, ignore, extension, opts) {
  let isFile = input.includes(".xlsx");
  let buffer;
  if (isFile) {
    console.info(`reading ${input}...`);
    buffer = fs.readFileSync(input, "utf-8");
  } else {
    console.info(`downloading file ${input}...`);
    buffer = await download(input, opts);
    console.info(`download file ${input} succeed.`);
  }
  console.info(`generating locales...`);
  mergeLocalesByBuffer(buffer, localesDir, ignore, extension);
}
function transformExcel2Json(buffer) {
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
}
function buildLocaleTsFile(locale, data) {
  let jsoncData = `export default {
`;
  data.forEach((item) => {
    if (item._comment) {
      jsoncData += `  // ${item.key}
`;
    } else {
      jsoncData += `  ${[item.key]}: "${item[locale]}",
`;
    }
  });
  return jsoncData + `}
`;
}
function formatLiteral(text) {
  if (!text) {
    return "";
  }
  text = text.toString();
  text = text.replace(/\n/g, "").replace(/(?<!\\)"/g, "\\\"").replace(/\r/g, "\\n").trim();
  text = text.replace(/\$s{\d}/g, (val) => {
    let match = val.match(/\d/g);
    let num = match ? Number(match[0]) - 1 : 0;
    return `{${num}}`;
  }).replace(/\$d{\d}/g, (val) => {
    let match = val.match(/\d/g);
    let num = match ? Number(match[0]) - 1 : 0;
    return `{${num}}`;
  });
  text = text.replace(/@/g, "{'@'}").replace(/\|/g, "{'|'}").replace(/\$/g, "{'$'}");
  return text;
}
function isValidFieldValue(text) {
  if (typeof text === "string") {
    return text.trim() !== "";
  }
  return text !== null && text !== undefined;
}

// src/cli.ts
import { Command } from "commander";

// src/utils.ts
import fs2 from "fs";
import path2 from "path";
import { parse } from "yaml";
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

// src/check.ts
import { promises as fsPromises } from "fs";
import { join } from "node:path";
async function checkI18nKeys(opts) {
  const usedKeys = await getUsedKeys(opts.used.dir, opts.used.ignoreDir);
  const loadedKeys = await getLoadedKeys(opts.i18n.dir, opts.i18n.extensions);
  const missingKeys = findMissingKeys(usedKeys, loadedKeys);
  if (missingKeys.size > 0) {
    console.error("MISS_KEYS", Array.from(missingKeys));
    throw new Error("Missing i18n keys in translation files");
  }
}
async function getLoadedKeys(dir, i18nExtension) {
  const i18nKeys = new Set;
  const files = await fsPromises.readdir(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    if (!isSupportedFile(file, i18nExtension))
      continue;
    try {
      const content = await fsPromises.readFile(fullPath, "utf8");
      let keys = [];
      if (file.endsWith(".json")) {
        const parsed = JSON.parse(content);
        keys = Object.keys(parsed);
      } else if (file.endsWith(".js") || file.endsWith(".ts")) {
        keys = extractKeysFromCode(content);
      }
      keys.forEach((key) => {
        const cleanedKey = key.replace(/['"\s]/g, "");
        i18nKeys.add(cleanedKey);
      });
    } catch (error) {
      throw new Error(`Failed to load or parse file: ${fullPath}`);
    }
  }
  return i18nKeys;
}
function isSupportedFile(file, i18nExtension) {
  return i18nExtension.some((v) => file.endsWith(v));
}
function extractKeysFromCode(content) {
  const keys = [];
  const exportDefaultRegex = /export\s+default\s+{([\s\S]*?)}/g;
  const match = exportDefaultRegex.exec(content);
  if (match) {
    const objectContent = match[1];
    const keyRegex = /['"`]?([\w-]+)['"`]?\s*:/g;
    let keyMatch;
    while ((keyMatch = keyRegex.exec(objectContent)) !== null) {
      const cleanedKey = keyMatch[1].replace(/['"\s]/g, "");
      keys.push(cleanedKey);
    }
  }
  return keys;
}
function findMissingKeys(usedKeys, loadedKeys) {
  const missingKeys = new Set;
  usedKeys.forEach((key) => {
    if (!loadedKeys.has(key)) {
      missingKeys.add(key);
    }
  });
  return missingKeys;
}
async function getUsedKeys(dir, usedIgnoreDir) {
  const regex = /\bt\((['"`])([^'"`]+?)\1\)/g;
  const i18nKeys = new Set;
  const files = await fsPromises.readdir(dir);
  for (const file of files) {
    const fullPath = join(dir, file);
    if (shouldSkipDirectory(fullPath, usedIgnoreDir))
      continue;
    const stats = await fsPromises.stat(fullPath);
    if (stats.isDirectory()) {
      const nestedKeys = await getUsedKeys(fullPath, usedIgnoreDir);
      nestedKeys.forEach((key) => i18nKeys.add(key));
    } else if (isRelevantFile(file)) {
      const content = await fsPromises.readFile(fullPath, "utf8");
      let match;
      while ((match = regex.exec(content)) !== null) {
        const cleanedKey = match[2].replace(/['"\s]/g, "");
        i18nKeys.add(cleanedKey);
      }
    }
  }
  return i18nKeys;
}
function shouldSkipDirectory(fullPath, shouldSkipDirectory2) {
  return shouldSkipDirectory2.some((dir) => fullPath.includes(dir));
}
function isRelevantFile(file) {
  return (file.endsWith(".vue") || file.endsWith(".js") || file.endsWith(".ts")) && !file.endsWith(".d.ts");
}

// src/cli.ts
main();
function main() {
  const program = new Command;
  program.command("generate").requiredOption("-c, --config <file>", "config file", "./i18n.yaml").description("generate locale files").action(generateAction);
  program.command("check").requiredOption("-c, --config <file>", "config file", "./i18n.yaml").description("check used i18n keys").action((config) => checkI18nKeys(config.check));
  program.parseAsync(process.argv);
}
function generateAction(opts) {
  const {
    input,
    output,
    ignore,
    google_private_key,
    google_service_account_email,
    extension
  } = readYamlFile(opts.config);
  mergeLocales(input, output, ignore, extension || "ts", {
    google_private_key,
    google_service_account_email
  });
}
