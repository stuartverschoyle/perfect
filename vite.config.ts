import path from 'node:path';
import type { Connect, Plugin } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Dev-only: allow hard-refresh on `/example`, `/guide/...` (production uses prerendered HTML or Netlify). */
function htmlSpaFallback(): Plugin {
  return {
    name: 'html-spa-fallback',
    configureServer(server) {
      server.middlewares.use((req: Connect.IncomingMessage, _res, next) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') return next();
        const url = req.url?.split('?')[0] ?? '';
        if (
          url === '/' ||
          path.extname(url) !== '' ||
          url.startsWith('/@') ||
          url.startsWith('/src') ||
          url.startsWith('/node_modules')
        ) {
          return next();
        }
        const accept = req.headers.accept ?? '';
        if (!accept.includes('text/html')) return next();
        req.url = '/index.html';
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlSpaFallback()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
