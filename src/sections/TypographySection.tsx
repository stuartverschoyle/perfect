import { Type, AlertTriangle } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function TypographySection() {
  return (
    <SeoSection id="typography" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-500 dark:text-sky-400 shrink-0">
          <Type size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Web Fonts & Typography</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Typography choices directly impact readability, Core Web Vitals, accessibility, and user engagement -- all of which Google measures and uses for rankings.</p>
        </div>
      </div>

      {/* Why Web Fonts Matter for SEO */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Type size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Why Web Fonts Matter for SEO</h3>
          <InfoTooltip title="Web Fonts & SEO Impact">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Readability:</strong> Font choice directly affects how easily users can read your content. Poor readability increases bounce rate, which signals low-quality content to Google.</li>
              <li><strong className="text-slate-900 dark:text-white">Core Web Vitals:</strong> Web fonts affect both CLS (Cumulative Layout Shift) when fonts swap and LCP (Largest Contentful Paint) when fonts block rendering.</li>
              <li><strong className="text-slate-900 dark:text-white">Accessibility:</strong> Fonts must be legible at various sizes for users with visual impairments. Google rewards accessible sites with better rankings.</li>
              <li><strong className="text-slate-900 dark:text-white">User engagement:</strong> Studies show that good typography increases reading time and comprehension. Google tracks dwell time as an engagement signal.</li>
              <li><strong className="text-slate-900 dark:text-white">Google measures everything:</strong> From font load time to layout shifts caused by font swaps, Google's Core Web Vitals capture the impact of your typography decisions.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            {
              title: 'Readability',
              description: 'Font choice affects how easily users consume content. Poor readability increases bounce rate.',
            },
            {
              title: 'Core Web Vitals',
              description: 'Fonts impact CLS (layout shifts during swap) and LCP (render-blocking font loads).',
            },
            {
              title: 'Accessibility',
              description: 'Legible fonts at various sizes serve users with visual impairments. Google rewards accessible design.',
            },
            {
              title: 'User Engagement',
              description: 'Good typography increases dwell time and comprehension -- both strong engagement signals for Google.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Font Loading Strategy */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Type size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Font Loading Strategy</h3>
          <InfoTooltip title="Font Loading & Performance">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">FOIT (Flash of Invisible Text):</strong> Without font-display, browsers hide text until the web font loads. Users see a blank page for up to 3 seconds -- devastating for engagement and LCP.</li>
              <li><strong className="text-slate-900 dark:text-white">FOUT (Flash of Unstyled Text):</strong> With font-display: swap, the browser shows text in a fallback font immediately, then swaps when the web font loads. Text is always visible.</li>
              <li><strong className="text-slate-900 dark:text-white">Why swap is critical:</strong> font-display: swap ensures content is immediately readable. Google explicitly recommends this approach for better LCP scores.</li>
              <li><strong className="text-slate-900 dark:text-white">Preconnect:</strong> Adding rel="preconnect" to font origins (like fonts.googleapis.com) saves 100-300ms by establishing the connection before the font is requested.</li>
              <li><strong className="text-slate-900 dark:text-white">LCP impact:</strong> Slow font loading delays text rendering, which is often the Largest Contentful Paint element. Every 100ms of delay hurts your LCP score.</li>
              <li><strong className="text-slate-900 dark:text-white">Best practice:</strong> Preconnect + font-display: swap + limited font weights = fastest possible font loading with zero invisible text.</li>
            </ul>
          </InfoTooltip>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">The optimal way to load Google Fonts: preconnect to the origin, then load with <code className="text-sky-600 dark:text-sky-300 font-mono">font-display: swap</code> to prevent invisible text (FOIT).</p>
        <CodeBlock
          language="html"
          code={`<!-- Step 1: Preconnect to Google Fonts origins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Step 2: Load fonts with display=swap to prevent FOIT -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
      rel="stylesheet" />

<!-- The display=swap parameter ensures:
     1. Text is immediately visible in a fallback font
     2. Web font swaps in once loaded
     3. No invisible text (FOIT) ever occurs
     4. Better LCP scores in Core Web Vitals -->`}
        />
      </div>

      {/* System Font Stack vs Web Fonts */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Type size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">System Font Stack vs Web Fonts</h3>
          <InfoTooltip title="Choosing the Right Font Strategy">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">System fonts:</strong> Use when performance is the top priority. Zero network requests, instant rendering, no CLS. Ideal for blogs, documentation, and content-heavy sites.</li>
              <li><strong className="text-slate-900 dark:text-white">Google Fonts:</strong> Use when brand consistency matters and you need a specific typeface. Free, well-cached across sites, but requires network requests.</li>
              <li><strong className="text-slate-900 dark:text-white">Self-hosted fonts:</strong> Use when you need maximum control over loading or must comply with GDPR. No third-party requests, full caching control.</li>
              <li><strong className="text-slate-900 dark:text-white">GDPR concern:</strong> Google Fonts sends user IP addresses to Google servers. In January 2022, a German court ruled this violates GDPR. For EU-targeted sites, self-host fonts instead.</li>
              <li><strong className="text-slate-900 dark:text-white">Performance ranking:</strong> System fonts (fastest) &gt; Self-hosted (fast) &gt; Google Fonts (good) &gt; Multiple web fonts (slowest).</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {[
            {
              title: 'System Fonts',
              pros: 'Zero load time, guaranteed rendering, no CLS',
              cons: 'Limited design control, varies by OS',
              best: 'Content-heavy sites, blogs, documentation',
            },
            {
              title: 'Google Fonts',
              pros: 'Vast library, free, well-cached across sites',
              cons: 'Network request, potential GDPR issue',
              best: 'Brand-focused sites, marketing pages',
            },
            {
              title: 'Self-Hosted Fonts',
              pros: 'Maximum control, GDPR compliant, full caching',
              cons: 'Manual setup, more bandwidth usage',
              best: 'EU-targeted sites, enterprise, privacy-focused',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <div className="font-semibold text-slate-900 dark:text-white text-sm mb-2">{item.title}</div>
              <div className="space-y-1.5">
                <div>
                  <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Pros: </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.pros}</span>
                </div>
                <div>
                  <span className="text-xs font-medium text-red-600 dark:text-red-400">Cons: </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.cons}</span>
                </div>
                <div>
                  <span className="text-xs font-medium text-sky-600 dark:text-sky-400">Best for: </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.best}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CodeBlock
          language="css"
          code={`/* System font stack -- zero load time, native look */
body {
  font-family:
    -apple-system,        /* macOS/iOS Safari */
    BlinkMacSystemFont,   /* macOS Chrome */
    "Segoe UI",           /* Windows */
    Roboto,               /* Android */
    "Helvetica Neue",     /* Older macOS */
    Arial,                /* Universal fallback */
    "Noto Sans",          /* Linux */
    sans-serif,           /* Generic fallback */
    "Apple Color Emoji",  /* macOS emoji */
    "Segoe UI Emoji",     /* Windows emoji */
    "Segoe UI Symbol",    /* Windows symbols */
    "Noto Color Emoji";   /* Linux emoji */
}`}
        />
      </div>

      {/* Typography Best Practices */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Type size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Typography Best Practices for Readability & SEO</h3>
          <InfoTooltip title="Readability & SEO Connection">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Dwell time:</strong> Google's research shows that readable content keeps users on the page longer. Higher dwell time signals valuable content.</li>
              <li><strong className="text-slate-900 dark:text-white">Bounce rate:</strong> Walls of text with poor line spacing cause users to leave immediately. Google tracks this as a negative engagement signal.</li>
              <li><strong className="text-slate-900 dark:text-white">Mobile readability:</strong> Over 60% of searches are on mobile. Text under 16px is hard to read on phones, leading to pinch-zooming and frustration.</li>
              <li><strong className="text-slate-900 dark:text-white">Accessibility compliance:</strong> WCAG AA requires 4.5:1 contrast ratio for normal text and 3:1 for large text (18px+ bold or 24px+ regular).</li>
              <li><strong className="text-slate-900 dark:text-white">Cognitive load:</strong> Optimal line length (45-75 characters) and generous line spacing reduce cognitive load, improving comprehension and time on page.</li>
              <li><strong className="text-slate-900 dark:text-white">Font weight loading:</strong> Each additional font weight adds ~20-50KB to page load. Limiting to 3 weights keeps pages fast without sacrificing design hierarchy.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            {
              title: 'Line Height',
              value: '1.5 - 1.75 for body, 1.2 for headings',
              description: 'Generous line spacing improves readability and reduces eye strain, keeping users engaged longer.',
            },
            {
              title: 'Font Size',
              value: 'Minimum 16px (1rem) for body text',
              description: 'Anything smaller is hard to read on mobile without zooming. Google flags small text in mobile usability reports.',
            },
            {
              title: 'Line Length',
              value: 'Maximum 75 characters per line',
              description: 'Optimal reading range is 45-75 characters. Wider lines cause readers to lose their place.',
            },
            {
              title: 'Font Weights',
              value: '3 weights maximum (e.g., 400, 500, 700)',
              description: 'Each weight adds network load. Limit to regular, medium, and bold for the best performance-to-design ratio.',
            },
            {
              title: 'Contrast Ratio (WCAG AA)',
              value: '4.5:1 normal text, 3:1 large text',
              description: 'Insufficient contrast makes text unreadable for low-vision users. Google uses accessibility as a ranking signal.',
            },
            {
              title: 'Heading Hierarchy',
              value: 'Clear size progression from H1 to H6',
              description: 'Visual hierarchy guides readers through content and helps search engines understand content structure.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</span>
              <div className="text-xs font-mono text-sky-600 dark:text-sky-300 mt-1">{item.value}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Common Font Mistakes */}
      <div className="bg-amber-50 dark:bg-amber-500/5 rounded-xl border border-amber-300 dark:border-amber-500/20 p-5">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={18} className="text-amber-600 dark:text-amber-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Common Font Mistakes</h3>
          <InfoTooltip title="Font Mistakes to Avoid" variant="warning">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Performance audit:</strong> Run Google PageSpeed Insights and check for font-related warnings. "Ensure text remains visible during webfont load" is one of the most common issues.</li>
              <li><strong className="text-slate-900 dark:text-white">CLS from fonts:</strong> When a web font loads and replaces the fallback, the different metrics (x-height, width) cause layout shifts. This directly hurts your CLS score.</li>
              <li><strong className="text-slate-900 dark:text-white">Unused font weights:</strong> Auditing tools like Chrome DevTools Coverage tab can show which font files are loaded but never used on the page.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="space-y-2.5">
          {[
            {
              mistake: 'Loading too many font weights',
              impact: 'Each unused weight adds 20-50KB to page load, directly hurting LCP and page speed scores.',
            },
            {
              mistake: 'Using decorative fonts for body text',
              impact: 'Decorative and display fonts reduce readability at small sizes, increasing bounce rate.',
            },
            {
              mistake: 'Missing fallback fonts in font-family',
              impact: 'Without fallbacks, the browser uses its default. When the web font loads, the size difference causes CLS.',
            },
            {
              mistake: 'Not setting font-display property',
              impact: 'Without font-display: swap, text is invisible (FOIT) until the font loads -- users see a blank page.',
            },
            {
              mistake: 'Using px instead of rem for font sizes',
              impact: 'px overrides user browser font-size preferences, breaking accessibility for visually impaired users.',
            },
          ].map((item) => (
            <div key={item.mistake} className="flex items-start gap-3 bg-white dark:bg-slate-900/50 rounded-lg p-3.5 border border-slate-200 dark:border-slate-700/30">
              <AlertTriangle size={14} className="text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.mistake}</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Font Size with rem Units */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Type size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Font Size with rem Units</h3>
          <InfoTooltip title="rem vs px for Accessibility">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">How rem works:</strong> 1rem equals the font-size set on the html element (default is 16px in all browsers). So 1rem = 16px, 1.5rem = 24px, 0.875rem = 14px.</li>
              <li><strong className="text-slate-900 dark:text-white">Browser settings:</strong> Users with visual impairments often increase their browser's default font size (e.g., from 16px to 20px). rem values scale with this setting; px values do not.</li>
              <li><strong className="text-slate-900 dark:text-white">Accessibility law:</strong> WCAG 1.4.4 requires text to be resizable up to 200% without loss of content. Using rem makes this automatic.</li>
              <li><strong className="text-slate-900 dark:text-white">SEO connection:</strong> Google's mobile-friendly test checks for readable font sizes. Sites that ignore user preferences score lower in accessibility audits.</li>
              <li><strong className="text-slate-900 dark:text-white">Best practice:</strong> Set html font-size to 100% (not a px value), then use rem throughout. This respects user preferences everywhere.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          <div className="bg-emerald-50 dark:bg-emerald-500/5 rounded-lg border border-emerald-300 dark:border-emerald-500/20 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">rem (Accessible)</span>
            </div>
            <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Scales with user browser settings</li>
              <li>Respects accessibility preferences</li>
              <li>WCAG 1.4.4 compliant by default</li>
              <li>Consistent proportional scaling</li>
            </ul>
          </div>
          <div className="bg-amber-50 dark:bg-amber-500/5 rounded-lg border border-amber-300 dark:border-amber-500/20 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">px (Problematic)</span>
            </div>
            <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              <li>Ignores user font-size preferences</li>
              <li>Breaks accessibility for low-vision users</li>
              <li>Fixed size regardless of settings</li>
              <li>Fails WCAG text resizing requirement</li>
            </ul>
          </div>
        </div>
        <CodeBlock
          language="css"
          code={`/* Set base font-size to respect user preferences */
html {
  font-size: 100%; /* Don't use px here -- let the browser default work */
}

/* Use rem for all typography */
body {
  font-size: 1rem;        /* 16px at default settings */
  line-height: 1.625;     /* 26px -- comfortable reading */
}

h1 { font-size: 2.25rem; }  /* 36px */
h2 { font-size: 1.875rem; } /* 30px */
h3 { font-size: 1.5rem; }   /* 24px */
h4 { font-size: 1.25rem; }  /* 20px */
p  { font-size: 1rem; }     /* 16px */
small { font-size: 0.875rem; } /* 14px */

/* When a user sets their browser to 20px default:
   - rem values: body becomes 20px, h1 becomes 45px (scales!)
   - px values: body stays 16px, h1 stays 36px (ignores user) */

/* Maximum line width for readability */
.content {
  max-width: 65ch; /* ~65 characters per line */
}`}
        />
      </div>
    </SeoSection>
  );
}
