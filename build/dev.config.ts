import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 文档: https://vitejs.dev/config/
export default defineConfig({
  root: "./play",
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
  ],
});
