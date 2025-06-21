// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: process.env.AMPLIFY_DOMAIN || 'https://yourdomain.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
