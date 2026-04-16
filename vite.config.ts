import path from 'node:path';
import type { Connect, Plugin } from 'vite';
import { defineConfig, loadEnv } from 'vite';
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
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').trim();

  return {
    plugins: [react(), htmlSpaFallback()],
    /** Netlify sets `URL` / `DEPLOY_PRIME_URL` at build time so prerendered canonicals & og:url are absolute https. */
    define:
      siteUrl !== ''
        ? {
            'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl),
          }
        : {},
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return;
            /** Do not split `react` / `react-dom` out: Rollup chunk order can trigger TDZ ("Cannot access … before initialization") in prerender. */
            if (id.includes('react-dom') || id.includes('/react/') || id.includes('\\react\\')) return;
            if (id.includes('react-router')) return 'vendor-router';
            if (id.includes('react-helmet')) return 'vendor-helmet';
            if (id.includes('lucide-react')) return 'vendor-icons';
          },
        },
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
