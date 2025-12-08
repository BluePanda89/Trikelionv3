import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';


// Get the site URL from environment variable or use a default for local development
//const site = process.env.LOCAL_SITE_URL || 'http://localhost:4321';
const site = process.env.PUBLIC_SITE_URL || 'https://tris-dev.vionyta.com'; //actual public site
//const siteLocal = process.env.LOCAL_SITE_URL || 'http://localhost:4321'; //local site for development

export default defineConfig({
  output: 'static', // or 'static' 'server'
  security: {
    checkOrigin: true
  },
  experimental: {
    contentIntellisense: true,
  },
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: {
      enabled: true,
    }
  }),
  site,
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "aos/dist/aos.css";`
        }
      }
    },
    optimizeDeps: {
      include: ['aos']
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: [],
      transformers: [],
      showLineNumbers: false,
      lineNumbersPrefix: ''
    }
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'), // Only exclude 404 page
      entryLimit: 100, // Increase entry limit if you have many pages
    }),
  ],
  image: {
    //  Allow all remote patterns(https)
    remotePatterns: [
      {
        protocol: "https"
      }
    ]
  }
});