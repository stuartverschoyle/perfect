import { Globe, Tag, Share2, Link2, FileCode } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';
import SerpSocialPreviewPlayground from '../components/SerpSocialPreviewPlayground';

export default function MetaSection() {
  return (
    <SeoSection id="meta" className="space-y-8">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-500 dark:text-sky-400 shrink-0">
          <Globe size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Meta Data & Head Tags</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-1">
            The invisible foundation that tells search engines exactly what your page is about.
          </p>
        </div>
      </div>

      <SerpSocialPreviewPlayground />

      {/* Title Tag */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Tag size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Title Tag</h3>
          <InfoTooltip title="Title Tag Best Practices">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Length:</strong> Keep between 50-60 characters. Google typically displays the first 50-60 characters. Anything longer gets truncated with an ellipsis.</li>
              <li><strong className="text-slate-900 dark:text-white">Placement:</strong> Put your primary keyword near the beginning of the title for maximum SEO weight.</li>
              <li><strong className="text-slate-900 dark:text-white">Uniqueness:</strong> Every page on your site must have a unique title tag. Duplicate titles confuse search engines and dilute ranking signals.</li>
              <li><strong className="text-slate-900 dark:text-white">Branding:</strong> Include your brand name at the end, separated by a pipe (|) or dash (-). Example: "Primary Keyword - Secondary Keyword | Brand"</li>
              <li><strong className="text-slate-900 dark:text-white">Avoid:</strong> Keyword stuffing, ALL CAPS, and generic titles like "Home" or "Welcome".</li>
              <li><strong className="text-slate-900 dark:text-white">CTR Impact:</strong> The title tag is the clickable headline in search results. A compelling title directly increases your click-through rate.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid min-w-0 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-500/20 bg-white dark:bg-slate-900/40 p-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">Good</h4>
              <span className="text-xs text-emerald-700 dark:text-emerald-300 font-mono">56 / 60</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 border border-slate-200 dark:border-slate-700/50">
              <div className="text-xs text-slate-700 dark:text-slate-300 mb-1">Browser tab preview</div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 rounded-md px-3 py-2 border border-slate-200 dark:border-slate-700/50">
                <img
                  src="https://www.google.com/s2/favicons?domain=example.com&sz=64"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 rounded-sm shrink-0 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-sm text-slate-900 dark:text-white truncate">
                  How to Build the Perfect SEO Web Page | SEO Guide 2026
                </span>
              </div>
            </div>
            <CodeBlock
              language="html"
              code={`<title>How to Build the Perfect SEO Web Page | SEO Guide 2026</title>
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />`}
            />
            <ul className="mt-2 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <li>- Primary keyword near the front</li>
              <li>- Clear intent + strong CTR phrasing</li>
              <li>- Brand at the end</li>
              <li>- Favicon next to the title in the tab (via <code className="font-mono text-[11px]">rel=&quot;icon&quot;</code>)</li>
            </ul>
          </div>

          <div className="rounded-xl border border-rose-200 dark:border-rose-500/20 bg-white dark:bg-slate-900/40 p-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <h4 className="text-sm font-semibold text-rose-800 dark:text-rose-300">Poor</h4>
              <span className="text-xs text-rose-700 dark:text-rose-300 font-mono">110+ / 60</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 border border-slate-200 dark:border-slate-700/50">
              <div className="text-xs text-slate-700 dark:text-slate-300 mb-1">Browser tab preview</div>
              <div className="flex items-center gap-2 bg-white dark:bg-slate-900 rounded-md px-3 py-2 border border-slate-200 dark:border-slate-700/50">
                <div className="w-4 h-4 rounded bg-rose-500/20 shrink-0" aria-hidden="true" />
                <span className="text-sm text-slate-900 dark:text-white truncate">
                  Home | SEO SEO SEO Best SEO Web Page Perfect SEO Guide 2026 Free Checklist
                </span>
              </div>
            </div>
            <CodeBlock
              language="html"
              code={`<title>Home | SEO SEO SEO Best SEO Web Page Perfect SEO Guide 2026 Free Checklist</title>`}
            />
            <ul className="mt-2 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <li>- Keyword stuffing looks spammy</li>
              <li>- Too long → truncation</li>
              <li>- “Home” tells Google nothing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Meta Description */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <FileCode size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Meta Description</h3>
          <InfoTooltip title="Meta Description Best Practices">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Length:</strong> Keep between 150-160 characters. Google truncates descriptions beyond ~155 characters on desktop and ~120 on mobile.</li>
              <li><strong className="text-slate-900 dark:text-white">Purpose:</strong> This is your "ad copy" in search results. It doesn't directly affect rankings but massively impacts click-through rates.</li>
              <li><strong className="text-slate-900 dark:text-white">Keywords:</strong> Include your target keyword naturally. Google bolds matching search terms in the description, making your result stand out.</li>
              <li><strong className="text-slate-900 dark:text-white">Action-oriented:</strong> Use a call-to-action like "Learn how...", "Discover...", "Find out..."</li>
              <li><strong className="text-slate-900 dark:text-white">Uniqueness:</strong> Every page needs a unique meta description. Duplicates can trigger Google to auto-generate one instead.</li>
              <li><strong className="text-slate-900 dark:text-white">Avoid:</strong> Double quotes (they get cut off), generic descriptions, and keyword stuffing.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid min-w-0 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-500/20 bg-white dark:bg-slate-900/40 p-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <h4 className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">Good</h4>
              <span className="text-xs text-emerald-700 dark:text-emerald-300 font-mono">153 / 160</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 border border-slate-200 dark:border-slate-700/50">
              <div className="text-xs text-slate-700 dark:text-slate-300 mb-2">Google search preview</div>
              <div className="space-y-1">
                <div className="text-sm text-sky-700 dark:text-sky-300 underline underline-offset-4">
                  How to Build the Perfect SEO Web Page | SEO Guide 2026
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300 font-mono">
                  https://example.com/seo-guide/perfect-web-page
                </div>
                <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Learn every element of a perfectly optimized web page for SEO. From meta tags and heading structure to image optimization and schema markup — your complete guide.
                </div>
              </div>
            </div>
            <CodeBlock
              language="html"
              code={`<meta name="description" content="Learn every element of a perfectly optimized web page for SEO. From meta tags and heading structure to image optimization and schema markup — your complete guide." />`}
            />
            <ul className="mt-2 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <li>- Matches the query and page intent</li>
              <li>- Includes keyword naturally</li>
              <li>- Reads like compelling ad copy</li>
            </ul>
          </div>

          <div className="rounded-xl border border-rose-200 dark:border-rose-500/20 bg-white dark:bg-slate-900/40 p-4">
            <div className="flex items-center justify-between gap-3 mb-2">
              <h4 className="text-sm font-semibold text-rose-800 dark:text-rose-300">Poor</h4>
              <span className="text-xs text-rose-700 dark:text-rose-300 font-mono">Generic</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 border border-slate-200 dark:border-slate-700/50">
              <div className="text-xs text-slate-700 dark:text-slate-300 mb-2">Google search preview</div>
              <div className="space-y-1">
                <div className="text-sm text-sky-700 dark:text-sky-300 underline underline-offset-4">
                  Home | Optimise
                </div>
                <div className="text-xs text-emerald-700 dark:text-emerald-300 font-mono">https://example.com/</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Welcome to our website. We offer great services. Click here to learn more.
                </div>
              </div>
            </div>
            <CodeBlock
              language="html"
              code={`<meta name="description" content="Welcome to our website. We offer great services. Click here to learn more." />`}
            />
            <ul className="mt-2 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <li>- Doesn’t describe the page</li>
              <li>- No keyword / no intent match</li>
              <li>- “Click here” isn’t useful for users</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Open Graph */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Share2 size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Open Graph Tags</h3>
          <InfoTooltip title="Open Graph (OG) Tags">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">What:</strong> Open Graph protocol controls how your page appears when shared on social media (Facebook, LinkedIn, Twitter/X, Slack, etc.).</li>
              <li><strong className="text-slate-900 dark:text-white">og:title:</strong> Can differ from your page title. Optimize for social engagement rather than keywords.</li>
              <li><strong className="text-slate-900 dark:text-white">og:description:</strong> A compelling social-specific description. Can be more conversational than your meta description.</li>
              <li><strong className="text-slate-900 dark:text-white">og:image:</strong> The most important OG tag. Ideal size: 1200x630px. This is what makes shared links visually compelling.</li>
              <li><strong className="text-slate-900 dark:text-white">og:type:</strong> Usually "website" or "article". Helps platforms understand your content type.</li>
              <li><strong className="text-slate-900 dark:text-white">og:url:</strong> The canonical URL of your page. Prevents duplicate content signals from social shares.</li>
              <li><strong className="text-slate-900 dark:text-white">Twitter/X:</strong> Use twitter:card, twitter:title, twitter:description, and twitter:image for X-specific control.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">Social share preview (live og:image)</div>
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden max-w-sm bg-slate-50 dark:bg-slate-950 shadow-sm">
            <div className="relative aspect-[1200/630] w-full bg-slate-200 dark:bg-slate-800">
              <img
                src="/laptop-and-computer.webp"
                alt=""
                width={1200}
                height={630}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700/50">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">example.com</div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">
                How to Build the Perfect SEO Web Page | SEO Guide 2026
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-3 leading-relaxed">
                Learn every element of a perfectly optimized web page for SEO. From meta tags and heading structure to image optimization and schema markup — your complete guide.
              </div>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
            Preview uses the same public image URL as in the <code className="font-mono text-sky-700 dark:text-sky-300">og:image</code> example below (intrinsic 1200×630, the usual share-card size).
          </p>
        </div>
        <CodeBlock
          language="html"
          code={`<meta property="og:title" content="How to Build the Perfect SEO Web Page | SEO Guide 2026" />
<meta property="og:description" content="Learn every element of a perfectly optimized web page for SEO. From meta tags and heading structure to image optimization and schema markup — your complete guide." />
<meta property="og:image" content="/laptop-and-computer.webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://example.com/seo-guide/perfect-web-page" />
<meta property="og:type" content="article" />
<meta property="og:site_name" content="Example" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="How to Build the Perfect SEO Web Page | SEO Guide 2026" />
<meta name="twitter:description" content="Learn every element of a perfectly optimized web page for SEO. From meta tags and heading structure to image optimization and schema markup — your complete guide." />
<meta name="twitter:image" content="/laptop-and-computer.webp" />`}
        />
      </div>

      {/* Canonical URL */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Link2 size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Canonical URL</h3>
          <InfoTooltip title="Canonical URL" variant="warning">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Purpose:</strong> Tells search engines which version of a page is the "master" copy. Prevents duplicate content penalties.</li>
              <li><strong className="text-slate-900 dark:text-white">When needed:</strong> If your content appears at multiple URLs (with/without www, HTTP/HTTPS, query parameters, paginated pages), canonical tags consolidate ranking signals to one URL.</li>
              <li><strong className="text-slate-900 dark:text-white">Self-referencing:</strong> Every page should have a self-referencing canonical tag, even if there are no duplicates. This is considered best practice.</li>
              <li><strong className="text-slate-900 dark:text-white">Cross-domain:</strong> You can point canonical to a different domain if content is syndicated. This gives ranking credit to the original source.</li>
              <li><strong className="text-slate-900 dark:text-white">Common mistake:</strong> Forgetting canonical tags on paginated content (page 1, page 2, etc.), leading search engines to see them as duplicate content.</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="html"
          code={`<link rel="canonical" href="https://example.com/seo-guide/perfect-web-page" />`}
        />
        <div className="flex items-start gap-2 mt-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-500/5 border border-amber-300 dark:border-amber-500/20">
          <span className="text-amber-600 dark:text-amber-400 text-sm mt-0.5">!</span>
          <p className="text-sm text-amber-700 dark:text-amber-300/80">Missing canonical tags is one of the most common SEO mistakes. Always include one, even on pages with no duplicates.</p>
        </div>
      </div>

      {/* Robots Meta */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <FileCode size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Robots Meta Tag</h3>
          <InfoTooltip title="Robots Meta Tag">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">index/noindex:</strong> Controls whether search engines add this page to their index. Use "noindex" for pages like thank-you pages, internal search results, or staging environments.</li>
              <li><strong className="text-slate-900 dark:text-white">follow/nofollow:</strong> Controls whether search engines follow links on the page. "nofollow" means links won't pass PageRank.</li>
              <li><strong className="text-slate-900 dark:text-white">Default behavior:</strong> If no robots tag is present, search engines default to "index, follow" -- meaning the page is indexed and all links are followed.</li>
              <li><strong className="text-slate-900 dark:text-white">max-snippet:</strong> Controls the maximum text length of a search snippet. Use "max-snippet:-1" for unlimited.</li>
              <li><strong className="text-slate-900 dark:text-white">max-image-preview:</strong> Controls the size of image previews in search results. "large" is recommended for most pages.</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="html"
          code={`<!-- Allow indexing and link following (default, but explicit is better) -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

<!-- Block indexing (for pages you don't want in search results) -->
<meta name="robots" content="noindex, nofollow" />`}
        />
      </div>
    </SeoSection>
  );
}
