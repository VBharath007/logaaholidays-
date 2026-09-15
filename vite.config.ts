import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

// Copy dedicated 1200x630 OG image to public and dist
const sourceOg = 'C:\\Users\\LOQ\\.gemini\\antigravity-ide\\brain\\f7e43727-a304-4773-b4ba-aaff1f143cad\\og_image_1789032729043.jpg';
if (fs.existsSync(sourceOg)) {
  fs.copyFileSync(sourceOg, path.resolve(__dirname, 'public', 'og-image.jpg'));
  const distPath = path.resolve(__dirname, 'dist');
  if (fs.existsSync(distPath)) {
    fs.copyFileSync(sourceOg, path.resolve(distPath, 'og-image.jpg'));
  }
}

function spa404Plugin(): Plugin {
  return {
    name: 'spa-404-status-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          return next();
        }

        const rawUrl = req.url ? req.url.split('?')[0] : '';
        const decodedUrl = decodeURIComponent(rawUrl);

        // Ignore internal Vite requests, API routes, and static assets with file extensions
        if (
          rawUrl.includes('.') ||
          rawUrl.startsWith('/@') ||
          rawUrl.startsWith('/src/') ||
          rawUrl.startsWith('/node_modules/') ||
          rawUrl.startsWith('/api/')
        ) {
          return next();
        }

        const validPrefixes = [
          '/',
          '/about',
          '/gallery',
          '/services',
          '/north-india-tour-packages',
          '/tour-packages',
          '/packages',
          '/south-india-package',
          '/honeymoon-packages',
          '/honeymoon-package',
          '/tamil-nadu-tour-packages',
          '/kerala-tour-packages',
          '/karnataka-tour-packages',
          '/destination',
          '/places-to-visit',
          '/place',
          '/testimonials',
          '/contact',
          '/privacy-policy',
          '/terms-and-conditions',
          '/cancellation-policy'
        ];

        const isValid = validPrefixes.some(prefix =>
          prefix === '/'
            ? decodedUrl === '/'
            : (decodedUrl === prefix || decodedUrl.startsWith(prefix + '/'))
        );

        // If not a valid route, return HTTP 404 with index.html
        if (!isValid) {
          try {
            const indexHtml = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
            const transformedHtml = await server.transformIndexHtml(rawUrl, indexHtml);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
            res.end(transformedHtml);
            return;
          } catch (e) {
            return next(e);
          }
        }

        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spa404Plugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('gsap') || id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
              return 'vendor-animation';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
          }
        },
      },
    },
  },
})
