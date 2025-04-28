import { promises as fsPromises } from "fs";
import { join } from "node:path";

export async function checkI18nKeys(opts: {
  used: {
    dir: string;
    ignoreDirs: string[];
  };
  i18n: {
    dir: string;
    extensions: string[];
  };
}) {
  const usedKeys = await getUsedKeys(opts.used.dir, opts.used.ignoreDirs);
  const loadedKeys = await getLoadedKeys(opts.i18n.dir, opts.i18n.extensions);

  const missingKeys = findMissingKeys(usedKeys, loadedKeys);

  if (missingKeys.size > 0) {
    console.error("MISS_KEYS", Array.from(missingKeys));
    throw new Error("Missing i18n keys in translation files");
  }
}
async function getLoadedKeys(
  dir: string,
  i18nExtension: string[],
): Promise<Set<string>> {
  const i18nKeys = new Set<string>();

  const files = await fsPromises.readdir(dir);
  for (const file of files) {
    const fullPath = join(dir, file);

    // Skip unsupported files
    if (!isSupportedFile(file, i18nExtension)) continue;

    try {
      const content = await fsPromises.readFile(fullPath, "utf8");

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
      throw new Error(`Failed to load or parse file: ${fullPath}`);
    }
  }

  return i18nKeys;
}

function isSupportedFile(file: string, i18nExtension: string[]): boolean {
  return i18nExtension.some((v) => file.endsWith(v));
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
  usedIgnoreDir: string[],
): Promise<Set<string>> {
  const regex = /\bt\((['"`])([^'"`]+?)\1\)/g;
  const i18nKeys = new Set<string>();

  const files = await fsPromises.readdir(dir);
  for (const file of files) {
    const fullPath = join(dir, file);

    // Skip unnecessary directories
    if (shouldSkipDirectory(fullPath, usedIgnoreDir)) continue;

    const stats = await fsPromises.stat(fullPath);
    if (stats.isDirectory()) {
      const nestedKeys = await getUsedKeys(fullPath, usedIgnoreDir);
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

function shouldSkipDirectory(fullPath: string, shouldSkipDirectory: string[]) {
  return shouldSkipDirectory.some((dir) => fullPath.includes(dir));
}

function isRelevantFile(file: string) {
  return (
    (file.endsWith(".vue") || file.endsWith(".js") || file.endsWith(".ts")) &&
    !file.endsWith(".d.ts")
  );
}
