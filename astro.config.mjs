import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.jbv.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
