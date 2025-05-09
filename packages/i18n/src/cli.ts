#! /usr/bin/env node

import { Command } from "commander";
import { mergeLocales } from "./index";
import { readYamlFile } from "./utils";
import { checkI18nKeys } from "./check";

main();

function main() {
  const program = new Command();
  program
    .command("generate")
    .requiredOption("-c, --config <file>", "config file", "./i18n.yaml")
    .description("generate locale files")
    .action(generateAction);

  program
    .command("check")
    .requiredOption("-c, --config <file>", "config file", "./i18n.yaml")
    .description("check used i18n keys")
    .action(checkAction);

  program.parseAsync(process.argv);
}

function checkAction(opts: { config: string }) {
  const { check } = readYamlFile(opts.config);
  checkI18nKeys(check);
}

function generateAction(opts: { config: string }) {
  const {generate}=  readYamlFile(opts.config);
  const {
    input,
    output,
    ignore,
    google_private_key,
    google_service_account_email,
    extension,
  } = generate;
  mergeLocales(input, output, ignore || [], extension || "ts", {
    google_private_key,
    google_service_account_email,
  });
}
