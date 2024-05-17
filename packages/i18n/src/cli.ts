#! /usr/bin/env node

import { Command } from "commander";
import { mergeLocales } from "./index";

main();

function main() {
  const program = new Command();
  program
    .command("generate")
    .option("-i, --input <input>", "google sheet id or file", "i18n.xlsx")
    .option("-f, --file <file>", "google excel file", "")
    .requiredOption("-d, --dist <dist>", "target locales", "locales")
    .description("generate locale files")
    .action(generateAction);
  program.parseAsync(process.argv);
}

function generateAction(opts: { input: string; dist: string }) {
  mergeLocales(opts.input, opts.dist);
}
