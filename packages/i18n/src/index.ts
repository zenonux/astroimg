import * as XLSX from "xlsx";
import { writeFileSync } from "node:fs";
import * as path from "node:path";
import * as fs from "node:fs";
import { download } from "./download";

const { resolve } = path;

interface I18nItem {
  _comment?: boolean;
  key: string;
  zh?: string;
  en?: string;
}

async function mergeLocalesByBuffer(
  buffer: ArrayBuffer | string,
  localesDir: string
) {
  const json = transformExcel2Json(buffer);
  let en = buildLocaleYaml("en", json);
  writeFileSync(resolve(localesDir, "./en.yaml"), en);
  let zh = buildLocaleYaml("zh", json);
  writeFileSync(resolve(localesDir, "./zh-CN.yaml"), zh);
}

export async function mergeLocales(input: string, localesDir: string) {
  let isFile = input.includes(".xlsx");
  let buffer: string | ArrayBuffer;
  if (isFile) {
    buffer = fs.readFileSync(input, "utf-8");
  } else {
    buffer = await download(input);
  }
  mergeLocalesByBuffer(buffer, localesDir);
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

function buildLocaleYaml(locale: "zh" | "en", data: I18nItem[]) {
  let jsoncData: string = "";
  data.forEach((item) => {
    if (item._comment) {
      jsoncData += `# ${item.key}\n`;
    } else {
      jsoncData += `${[item.key]}: ${item[locale]}\n`;
    }
  });
  return jsoncData;
}

function formatLiteral(text?: string) {
  if (!text) {
    return "";
  }
  text = text.toString();
  text = text
    .replace(/\n/g, "")
    .replace(/\"/g, '\\"')
    .replace(/\r/g, "\\n")
    .trim();
  return text
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
}

function isValidFieldValue(text: string) {
  if (typeof text === "string") {
    return text.trim() !== "";
  }
  return text !== null && text !== undefined;
}
