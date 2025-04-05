import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import autoExportPlugin from './build/exports'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'Vue3-Calendar',
      entry: path.resolve(__dirname, 'src/main.ts'),
      fileName: (format) => `vue3-calendar.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    autoExportPlugin(),
    WindiCSS({
      preflight: false,
    }),
  ],
})
