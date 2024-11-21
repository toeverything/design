import fs from 'node:fs';
import { resolve } from 'node:path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { generateDtsBundle } from 'dts-bundle-generator';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    terserOptions: {
      ecma: 2020,
    },
    sourcemap: true,
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        css: resolve(__dirname, 'src/index.css.ts'),
        'v2/index': resolve(__dirname, 'src/v2/index.ts'),
        'presets/typography': resolve(
          __dirname,
          'src/presets/typography.css.ts'
        ),
      },
      name: 'ToEverythingTheme',
    },
  },
  plugins: [
    dts({
      afterBuild() {
        const inputs = [
          resolve(__dirname, 'dist/index.d.ts'),
          resolve(__dirname, 'dist/v2/index.d.ts'),
        ];

        const dtsFiles = generateDtsBundle(
          inputs.map(filePath => ({ filePath })),
          {
            preferredConfigPath: resolve(__dirname, 'tsconfig.json'),
          }
        );
        // write back to source
        dtsFiles.forEach((file, index) => {
          fs.writeFileSync(inputs[index], file, 'utf-8');
        });
      },
    }),
    vanillaExtractPlugin(),
  ],
});
