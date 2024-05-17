await Bun.build({
  entrypoints: ["./src/index.ts", "./src/cli.ts"],
  outdir: "./dist",
  target: "node",
  format: "esm",
  external: [
    "commander",
    "xlsx",
    "yaml",
    "google-auth-library",
    "google-spreadsheet",
  ],
});
