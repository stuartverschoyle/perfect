import { Code } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function SchemaSection() {
  const schemaTypes = [
    {
      type: 'Article',
      description: 'Blog posts, news articles, guides',
      benefit: 'Enables rich results with headline, image, date, and author in SERPs',
    },
    {
      type: 'Organization',
      description: 'Company info, logo, social profiles',
      benefit: 'Powers the Knowledge Panel when people search your brand',
    },
    {
      type: 'BreadcrumbList',
      description: 'Navigation path to current page',
      benefit: 'Shows breadcrumb trail in search results instead of raw URL',
    },
    {
      type: 'FAQPage',
      description: 'Question and answer pairs',
      benefit: 'Expands your listing with collapsible Q&A, taking more SERP space',
    },
    {
      type: 'Product',
      description: 'Product details, price, availability',
      benefit: 'Shows price, rating, and availability directly in search results',
    },
    {
      type: 'LocalBusiness',
      description: 'Address, hours, contact info',
      benefit: 'Appears in local map pack and "near me" searches',
    },
    {
      type: 'HowTo',
      description: 'Step-by-step instructions',
      benefit: 'Displays numbered steps directly in search results',
    },
    {
      type: 'Review',
      description: 'Star ratings and review content',
      benefit: 'Shows gold stars in SERPs, dramatically increasing CTR',
    },
  ];

  return (
    <SeoSection id="schema" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 shrink-0">
          <Code size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Schema Markup & JSON-LD</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Structured data tells search engines exactly what your content means, not just what it says. This unlocks rich results in SERPs.</p>
        </div>
      </div>

      {/* What is JSON-LD */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">What is JSON-LD?</h3>
          <InfoTooltip title="JSON-LD Structured Data">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">JSON-LD:</strong> JavaScript Object Notation for Linked Data. Google's preferred format for structured data.</li>
              <li><strong className="text-slate-900 dark:text-white">Purpose:</strong> Provides explicit, machine-readable information about your page's content to search engines.</li>
              <li><strong className="text-slate-900 dark:text-white">Placement:</strong> Goes in a script tag in the head or body of your HTML. Doesn't affect visual appearance.</li>
              <li><strong className="text-slate-900 dark:text-white">Rich results:</strong> Enables enhanced search listings with stars, prices, FAQs, breadcrumbs, and more.</li>
              <li><strong className="text-slate-900 dark:text-white">CTR boost:</strong> Pages with rich results see 20-40% higher click-through rates than standard listings.</li>
              <li><strong className="text-slate-900 dark:text-white">Voice search:</strong> AI assistants and voice search rely heavily on structured data to provide answers.</li>
              <li><strong className="text-slate-900 dark:text-white">Testing:</strong> Always validate your markup with Google's Rich Results Test (search.google.com/test/rich-results).</li>
            </ul>
          </InfoTooltip>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">JSON-LD is embedded in a script tag and provides structured information that search engines use to create rich results -- enhanced listings that stand out from standard blue links.</p>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
          <div className="text-xs text-slate-500 mb-2">How it appears in search results</div>
          <div className="space-y-1">
            <div className="text-sm text-sky-500 dark:text-sky-400 hover:underline cursor-pointer">How to Build the Perfect SEO Web Page | Brand</div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-emerald-600 dark:text-emerald-400">example.com</span>
              <span className="text-slate-600">&gt;</span>
              <span className="text-slate-500 dark:text-slate-400">SEO Guide</span>
              <span className="text-slate-600">&gt;</span>
              <span className="text-slate-500 dark:text-slate-400">Perfect Web Page</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <span className="text-amber-600 dark:text-amber-400">{'★★★★★'}</span>
              <span className="text-slate-500 dark:text-slate-400">Rating: 4.8 - 127 reviews - Updated Mar 2026</span>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Learn every element of a perfectly optimized web page...</div>
          </div>
        </div>
      </div>

      {/* Common Schema Types */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Common Schema Types</h3>
          <InfoTooltip title="Choosing Schema Types">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Match your content:</strong> Only use schema types that accurately describe your content. Misuse can result in manual penalties.</li>
              <li><strong className="text-slate-900 dark:text-white">Multiple schemas:</strong> A single page can have multiple schema types (e.g., Article + BreadcrumbList + Organization).</li>
              <li><strong className="text-slate-900 dark:text-white">Required vs optional:</strong> Each schema type has required and recommended properties. Always include all required properties.</li>
              <li><strong className="text-slate-900 dark:text-white">schema.org:</strong> The full vocabulary is at schema.org. Google supports a subset -- check their documentation for supported types.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {schemaTypes.map((s) => (
            <div key={s.type} className="bg-white dark:bg-slate-900/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700/30">
              <div className="font-mono text-sm text-orange-400 mb-1">{s.type}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">{s.description}</div>
              <div className="text-xs text-emerald-400/80">{s.benefit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Schema Example */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Article Schema Example</h3>
          <InfoTooltip title="Article Schema Details">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">@context:</strong> Always "https://schema.org" -- defines the vocabulary.</li>
              <li><strong className="text-slate-900 dark:text-white">@type:</strong> The schema type. "Article" for general content, "NewsArticle" for news, "BlogPosting" for blogs.</li>
              <li><strong className="text-slate-900 dark:text-white">headline:</strong> Must match or closely align with your H1 and title tag.</li>
              <li><strong className="text-slate-900 dark:text-white">image:</strong> Required for rich results. Must be at least 1200px wide.</li>
              <li><strong className="text-slate-900 dark:text-white">author:</strong> Linking to an author page with their own Person schema builds E-E-A-T signals.</li>
              <li><strong className="text-slate-900 dark:text-white">datePublished/Modified:</strong> Helps Google understand content freshness. Always update dateModified when you revise content.</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="json-ld"
          code={`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Build the Perfect SEO Web Page",
  "description": "A comprehensive guide to every SEO element...",
  "image": "https://example.com/images/seo-guide.webp",
  "author": {
    "@type": "Person",
    "name": "Jane Smith",
    "url": "https://example.com/about/jane-smith"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Brand Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.svg"
    }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-03-20",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/seo-guide/perfect-web-page"
  }
}
</script>`}
        />
      </div>

      {/* FAQ Schema Example */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">FAQ Schema Example</h3>
          <InfoTooltip title="FAQ Schema Benefits">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">SERP real estate:</strong> FAQ rich results can add 2-4 expandable questions below your listing, pushing competitors down the page.</li>
              <li><strong className="text-slate-900 dark:text-white">Voice search:</strong> FAQ schema is commonly used by voice assistants to provide spoken answers.</li>
              <li><strong className="text-slate-900 dark:text-white">Content match:</strong> FAQ answers in schema MUST match the visible content on your page. Google verifies this.</li>
              <li><strong className="text-slate-900 dark:text-white">Limit:</strong> Google typically displays 2-4 FAQ items in search results, but include all relevant Q&As.</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="json-ld"
          code={`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long should a title tag be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Title tags should be 50-60 characters. Google truncates longer titles in search results."
      }
    },
    {
      "@type": "Question",
      "name": "What image format is best for SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "WebP is the recommended format. It's 26-34% smaller than JPEG with equivalent quality."
      }
    }
  ]
}
</script>`}
        />
      </div>
    </SeoSection>
  );
}
