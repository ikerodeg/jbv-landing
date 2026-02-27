import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.jbv.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap()],
});