import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 文档: https://vitejs.dev/config/
export default defineConfig({
  root: "./play",
  resolve: {
    alias: {
      packages: resolve(__dirname, "../packages"),
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
  ],
});
