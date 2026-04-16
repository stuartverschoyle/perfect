import http from 'http';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import handler from 'serve-handler';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

/** Force project-local browsers (Cursor/sandboxes may set a broken PLAYWRIGHT_BROWSERS_PATH). */
process.env.PLAYWRIGHT_BROWSERS_PATH = path.join(root, 'node_modules', '.cache', 'ms-playwright');

const { chromium } = await import('playwright');
const { EXAMPLE_PATH, GUIDE_HOME_PATH, GUIDE_SECTION_IDS, guideSectionPath } = await import(
  '../src/guideSections.ts'
);

const PRERENDER_TIMEOUT_MS =
  process.env.NETLIFY === 'true' || process.env.CI === 'true' ? 180_000 : 120_000;

function chromiumLaunchOptions() {
  const netlifyOrCi = process.env.NETLIFY === 'true' || process.env.CI === 'true';
  if (!netlifyOrCi) return {};
  return {
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  };
}

const routes: string[] = [
  GUIDE_HOME_PATH,
  EXAMPLE_PATH,
  ...GUIDE_SECTION_IDS.map((id) => guideSectionPath(id)),
];

function outPathForRoute(route: string): string {
  if (route === GUIDE_HOME_PATH) {
    return path.join(dist, 'index.html');
  }
  const relative = route.replace(/^\//, '');
  return path.join(dist, relative, 'index.html');
}

async function main() {
  const server = http.createServer((req, res) => {
    handler(req, res, {
      public: dist,
      rewrites: [{ source: '**', destination: '/index.html' }],
    });
  });

  const host = '127.0.0.1';
  await new Promise<void>((resolve, reject) => {
    server.listen(0, host, () => resolve());
    server.on('error', reject);
  });

  const addr = server.address();
  const port = typeof addr === 'object' && addr && 'port' in addr ? addr.port : 41_798;
  const origin = `http://${host}:${port}`;

  const browser = await chromium.launch({
    headless: true,
    ...chromiumLaunchOptions(),
  });
  const page = await browser.newPage();
  page.setDefaultTimeout(PRERENDER_TIMEOUT_MS);
  page.setDefaultNavigationTimeout(PRERENDER_TIMEOUT_MS);

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      process.stderr.write(`[browser console] ${msg.text()}\n`);
    }
  });
  page.on('pageerror', (err) => {
    process.stderr.write(`[pageerror] ${err.message}\n`);
  });

  try {
    for (const route of routes) {
      const url = `${origin}${route}`;
      await page.goto(url, { waitUntil: 'load', timeout: PRERENDER_TIMEOUT_MS });
      await page.waitForFunction(
        () => {
          const el = document.getElementById('root');
          return el != null && el.childElementCount > 0;
        },
        { timeout: PRERENDER_TIMEOUT_MS }
      );
      /** Flags (`PrerenderReadyMarker`) + DOM fallbacks; string form avoids Playwright arg-serialization issues. */
      const examplePathJson = JSON.stringify(EXAMPLE_PATH);
      await page.waitForFunction(
        `() => {
          const w = window;
          if (w.__PRERENDER_READY__ === true || w.prerenderReady === true) return true;
          const p = location.pathname;
          if (p === ${examplePathJson}) {
            return !!document.querySelector('#main-content');
          }
          return !!document.querySelector('#why-optimise');
        }`,
        { timeout: PRERENDER_TIMEOUT_MS }
      );
      await new Promise((r) => setTimeout(r, 400));
      const html = await page.content();
      const out = outPathForRoute(route);
      await mkdir(path.dirname(out), { recursive: true });
      await writeFile(out, html, 'utf8');
      process.stdout.write(`prerender ${route} -> ${path.relative(root, out)}\n`);
    }
  } finally {
    await browser.close();
    await new Promise<void>((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()));
    });
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
