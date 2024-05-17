import path from "node:path";
import { mergeLocales } from "../src";
import { test } from "bun:test";

test("mergeLocales", async () => {
  let locales = path.resolve("locales");
  await mergeLocales("1H8ZFylTbkMt38yji1Ympl6ZSOqlwaOm67vDi54T76MI", locales);
});
