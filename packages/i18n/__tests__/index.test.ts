import { resolve } from "node:path";
import { mergeLocales } from "../src";
import { test, expect } from "bun:test";
import key from "./key.json";
import { promisify } from "node:util";
import { exec } from "node:child_process";
const execPromise = promisify(exec);

const cli = (argv: string) => {
  return execPromise(`bun ${resolve(__dirname, "../src/cli")} ${argv}`)
    .then((res) => [null, res.stdout])
    .catch((e) => [e, null]);
};

test("cli check", async () => {
  let [err] = await cli("check -c ./i18n.yaml");
  expect(err).toBe(null);
});

test("mergeLocales", async () => {
  let locales = resolve("locales");
  const ignore = ["growth_level*"];
  await mergeLocales(
    "1cWVLXoYocmDRsAtCxsJJrVvjAAa9dVTNsDqJ6fI5_hw",
    locales,
    ignore,
    "js",
    key,
  );
});
