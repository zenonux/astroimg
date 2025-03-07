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
import pm from "picomatch";
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
var buildLocaleTsFile = function(locale, data) {
  let jsoncData = `export default {\n`;
  data.forEach((item) => {
    if (item._comment) {
      jsoncData += `  // ${item.key}\n`;
    } else {
      jsoncData += `  ${[item.key]}: "${item[locale]}",\n`;
    }
  });
  return jsoncData + `}\n`;
};
var formatLiteral = function(text) {
  if (!text) {
    return "";
  }
  text = text.toString();
  text = text.replace(/\n/g, "").replace(/(?<!\\)"/g, '\\"').replace(/\r/g, "\\n").trim();
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
};
var isValidFieldValue = function(text) {
  if (typeof text === "string") {
    return text.trim() !== "";
  }
  return text !== null && text !== undefined;
};
var { resolve } = path;
export {
  mergeLocales
};
