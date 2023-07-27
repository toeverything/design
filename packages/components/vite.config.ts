import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { vanillaExtractPlugin as vanillaExtractVitePlugin } from '@vanilla-extract/vite-plugin';
import { fileURLToPath } from 'url';
import { vanillaExtractPlugin as vanillaExtractRollupPlugin } from '@vanilla-extract/rollup-plugin';
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const isBuild = process.env.NODE_ENV === 'build';

export default defineConfig({
  plugins: [react(), isBuild ? null : vanillaExtractVitePlugin()],
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'dist',
    //压缩
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: [resolve(__dirname, 'src/index.ts')],
      plugins: [vanillaExtractRollupPlugin()],

      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'dist',
          preserveModulesRoot: 'src',
        },
      ],
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
    },
  },
});
