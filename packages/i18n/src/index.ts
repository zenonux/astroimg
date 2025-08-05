import * as XLSX from "xlsx";
import { writeFileSync } from "node:fs";
import * as path from "node:path";
import * as fs from "node:fs";
import { download } from "./download";
import pm from "picomatch";
import chalk from 'chalk';

export { checkI18nKeys } from "./check";

const { resolve } = path;

interface I18nItem {
  _comment?: boolean;
  key: string;
  zh?: string;
  en?: string;
}

async function mergeLocalesByBuffer(
  buffer: ArrayBuffer | string,
  localesDir: string,
  ignore: pm.Glob[],
  extension: "ts" | "js" | "json",
) {
  try {
    let json = transformExcel2Json(buffer);
    json = json.filter(
      (v) =>
        !ignore.some((k) => {
          return pm(k)(v.key);
        }),
    );
    let en = buildLocaleTsFile("en", extension, json);
    writeFileSync(resolve(localesDir, `./en.${extension}`), en);
    let zh = buildLocaleTsFile("zh", extension, json);
    writeFileSync(resolve(localesDir, `./zh-CN.${extension}`), zh);
    console.log(chalk.green('🎉 i18n generation successful!'));
  } catch (e) {
    console.error(e);
  }
}

export async function mergeLocales(
  input: string,
  localesDir: string,
  ignore: pm.Glob[],
  extension: "ts" | "js" | "json",
  opts: { google_service_account_email: string; google_private_key: string },
) {
  let isFile = input.includes(".xlsx");
  let buffer: string | ArrayBuffer;
  if (isFile) {
    console.info(`reading ${input}...`);
    buffer = fs.readFileSync(input, "utf-8");
  } else {
    console.log(chalk.blue('📥 Downloading file: ') + chalk.gray(input));
    buffer = await download(input, opts);
    console.log(chalk.green('✅ Download complete!'));
  }
  console.log(chalk.cyan('🌐 Generating i18n locale files...'));
  mergeLocalesByBuffer(buffer, localesDir, ignore, extension);
}

function transformExcel2Json(buffer: ArrayBuffer | string) {
  // 读取工作簿
  const workbook: XLSX.WorkBook = XLSX.read(buffer);

  // 读取第一个工作表
  const sheetName: string = workbook.SheetNames[0];
  const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

  // 将工作表转换为JSON格式
  const jsonData: any[] = XLSX.utils.sheet_to_json(worksheet, { defval: null });

  let filteredData: I18nItem[] = jsonData
    .map((row) => {
      // 过滤掉空白列
      const filteredRow: any = {};
      for (const key in row) {
        if (isValidFieldValue(row[key])) {
          filteredRow[key] = row[key];
        }
      }

      // 检查zh和en字段是否为空，将该行转换为注释
      if (!filteredRow["zh"] && !filteredRow["en"]) {
        return { key: filteredRow["key"], _comment: true };
      }
      return filteredRow;
    })
    .filter((row) => row["key"]);

  // 格式化变量
  filteredData = filteredData.map((v) => {
    return {
      ...v,
      zh: formatLiteral(v.zh),
      en: formatLiteral(v.en),
    };
  });

  return filteredData;
}

function buildLocaleTsFile(
  locale: "zh" | "en",
  extension: "js" | "ts" | "json",
  data: I18nItem[],
) {
  if (extension == "json") {
    return (
      data.reduce((acc, item, index) => {
        if(!item._comment){
          acc += `  "${item.key}": "${item[locale]}"`;
          if (index < data.length - 1) {
            acc += ",\n"; // 添加逗号，但最后一行不加
          } else {
            acc += "\n"; // 最后一行换行
          }
          return acc;
        }
        return acc
      }, "{\n") + `}\n`
    );
  } else {
    let jsoncData: string = `export default {\n`;
    data.forEach((item) => {
      if (item._comment) {
        jsoncData += `  // ${item.key}\n`;
      } else {
        jsoncData += `  "${[item.key]}": "${item[locale]}",\n`;
      }
    });
    return jsoncData + `}\n`;
  }
}

function formatLiteral(text?: string) {
  if (!text) {
    return "";
  }
  text = text.toString();
  text = text
    .replace(/\n/g, "")
    // 只匹配普通的双引号 "，而不匹配已经转义的 \"
    .replace(/(?<!\\)"/g, '\\"')
    .replace(/\r/g, "\\n")
    .trim();
  text = text
    .replace(/\$s{\d}/g, (val) => {
      let match = val.match(/\d/g);
      let num = match ? Number(match[0]) - 1 : 0;
      return `{${num}}`;
    })
    .replace(/\$d{\d}/g, (val) => {
      let match = val.match(/\d/g);
      let num = match ? Number(match[0]) - 1 : 0;
      return `{${num}}`;
    });

  // vue i18n Special Characters
  text = text
    .replace(/@/g, "{'@'}")
    .replace(/\|/g, "{'|'}")
    .replace(/\$/g, "{'$'}");

  return text;
}

function isValidFieldValue(text: string) {
  if (typeof text === "string") {
    return text.trim() !== "";
  }
  return text !== null && text !== undefined;
}
