await Bun.build({
  entrypoints: ["./src/index.ts", "./src/cli.ts","./src/vite.ts"],
  outdir: "./dist",
  target: "node",
  format: "esm",
  external: [
    "commander",
    "xlsx",
    "yaml",
    "google-auth-library",
    "google-spreadsheet",
    "picomatch",
    "vue-i18n-extract"
  ],
});
