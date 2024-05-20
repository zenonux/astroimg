import path from "node:path";
import { mergeLocales } from "../src";
import { test } from "bun:test";
import key from "./key.json";

test("mergeLocales", async () => {
  let locales = path.resolve("locales");
  const ignoreKeys = [
    "growth_level_work_approved_date",
    "growth_level_site_approved_date",
    "growth_level_image_selected_date",
    "growth_level_first_image_selected_date",
  ];
  await mergeLocales(
    "1WhITU4md7oCqupj20zTfNkOm0TIVq_Szh2Ev6mWljNY",
    locales,
    ignoreKeys,
    key
  );
});
