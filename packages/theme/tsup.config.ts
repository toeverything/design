import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { defineConfig } from 'tsup';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  format: ['esm', 'cjs'],
  splitting: false,
  entry: {
    index: resolve(__dirname, 'src/index.ts'),
    css: resolve(__dirname, 'src/index.css.ts'),
    'v2/index': resolve(__dirname, 'src/v2/index.ts'),
    'presets/typography': resolve(__dirname, 'src/presets/typography.css.ts'),
  },
  sourcemap: true,
  clean: true,
  terserOptions: {
    ecma: 2020,
  },
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  plugins: [vanillaExtractPlugin()],
});
