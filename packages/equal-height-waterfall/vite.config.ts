import { resolve, join } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EqualHeightWaterfall',
      fileName: (format: string) => `index.${format}.js`
    }
  },
  resolve: {
    alias: {
      '@': join(__dirname, './demo') 
    }
  }
})
