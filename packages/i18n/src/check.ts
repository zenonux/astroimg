import { promises as fsPromises } from "fs";
import { join } from "node:path";

export async function checkI18nKeys(opts: {
  useDir:string;
  useIgnoreDirs:string[]
  i18nFiles: string[]
}) {
  const usedKeys = await getUsedKeys(opts.useDir, opts.useIgnoreDirs);
  const loadedKeys = await getLoadedKeys(opts.i18nFiles);

  const missingKeys = findMissingKeys(usedKeys, loadedKeys);

  if (missingKeys.size > 0) {
    console.error("MISS_KEYS", Array.from(missingKeys));
    throw new Error("Missing i18n keys in translation files");
  }
}
async function getLoadedKeys(files: string[]): Promise<Set<string>> {
  const i18nKeys = new Set<string>();

  for (const file of files) {
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


function extractKeysFromCode(content: string): string[] {
  const keys: string[] = [];

  // Match `export default { ... }` and extract the object content
  const exportDefaultRegex = /export\s+default\s+{([\s\S]*?)}/g;
  const match = exportDefaultRegex.exec(content);

  if (match) {
    const objectContent = match[1];

    // Match keys inside the object (e.g., key: value or "key": value)
    const keyRegex = /['"`]?([\w-]+)['"`]?\s*:/g;
    let keyMatch;
    while ((keyMatch = keyRegex.exec(objectContent)) !== null) {
      // Clean the key by removing single quotes, double quotes, and spaces
      const cleanedKey = keyMatch[1].replace(/['"\s]/g, "");
      keys.push(cleanedKey);
    }
  }

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

async function getUsedKeys(
  dir: string,
  usedIgnoreDirs: string[],
): Promise<Set<string>> {
  const regex = /\bt\((['"`])([^'"`]+?)\1\)/g;
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
