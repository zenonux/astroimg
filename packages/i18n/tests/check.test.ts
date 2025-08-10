import { cli } from "./cli";

test("cli check", async () => {
  let [err] = await cli("check -c ./i18n.yaml");
  expect(err).toBe(null);
});

