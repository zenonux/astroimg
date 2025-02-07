import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'TmsProvider',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue','leaflet'], // 将 Vue 设置为外部依赖
      output: {
        globals: {
          vue: 'Vue', // 指定 Vue 的全局变量名称
          leaflet: 'L',   // 指定 leaflet 的全局变量名称
        }
      }
    }
  }
})
