import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { vanillaExtractPlugin as vanillaExtractVitePlugin } from '@vanilla-extract/vite-plugin';
import { fileURLToPath } from 'url';
import { vanillaExtractPlugin as vanillaExtractRollupPlugin } from '@vanilla-extract/rollup-plugin';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const isBuild = process.env.NODE_ENV === 'build';

export default defineConfig({
  plugins: [react(), isBuild ? null : vanillaExtractVitePlugin({})],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib'),
    },
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: [resolve(__dirname, 'lib/index.ts')],
      plugins: [vanillaExtractRollupPlugin()],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'dist',
          preserveModulesRoot: 'lib',
        },
      ],
    },
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
    },
  },
});
