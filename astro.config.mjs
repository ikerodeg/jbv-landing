import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jbvgruas.es',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});