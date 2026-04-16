import { CornerDownRight, AlertTriangle, ArrowRightLeft, RefreshCw } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function RedirectsSection() {
  return (
    <SeoSection id="redirects" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
          <CornerDownRight size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Redirects & Site Migrations</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">How to move, rename, or restructure pages without losing the search rankings and link equity you've built.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <ArrowRightLeft size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Redirect Types</h3>
          <InfoTooltip title="Understanding Redirects">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">301 (Permanent):</strong> The old URL has permanently moved to a new one. Passes ~95% of link equity. Use for URL changes, domain migrations, and consolidating duplicate content.</li>
              <li><strong className="text-slate-900 dark:text-white">302 (Temporary):</strong> The old URL is temporarily unavailable. Does NOT pass link equity reliably. Use only for genuinely temporary situations (maintenance, A/B tests).</li>
              <li><strong className="text-slate-900 dark:text-white">307 (Temporary, method preserved):</strong> HTTP/1.1 equivalent of 302 that preserves the request method (POST stays POST). Used in technical scenarios.</li>
              <li><strong className="text-slate-900 dark:text-white">308 (Permanent, method preserved):</strong> HTTP/1.1 equivalent of 301 that preserves the request method. Less common but technically correct for APIs.</li>
              <li><strong className="text-slate-900 dark:text-white">Meta refresh / JavaScript redirect:</strong> Avoid these. They are slow, unreliable for SEO, and may not pass link equity. Always use server-side redirects.</li>
              <li><strong className="text-slate-900 dark:text-white">Canonical vs Redirect:</strong> Use canonicals when both URLs should remain accessible (pagination, parameters). Use redirects when the old URL should stop being used entirely.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-800/30 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">301 Permanent Redirect</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Use when a page has permanently moved. Passes link equity to the new URL.</p>
            <CodeBlock
              language="nginx"
              code={`# Nginx
rewrite ^/old-page$ /new-page permanent;

# Apache .htaccess
Redirect 301 /old-page /new-page

# Vercel/Next.js (vercel.json)
{ "source": "/old-page", "destination": "/new-page", "permanent": true }`}
            />
          </div>
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-800/30 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">302 Temporary Redirect</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Use only for genuinely temporary moves. Google keeps indexing the original URL.</p>
            <CodeBlock
              language="nginx"
              code={`# Nginx
rewrite ^/sale$ /seasonal-sale redirect;

# Apache .htaccess
Redirect 302 /sale /seasonal-sale

# Common legitimate uses:
# - A/B testing landing pages
# - Maintenance/downtime pages
# - Geo-specific temporary redirects`}
            />
          </div>
        </div>

        <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-800/30 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1.5">
            <AlertTriangle size={14} className="text-red-600 dark:text-red-400" />
            <span className="text-xs font-semibold text-red-600 dark:text-red-400">Common Redirect Mistakes</span>
          </div>
          <ul className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
            <li><strong className="text-red-300">Redirect chains:</strong> A redirects to B, which redirects to C. Google follows up to 5 hops but each hop loses equity. Always redirect directly to the final URL.</li>
            <li><strong className="text-red-300">Redirect loops:</strong> A redirects to B, B redirects to A. Results in a crawl error and both pages become inaccessible.</li>
            <li><strong className="text-red-300">Soft 404s:</strong> Redirecting deleted pages to the homepage instead of a relevant page. Google treats this as a soft 404 and ignores the redirect.</li>
            <li><strong className="text-red-300">Using 302 instead of 301:</strong> The most common mistake. If the move is permanent, always use 301.</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <RefreshCw size={18} className="text-teal-600 dark:text-teal-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Site Migration Checklist</h3>
          <InfoTooltip title="Safe Site Migration" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Site migrations are the highest-risk SEO activity.</strong> Even well-executed migrations typically see a 10-20% traffic dip for 2-4 weeks.</li>
              <li><strong className="text-slate-900 dark:text-white">Types of migrations:</strong> Domain change, HTTP to HTTPS, URL restructure, platform change (e.g., WordPress to Next.js), or site redesign.</li>
              <li><strong className="text-slate-900 dark:text-white">Timing:</strong> Never migrate during peak season. Choose your lowest-traffic period. Allow 3-6 months of preparation time.</li>
              <li><strong className="text-slate-900 dark:text-white">Rollback plan:</strong> Always have a way to reverse the migration within 24 hours if something goes catastrophically wrong.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {[
            {
              phase: 'Before',
              color: 'sky',
              steps: [
                'Crawl entire current site (Screaming Frog)',
                'Export all URLs, titles, meta descriptions',
                'Document all existing redirects',
                'Benchmark current rankings and traffic',
                'Create a complete 1:1 URL mapping spreadsheet',
                'Set up the redirect rules (test on staging)',
                'Copy all robots.txt and sitemap configs',
              ],
            },
            {
              phase: 'During',
              color: 'amber',
              steps: [
                'Implement all 301 redirects at once',
                'Update internal links to new URLs',
                'Submit new sitemap to Search Console',
                'Update canonical tags to new URLs',
                'Verify robots.txt on new domain/structure',
                'Update all structured data / JSON-LD',
                'Update Google Analytics tracking code',
              ],
            },
            {
              phase: 'After',
              color: 'emerald',
              steps: [
                'Crawl new site, check for broken links',
                'Monitor Search Console for crawl errors daily',
                'Track keyword rankings daily for 4 weeks',
                'Check indexed page count matches expectations',
                'Monitor organic traffic vs. pre-migration baseline',
                'Keep old redirects active for 12+ months',
                'Update external backlinks where possible',
              ],
            },
          ].map((item) => (
            <div key={item.phase} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <h4 className={`text-sm font-bold text-${item.color}-400 mb-3 uppercase tracking-wider`}>{item.phase} Migration</h4>
              <ul className="space-y-2">
                {item.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-[10px] text-slate-600 font-mono w-3 shrink-0 text-right">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SeoSection>
  );
}
