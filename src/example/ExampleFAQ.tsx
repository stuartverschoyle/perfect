import SeoAnnotation from './SeoAnnotation';

const faqs = [
  {
    q: 'How long until SEO changes show in search results?',
    a: 'Technical fixes can be reflected within days once recrawled; ranking shifts from content updates often take several weeks. Use Search Console and your analytics baseline to judge, not day-to-day noise.',
  },
  {
    q: 'Do meta descriptions affect rankings?',
    a: 'They are not a direct ranking factor, but they strongly influence click-through rate. Better CTR can indirectly help as engagement signals accumulate.',
  },
  {
    q: 'Should my H1 match my title tag exactly?',
    a: 'They should align on topic and intent, but word-for-word duplication is not required. Avoid multiple H1s or hiding keywords only for crawlers.',
  },
  {
    q: 'What is the best image format for Core Web Vitals?',
    a: 'Prefer modern formats (AVIF or WebP) with responsive srcset so mobile does not download desktop-sized files. Always reserve width and height to limit layout shift.',
  },
  {
    q: 'When should I use FAQ schema?',
    a: 'Use it when the on-page content genuinely asks and answers those questions with visible text. Markup must match what users see; do not add schema for content that is not on the page.',
  },
];

export default function ExampleFAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-white dark:bg-[#0a0a0a] scroll-mt-20" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mb-8">
          <SeoAnnotation
            label="FAQ pattern"
            position="top-right"
            tone="sky"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Questions people ask</p>
                  <p>Mirror real support and search queries. Short questions with direct answers perform well for snippets and AI summaries.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Disclosure UX</p>
                  <p>
                    <code className="text-teal-600 dark:text-teal-400">&lt;details&gt;</code> keeps the page scannable; ensure focus styles are visible.
                  </p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">FAQ schema</p>
                  <p>Pair this block with valid FAQPage JSON-LD where appropriate; validate in Rich Results Test.</p>
                </>
              ),
            }}
          />
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Expand each item. The answers are written to be quotable in search and assistant-style results.
          </p>
        </div>

        <div className="max-w-3xl space-y-2">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-white/[0.03] open:bg-white dark:open:bg-slate-900/50 open:shadow-sm transition-shadow"
            >
              <summary className="cursor-pointer list-none px-4 py-3 pr-10 text-sm font-semibold text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden flex items-center justify-between gap-2">
                {item.q}
                <span className="text-teal-600 dark:text-teal-400 text-lg leading-none group-open:rotate-45 transition-transform" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="px-4 pb-3 pt-0 text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-transparent group-open:border-slate-100 dark:group-open:border-white/5">
                <p className="pt-3">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
