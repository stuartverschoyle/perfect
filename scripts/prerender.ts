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

  await new Promise<void>((resolve, reject) => {
    server.listen(41798, '127.0.0.1', () => resolve());
    server.on('error', reject);
  });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    for (const route of routes) {
      const url = `http://127.0.0.1:41798${route}`;
      await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
      await page.waitForFunction(
        () => {
          const el = document.getElementById('root');
          return el != null && el.childElementCount > 0;
        },
        { timeout: 60_000 }
      );
      await page.waitForFunction(
        () => (window as Window & { __PRERENDER_READY__?: boolean }).__PRERENDER_READY__ === true,
        { timeout: 120_000 }
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
