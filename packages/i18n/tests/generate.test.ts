import { cli } from "./cli";
test("cli generate", async () => {
  let [err] = await cli("generate -c ./i18n.yaml");
  expect(err).toBe(null);
});

