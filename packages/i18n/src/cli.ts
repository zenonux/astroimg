#! /usr/bin/env node

import { Command } from "commander";
import { mergeLocales } from "./index";
import { readYamlFile } from "./utils";

main();

function main() {
  const program = new Command();
  program
    .command("generate")
    .requiredOption("-c, --config <file>", "config file", "./i18n.yaml")
    .description("generate locale files")
    .action(generateAction);
  program.parseAsync(process.argv);
}

function generateAction(opts: { config: string }) {
  const {
    input,
    output,
    ignore_keys,
    google_private_key,
    google_service_account_email,
  } = readYamlFile(opts.config);
  ignore_keys;
  mergeLocales(input, output, ignore_keys, {
    google_private_key,
    google_service_account_email,
  });
}
