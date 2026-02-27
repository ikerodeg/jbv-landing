import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jbv-gruas.es',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
