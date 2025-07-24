import { promises as fsPromises } from "fs";
import { join } from "node:path";
import { parse } from "acorn";
import * as walk from "acorn-walk";

async function loadUsedRemoteKeys(url: string): Promise<string[]> {
  let apiResponse = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json", 
    },
  });
  const { data } = await apiResponse.json();
  let items = data.items || [];
  return items;
}

export async function checkI18nKeys(opts: {
  useDynamicKeysApi: string;
  useDir: string;
  useIgnoreDirs: string[];
  i18nDir: string;
}) {
  let usedKeys = await getUsedKeys(opts.useDir, opts.useIgnoreDirs);
  const usedDynamicKeys = await loadUsedRemoteKeys(opts.useDynamicKeysApi);
  usedDynamicKeys.forEach((v) => {
    usedKeys.add(v);
  });

  const loadedKeys = await getLoadedKeys(opts.i18nDir);
  const missingKeys = findMissingKeys(usedKeys, loadedKeys);
  const unusedKeys = findUnusedKeys(usedKeys, loadedKeys);

  if (unusedKeys.size) {
    console.log("unused keys: " + Array.from(unusedKeys).join(","));
  }

  if (missingKeys.size) {
    const tsv = Array.from(missingKeys).join(",");
    console.log("missing keys:" + tsv);
    throw new Error("Missing i18n keys in translation files");
  } else {
    console.info("No missing i18n keys.");
  }
}

async function getFiles(dir: string): Promise<string[]> {
  const entries = await fsPromises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(dir, entry.name);
      return entry.isDirectory() ? getFiles(fullPath) : fullPath;
    }),
  );
  return files.flat();
}

async function getLoadedKeys(i18nDir: string): Promise<Set<string>> {
  const i18nKeys = new Set<string>();

  const allFiles = await getFiles(i18nDir);
  const relevantFiles = allFiles.filter(
    (file) =>
      file.endsWith(".json") || file.endsWith(".js") || file.endsWith(".ts"),
  );
  for (const file of relevantFiles) {
    try {
      const content = await fsPromises.readFile(file, "utf8");

      let keys: string[] = [];
      if (file.endsWith(".json")) {
        // Parse JSON files
        const parsed = JSON.parse(content);
        keys = Object.keys(parsed);
      } else if (file.endsWith(".js") || file.endsWith(".ts")) {
        // Extract keys from JS/TS files
        keys = extractKeysFromCode(content);
      }

      // Clean and add keys to the Set
      keys.forEach((key) => {
        const cleanedKey = key.replace(/['"\s]/g, ""); // Remove single quotes, double quotes, and spaces
        i18nKeys.add(cleanedKey);
      });
    } catch (error) {
      console.error(`Failed to load or parse file: ${file}`, error);
    }
  }

  return i18nKeys;
}

function extractKeysFromCode(code: string): string[] {
  const keys: string[] = [];

  const ast = parse(code, {
    ecmaVersion: "latest",
    sourceType: "module",
  });

  walk.simple(ast, {
    ExportDefaultDeclaration(node: any) {
      if (node.declaration.type === "ObjectExpression") {
        for (const prop of node.declaration.properties) {
          if (prop.type === "Property" && !prop.computed) {
            if (prop.key.type === "Identifier") {
              keys.push(prop.key.name);
            } else if (prop.key.type === "Literal") {
              keys.push(String(prop.key.value));
            }
          }
        }
      }
    },
  });

  return keys;
}

function findMissingKeys(usedKeys: Set<string>, loadedKeys: Set<string>) {
  const missingKeys = new Set();
  usedKeys.forEach((key) => {
    if (!loadedKeys.has(key)) {
      missingKeys.add(key);
    }
  });
  return missingKeys;
}

function findUnusedKeys(usedKeys: Set<string>, loadedKeys: Set<string>) {
  const unusedKeys = new Set<string>();
  loadedKeys.forEach((key) => {
    if (!usedKeys.has(key)) {
      unusedKeys.add(key);
    }
  });
  return unusedKeys;
}

async function getUsedKeys(
  dir: string,
  usedIgnoreDirs: string[],
): Promise<Set<string>> {
  // 忽略动态key，只分析静态key
  const regex = /\bt\(\s*(['"])([^'"`]+?)\1\s*\)/g;
  const i18nKeys = new Set<string>();

  const files = await fsPromises.readdir(dir);
  for (const file of files) {
    const fullPath = join(dir, file);

    // Skip unnecessary directories
    if (shouldSkipDirectory(fullPath, usedIgnoreDirs)) continue;

    const stats = await fsPromises.stat(fullPath);
    if (stats.isDirectory()) {
      const nestedKeys = await getUsedKeys(fullPath, usedIgnoreDirs);
      nestedKeys.forEach((key) => i18nKeys.add(key));
    } else if (isRelevantFile(file)) {
      const content = await fsPromises.readFile(fullPath, "utf8");
      let match;
      while ((match = regex.exec(content)) !== null) {
        // Clean the key by removing single quotes, double quotes, and spaces
        const cleanedKey = match[2].replace(/['"\s]/g, "");
        i18nKeys.add(cleanedKey);
      }
    }
  }

  return i18nKeys;
}

function shouldSkipDirectory(fullPath: string, skipDirectoryList: string[]) {
  return skipDirectoryList.some((dir) => fullPath.includes(dir));
}

function isRelevantFile(file: string) {
  return (
    (file.endsWith(".vue") || file.endsWith(".js") || file.endsWith(".ts")) &&
    !file.endsWith(".d.ts")
  );
}
