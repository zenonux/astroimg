import { resolve } from "node:path";
import { promisify } from "node:util";
import { exec } from "node:child_process";
const execPromise = promisify(exec);

export const cli = (argv: string) => {
  return execPromise(`bun ${resolve(__dirname, "../src/cli")} ${argv}`)
    .then((res) => [null, res.stdout])
    .catch((e) => [e, null]);
};
