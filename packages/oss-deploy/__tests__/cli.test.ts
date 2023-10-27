import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
const execPromise = promisify(exec);

const cli = (argv: string) => {
  return execPromise(
    `ts-node ${path.resolve(__dirname, "../src/cli")} ${argv}`
  )
    .then((res) => [null, res.stdout])
    .catch((e) => [e, null]);
};



describe("cli", () => {
  it("should upload success", async () => {
    const [err,stdout] = await cli("upload -c ./oss-deploy.yaml");
    console.log(stdout)
    expect(err).toEqual(null);
  });
});
