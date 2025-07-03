import { exec } from "child_process";
// @ts-ignore
import { expect, test } from "bun:test";
import { promisify } from "util";
import path from "path";
const execPromise = promisify(exec);

const cli = (argv: string) => {
  return execPromise(
    `bun ${path.resolve(__dirname, "../src/cli")} ${argv}`
  )
    .then((res) => [null, res.stdout])
    .catch((e) => [e, null]);
};

test("upload success", async () => {
  const [err,stdout] = await cli("upload -c ./oss-deploy.yaml");
  console.info(stdout)
  expect(err).toEqual(null);
});
