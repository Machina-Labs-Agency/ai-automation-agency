import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/draft'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://your-domain.com/',
        'https://your-domain.com/ai-chatbot-miami',
        'https://your-domain.com/pricing',
        'https://your-domain.com/get-started',
        'https://your-domain.com/about',
        'https://your-domain.com/contact',
        'https://your-domain.com/services',
      ],
    }),
  ],
  site: 'https://your-domain.com',
  // Performance optimizations
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
