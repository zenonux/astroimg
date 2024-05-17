#! /usr/bin/env node

import { Command } from "commander";
import { mergeLocales } from "./index";

main();

async function main() {
  const program = new Command();
  program
    .command("generate")
    .requiredOption("-f, --file <file>", "excel file path", "excel.xlsx")
    .requiredOption("-d, --dist <dist>", "target locales", "locales")
    .description("generate locale files")
    .action(generateAction);
  await program.parseAsync(process.argv);
}

function generateAction(opts: { file: string; dist: string }) {
  mergeLocales(opts.file, opts.dist);
}
