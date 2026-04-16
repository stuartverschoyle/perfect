import { Settings, Gauge, Smartphone, Shield } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function TechnicalSection() {
  return (
    <SeoSection id="technical" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-slate-500/10 text-slate-600 dark:text-slate-300 shrink-0">
          <Settings size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Technical SEO Essentials</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">The technical foundation that ensures search engines can crawl, render, and index your pages efficiently.</p>
        </div>
      </div>

      {/* Core Web Vitals */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Gauge size={18} className="text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Core Web Vitals</h3>
          <InfoTooltip title="Core Web Vitals" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">What:</strong> Google's set of metrics measuring real-world user experience. They are a confirmed ranking factor.</li>
              <li><strong className="text-slate-900 dark:text-white">LCP (Largest Contentful Paint):</strong> Measures loading. The largest visible element should render within 2.5 seconds.</li>
              <li><strong className="text-slate-900 dark:text-white">INP (Interaction to Next Paint):</strong> Measures interactivity. User interactions should produce visual feedback within 200ms.</li>
              <li><strong className="text-slate-900 dark:text-white">CLS (Cumulative Layout Shift):</strong> Measures visual stability. Elements shouldn't move around as the page loads. Score should be under 0.1.</li>
              <li><strong className="text-slate-900 dark:text-white">Impact on designers:</strong> Image sizes, font loading, and layout decisions directly affect these metrics.</li>
              <li><strong className="text-slate-900 dark:text-white">Impact on copywriters:</strong> Above-the-fold content must be lightweight and not depend on heavy resources.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {[
            {
              metric: 'LCP',
              name: 'Largest Contentful Paint',
              good: '< 2.5s',
              poor: '> 4.0s',
              color: 'emerald',
              tip: 'Optimize hero images, preload key resources, use CDN',
            },
            {
              metric: 'INP',
              name: 'Interaction to Next Paint',
              good: '< 200ms',
              poor: '> 500ms',
              color: 'amber',
              tip: 'Minimize JavaScript, break up long tasks, defer non-critical scripts',
            },
            {
              metric: 'CLS',
              name: 'Cumulative Layout Shift',
              good: '< 0.1',
              poor: '> 0.25',
              color: 'sky',
              tip: 'Set image dimensions, reserve space for ads/embeds, use font-display: swap',
            },
          ].map((v) => (
            <div key={v.metric} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <div className={`text-lg font-bold text-${v.color}-400`}>{v.metric}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">{v.name}</div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-emerald-600 dark:text-emerald-400">Good: {v.good}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-red-600 dark:text-red-400">Poor: {v.poor}</span>
              </div>
              <div className="text-xs text-slate-500">{v.tip}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Responsiveness */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Smartphone size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Mobile-First Indexing</h3>
          <InfoTooltip title="Mobile-First Indexing">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">What:</strong> Google predominantly uses the mobile version of your site for indexing and ranking. Desktop is secondary.</li>
              <li><strong className="text-slate-900 dark:text-white">Responsive design:</strong> Use CSS media queries to adapt layouts to all screen sizes. This is the Google-recommended approach.</li>
              <li><strong className="text-slate-900 dark:text-white">Touch targets:</strong> Buttons and links should be at least 48x48px with 8px spacing between them.</li>
              <li><strong className="text-slate-900 dark:text-white">Font sizes:</strong> Minimum 16px base font size on mobile. Anything smaller fails accessibility and SEO tests.</li>
              <li><strong className="text-slate-900 dark:text-white">No horizontal scroll:</strong> Content must not require horizontal scrolling on mobile. This is a significant UX/SEO penalty.</li>
              <li><strong className="text-slate-900 dark:text-white">Content parity:</strong> Your mobile version must contain the same content as desktop. Don't hide content on mobile.</li>
              <li><strong className="text-slate-900 dark:text-white">Viewport meta:</strong> Always include the viewport meta tag: width=device-width, initial-scale=1.0</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="html"
          code={`<!-- Required viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Responsive image example -->
<img srcset="hero-400.webp 400w, hero-800.webp 800w"
     sizes="(max-width: 600px) 100vw, 800px"
     src="hero-800.webp"
     alt="Descriptive alt text" />`}
        />
        <div className="mt-3 grid grid-cols-3 gap-3">
          {[
            { device: 'Mobile', width: '320-480px', icon: '4"- 6"' },
            { device: 'Tablet', width: '768-1024px', icon: '7"-12"' },
            { device: 'Desktop', width: '1024px+', icon: '13"+ ' },
          ].map((d) => (
            <div key={d.device} className="bg-white dark:bg-slate-900/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700/30 text-center">
              <div className="text-sm font-medium text-slate-900 dark:text-white">{d.device}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{d.width}</div>
              <div className="text-xs text-slate-500 mt-0.5">{d.icon}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Page Speed */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Gauge size={18} className="text-amber-600 dark:text-amber-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Page Speed Optimization</h3>
          <InfoTooltip title="Speed Optimization Tips">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Target:</strong> Pages should load in under 3 seconds. Every additional second increases bounce rate by ~32%.</li>
              <li><strong className="text-slate-900 dark:text-white">Minify resources:</strong> Compress CSS, JavaScript, and HTML. Remove whitespace, comments, and unused code.</li>
              <li><strong className="text-slate-900 dark:text-white">Browser caching:</strong> Set appropriate cache headers. Static assets should cache for at least 1 year.</li>
              <li><strong className="text-slate-900 dark:text-white">CDN:</strong> Serve assets from a Content Delivery Network. Reduces latency by serving from the nearest edge server.</li>
              <li><strong className="text-slate-900 dark:text-white">Preload critical resources:</strong> Use link rel="preload" for fonts, hero images, and above-the-fold CSS.</li>
              <li><strong className="text-slate-900 dark:text-white">Defer non-critical JS:</strong> Use async or defer attributes on scripts that aren't needed for initial render.</li>
              <li><strong className="text-slate-900 dark:text-white">Font optimization:</strong> Use font-display: swap to prevent invisible text during font loading (FOIT).</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="html"
          code={`<!-- Preload critical resources -->
<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/hero.webp" as="image" />

<!-- Defer non-critical JavaScript -->
<script src="/analytics.js" defer></script>
<script src="/chat-widget.js" async></script>

<!-- Preconnect to third-party origins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://analytics.example.com" />`}
        />
      </div>

      {/* HTTPS & Security */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={18} className="text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">HTTPS & Security</h3>
          <InfoTooltip title="HTTPS for SEO">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Ranking factor:</strong> HTTPS is a confirmed Google ranking signal. Non-HTTPS sites are at a disadvantage.</li>
              <li><strong className="text-slate-900 dark:text-white">Trust signal:</strong> Browsers show "Not Secure" warnings on HTTP sites. This destroys user trust and increases bounce rates.</li>
              <li><strong className="text-slate-900 dark:text-white">Data integrity:</strong> HTTPS prevents content injection and man-in-the-middle attacks.</li>
              <li><strong className="text-slate-900 dark:text-white">Referral data:</strong> HTTPS-to-HTTP traffic loses referral information in analytics, making it appear as direct traffic.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="flex items-center gap-3 bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <Shield size={16} />
            <span className="font-mono text-sm">https://</span>
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-300">Always use HTTPS. No exceptions. It's free with Let's Encrypt and most hosting providers.</span>
        </div>
      </div>
    </SeoSection>
  );
}
