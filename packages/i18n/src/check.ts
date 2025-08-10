import VueI18NExtract from "vue-i18n-extract";
import chalk from "chalk";

async function loadExcludeKeys(q?: {
  url: string;
  method: "POST" | "GET";
}): Promise<string[]> {
  if (!q?.url) {
    return [];
  }
  let apiResponse = await fetch(q.url, {
    method: q.method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await apiResponse.json();
  let items = data.items || [];
  return items;
}

export async function checkI18nKeys(opts: {
  excludeKeysRequest?: {
    url: string;
    method: "POST" | "GET";
  };
  usedGlob: string;
  i18nGlob: string;
}) {
  const excludeKeys = await loadExcludeKeys(opts.excludeKeysRequest);
  const { missingKeys } = await VueI18NExtract.createI18NReport({
    vueFiles: opts.usedGlob,
    languageFiles: opts.i18nGlob,
    exclude: excludeKeys,
  });

  if (missingKeys.length) {
    throw new Error(chalk.red("❌ Missing i18n keys in translation files"));
  } else {
    console.log(chalk.green("✅ No missing i18n keys."));
  }
}
