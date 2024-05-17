import path from "node:path";
import { mergeLocales } from "../src";
import { test } from "bun:test";

test("mergeLocales", async () => {
  let file = path.resolve("__tests__/test.xlsx");
  let locales = path.resolve("locales");
  mergeLocales(file, locales);
});
