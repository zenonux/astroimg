import { resolve } from "node:path";
import { test, expect } from "bun:test";
import { promisify } from "node:util";
import { exec } from "node:child_process";
const execPromise = promisify(exec);

const cli = (argv: string) => {
  return execPromise(`bun ${resolve(__dirname, "../src/cli")} ${argv}`)
    .then((res) => [null, res.stdout])
    .catch((e) => [e, null]);
};


test("cli generate", async () => {
  let [err] = await cli("generate -c ./i18n.yaml");
  expect(err).toBe(null);
});

