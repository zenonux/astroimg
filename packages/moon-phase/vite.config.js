import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MoonPhase',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'], // 将 Vue 设置为外部依赖
      output: {
        globals: {
          vue: 'Vue', // 指定 Vue 的全局变量名称
        },
      },
    },
  },
})
