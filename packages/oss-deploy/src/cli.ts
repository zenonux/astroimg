#! /usr/bin/env node

import { Command } from "commander";
import { OssDeploy } from "./index";
import { readYamlFile } from "./utils";

const program = new Command();
main();

async function main() {
  program
    .command("upload")
    .requiredOption(
      "-c, --config <file>",
      "deploy config file",
      "./oss-deploy.yaml"
    )
    .description("upload assets to cos")
    .action(uploadAction);
  await program.parseAsync(process.argv);
}

async function uploadAction(opts: { config: string }) {
  const { local, target, oss } = readYamlFile(opts.config);
  const client = new OssDeploy(oss);
  await client.uploadAssets(local, target);
}
