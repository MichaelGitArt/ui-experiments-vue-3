import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
const pathSrc = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@UI': path.resolve(__dirname, '/src/UI'),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/styles/main"\n`,
      },
    },
  },
});
