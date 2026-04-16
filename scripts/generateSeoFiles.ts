import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

function normalizeSiteUrl(input: string): string {
  let s = input.trim().replace(/\/$/, '');
  if (!s) return '';
  if (/^\/\//.test(s)) return `https:${s}`;
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s}`;
}

function resolveOrigin(): string {
  const explicit = process.env.VITE_SITE_URL?.trim();
  const netlify = process.env.URL?.trim() || process.env.DEPLOY_PRIME_URL?.trim();
  return normalizeSiteUrl(explicit || netlify || '');
}

function escapeXml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function absoluteLoc(origin: string, pathname: string): string {
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${origin}${p}`;
}

async function main() {
  const { GUIDE_HOME_PATH, EXAMPLE_PATH, GUIDE_SECTION_IDS, guideSectionPath } = await import(
    '../src/guideSections.ts'
  );

  const origin = resolveOrigin();
  const minimal = `User-agent: *\nAllow: /\n`;

  if (!origin) {
    writeFileSync(path.join(dist, 'robots.txt'), minimal, 'utf8');
    console.warn(
      'generateSeoFiles: no VITE_SITE_URL or Netlify URL — wrote minimal robots.txt (no Sitemap line).',
    );
    return;
  }

  const urls = [
    absoluteLoc(origin, GUIDE_HOME_PATH),
    absoluteLoc(origin, EXAMPLE_PATH),
    ...GUIDE_SECTION_IDS.map((id) => absoluteLoc(origin, guideSectionPath(id))),
  ];

  const sitemapUrl = absoluteLoc(origin, '/sitemap.xml');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  writeFileSync(path.join(dist, 'sitemap.xml'), `${sitemap.trim()}\n`, 'utf8');
  writeFileSync(path.join(dist, 'robots.txt'), `${minimal}\nSitemap: ${sitemapUrl}\n`, 'utf8');
  console.log(`generateSeoFiles: robots.txt + sitemap.xml (${urls.length} URLs) → ${origin}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
