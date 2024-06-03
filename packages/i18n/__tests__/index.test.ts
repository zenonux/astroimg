import path from "node:path";
import { mergeLocales } from "../src";
import { test } from "bun:test";
import key from "./key.json";

test("mergeLocales", async () => {
  let locales = path.resolve("locales");
  const ignore = ["growth_level*"];
  await mergeLocales(
    "1WhITU4md7oCqupj20zTfNkOm0TIVq_Szh2Ev6mWljNY",
    locales,
    ignore,
    key
  );
});
