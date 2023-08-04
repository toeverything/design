import { resolve } from 'node:path'

import {
  vanillaExtractPlugin as vanillaExtractRollupPlugin
} from '@vanilla-extract/rollup-plugin'
import {
  vanillaExtractPlugin as vanillaExtractVitePlugin
} from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const external = [
  /^@radix-ui/,
  /^react$/,
  /^react\//,
  /^react-dom$/,
  /^react-dom\//,
  'clsx',
  'next-themes',
  /^@blocksuite/
]

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractVitePlugin({}),
    dts({
      insertTypesEntry: true
    })],
  build: {
    target: 'es2022',
    outDir: 'dist',
    minify: false,
    sourcemap: true,
    lib: {
      entry: {
        avatar: resolve(__dirname, 'src/avatar/index.ts'),
        button: resolve(__dirname, 'src/button/index.ts'),
        loading: resolve(__dirname, 'src/loading/index.ts')
      },
      formats: ['es']
    },
    rollupOptions: {
      external,
      plugins: [vanillaExtractRollupPlugin()],
      output: {
        preserveModules: true
      }
    }
  }
})
