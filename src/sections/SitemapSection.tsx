import { Map, FileSearch, Bell, RefreshCw } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function SitemapSection() {
  return (
    <SeoSection id="sitemap" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-500 dark:text-sky-400 shrink-0">
          <Map size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">XML Sitemap & Indexing</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">How search engines discover, crawl, and index your pages -- and how you control that process.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Map size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">XML Sitemap</h3>
          <InfoTooltip title="XML Sitemap Best Practices">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">What:</strong> An XML sitemap is a machine-readable file that lists every page on your site you want search engines to index. It's your roadmap for crawlers.</li>
              <li><strong className="text-slate-900 dark:text-white">Required for:</strong> Sites with 500+ pages, new sites with few backlinks, sites with rich media (images, video), and sites with orphan pages (not linked internally).</li>
              <li><strong className="text-slate-900 dark:text-white">Max 50,000 URLs</strong> per sitemap file, max 50MB uncompressed. Use a sitemap index file to split larger sites.</li>
              <li><strong className="text-slate-900 dark:text-white">Only include canonical URLs</strong> -- never include redirected, noindex, or paginated pages in your sitemap.</li>
              <li><strong className="text-slate-900 dark:text-white">Update frequency:</strong> Regenerate your sitemap automatically when pages are published, updated, or removed. Stale sitemaps hurt crawl efficiency.</li>
              <li><strong className="text-slate-900 dark:text-white">{'<lastmod>'}:</strong> Only use this tag when the page content has genuinely changed. Google ignores lastmod if it detects inaccurate dates.</li>
              <li><strong className="text-slate-900 dark:text-white">{'<priority>'} and {'<changefreq>'}:</strong> Google officially ignores these tags. Don't waste time setting them -- focus on lastmod accuracy instead.</li>
            </ul>
          </InfoTooltip>
        </div>

        <CodeBlock
          language="xml"
          code={`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-04-10</lastmod>
  </url>
  <url>
    <loc>https://example.com/memberships/</loc>
    <lastmod>2026-03-28</lastmod>
  </url>
  <url>
    <loc>https://example.com/fleet/global-7500/</loc>
    <lastmod>2026-04-02</lastmod>
  </url>
</urlset>`}
        />

        <div className="mt-4 grid md:grid-cols-2 gap-3">
          <div className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
            <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Sitemap Index (for large sites)</h4>
            <CodeBlock
              language="xml"
              code={`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://example.com/sitemap-pages.xml</loc>
    <lastmod>2026-04-10</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://example.com/sitemap-blog.xml</loc>
    <lastmod>2026-04-12</lastmod>
  </sitemap>
</sitemapindex>`}
            />
          </div>
          <div className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
            <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Image Sitemap</h4>
            <CodeBlock
              language="xml"
              code={`<url>
  <loc>https://example.com/fleet/</loc>
  <image:image>
    <image:loc>
      https://example.com/images/global-7500.webp
    </image:loc>
    <image:title>Global 7500 Private Jet</image:title>
  </image:image>
</url>`}
            />
            <p className="text-xs text-slate-500 mt-2">Image sitemaps help Google discover images that may be loaded via JavaScript or CSS backgrounds.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <FileSearch size={18} className="text-amber-600 dark:text-amber-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Robots.txt</h3>
          <InfoTooltip title="Robots.txt Rules" variant="warning">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Purpose:</strong> Robots.txt tells search engine crawlers which URLs they can and cannot access. It controls crawl budget, not indexing.</li>
              <li><strong className="text-slate-900 dark:text-white">Critical distinction:</strong> Disallowing a URL in robots.txt does NOT prevent it from being indexed. If other pages link to it, Google may still index it (without crawling the content). Use the noindex meta tag to prevent indexing.</li>
              <li><strong className="text-slate-900 dark:text-white">Block resources wisely:</strong> Never block CSS or JavaScript files -- Google needs them to render your pages for mobile-first indexing.</li>
              <li><strong className="text-slate-900 dark:text-white">Crawl budget:</strong> For large sites (10,000+ pages), robots.txt helps direct crawlers to your most important content by blocking low-value URLs.</li>
              <li><strong className="text-slate-900 dark:text-white">Testing:</strong> Always test your robots.txt using Google Search Console's robots.txt tester before deploying changes.</li>
              <li><strong className="text-slate-900 dark:text-white">Common mistake:</strong> Blocking /admin/ or /api/ is fine. Blocking /images/ or /assets/ will prevent Google from seeing your page properly.</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="text"
          code={`# robots.txt - hosted at https://example.com/robots.txt

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /search?
Disallow: /*?utm_

# Point crawlers to your sitemap
Sitemap: https://example.com/sitemap.xml

# Specific rules for aggressive crawlers
User-agent: AhrefsBot
Crawl-delay: 10`}
        />
        <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-800/30 rounded-lg">
          <p className="text-xs text-amber-700 dark:text-amber-300/80 leading-relaxed">
            <strong>Warning:</strong> Robots.txt is publicly accessible. Never put sensitive URLs in it -- you're essentially publishing a list of hidden pages. Use authentication or IP restrictions for truly private content.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Bell size={18} className="text-teal-600 dark:text-teal-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Google Search Console & Indexing API</h3>
          <InfoTooltip title="Search Console Indexing" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Submit sitemap:</strong> After creating your sitemap, submit it via Google Search Console &gt; Sitemaps. Monitor the coverage report for errors.</li>
              <li><strong className="text-slate-900 dark:text-white">URL Inspection Tool:</strong> Test individual URLs to see how Google renders and indexes them. Check for mobile usability issues, structured data errors, and crawl issues.</li>
              <li><strong className="text-slate-900 dark:text-white">Request indexing:</strong> Use the URL Inspection tool to request immediate indexing of new or updated pages. Limited to ~10 requests per day.</li>
              <li><strong className="text-slate-900 dark:text-white">Indexing API:</strong> For time-sensitive content (jobs, events, livestreams), use Google's Indexing API for near-instant indexing. Requires service account setup.</li>
              <li><strong className="text-slate-900 dark:text-white">Coverage report:</strong> Check weekly for "Excluded" pages. Common issues: "Discovered but not indexed", "Crawled but not indexed", and "Duplicate without canonical".</li>
              <li><strong className="text-slate-900 dark:text-white">Bing Webmaster Tools:</strong> Don't ignore Bing. Submit your sitemap there too -- Bing also powers Yahoo, DuckDuckGo, and AI assistants like Copilot.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {[
            {
              step: '01',
              title: 'Verify Ownership',
              desc: 'Add a DNS TXT record or HTML meta tag to prove you own the domain in Google Search Console.',
            },
            {
              step: '02',
              title: 'Submit Sitemap',
              desc: 'Go to Sitemaps > Add new sitemap. Enter your sitemap URL. Monitor the status for errors.',
            },
            {
              step: '03',
              title: 'Monitor Coverage',
              desc: 'Check the Pages report weekly. Fix "Crawled - not indexed" issues by improving content quality or internal links.',
            },
          ].map((item) => (
            <div key={item.step} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <span className="text-2xl font-bold text-teal-600 dark:text-teal-400/30">{item.step}</span>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mt-1 mb-1.5">{item.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <RefreshCw size={18} className="text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Crawl Budget & Indexing Signals</h3>
          <InfoTooltip title="Crawl Budget Optimization">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Crawl budget:</strong> The number of pages Google will crawl on your site in a given timeframe. Larger, slower sites exhaust their budget faster.</li>
              <li><strong className="text-slate-900 dark:text-white">Maximize it by:</strong> Fast server response ({'<'}200ms), clean URL structure, minimal redirects, and removing soft 404s.</li>
              <li><strong className="text-slate-900 dark:text-white">Canonical tags:</strong> Tell Google which version of duplicate pages to index. Always use absolute URLs in canonical tags.</li>
              <li><strong className="text-slate-900 dark:text-white">Index bloat:</strong> Having too many low-quality pages indexed dilutes your site's overall quality signal. Prune thin content or noindex it.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Index This Page</h4>
            <CodeBlock
              language="html"
              code={`<!-- Allow indexing (default behavior) -->
<meta name="robots" content="index, follow" />

<!-- Canonical tag (required on every page) -->
<link rel="canonical" href="https://example.com/page/" />`}
            />
          </div>
          <div className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Prevent Indexing</h4>
            <CodeBlock
              language="html"
              code={`<!-- Block from index (use for thin/duplicate pages) -->
<meta name="robots" content="noindex, follow" />

<!-- Block from all search engines via HTTP header -->
X-Robots-Tag: noindex, nofollow`}
            />
          </div>
        </div>
      </div>
    </SeoSection>
  );
}
