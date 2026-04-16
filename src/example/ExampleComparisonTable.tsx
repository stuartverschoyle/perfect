import SeoAnnotation from './SeoAnnotation';

const rows = [
  {
    phase: 'Audit',
    focus: 'Crawl health, index coverage, baseline metrics',
    time: '2–4 hours',
    tools: 'Screaming Frog, GSC, PageSpeed',
  },
  {
    phase: 'Fix',
    focus: 'Broken links, redirects, critical technical errors',
    time: '1–2 days',
    tools: 'GSC, CMS, PR previews',
  },
  {
    phase: 'Measure',
    focus: 'Rankings, CTR, CWV, conversions vs baseline',
    time: 'Weekly',
    tools: 'GA4, GSC, monitoring',
  },
];

export default function ExampleComparisonTable() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-[#070707] scroll-mt-20 border-y border-slate-200/80 dark:border-white/5" aria-labelledby="compare-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8">
          <SeoAnnotation
            label="Comparison table"
            position="top-right"
            tone="violet"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Snippet-friendly structure</p>
                  <p>Tables answer “versus” and “what’s the difference” queries. Use real headers so Google can map columns.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Readable grid</p>
                  <p>Zebra or clear borders help on wide tables; on mobile, allow horizontal scroll instead of squashing text.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Semantic table</p>
                  <p>
                    Use <code className="text-teal-600 dark:text-teal-400">&lt;th scope=&quot;col&quot;&gt;</code> for column labels. Avoid layout tables for data.
                  </p>
                </>
              ),
            }}
          />
          <h2 id="compare-heading" className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Audit vs fix vs measure
          </h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300 max-w-2xl text-sm sm:text-base">
            A compact comparison of three phases from the step-by-step loop. Full tables often earn table-style SERP features when the page is relevant.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Comparison of audit, fix, and measure phases</caption>
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04]">
                <th scope="col" className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                  Phase
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                  Focus
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                  Typical time
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-slate-900 dark:text-white">
                  Example tools
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.phase}
                  className={`border-b border-slate-100 dark:border-white/[0.06] ${i % 2 === 1 ? 'bg-slate-50/80 dark:bg-white/[0.02]' : ''}`}
                >
                  <th scope="row" className="px-4 py-3 font-semibold text-teal-800 dark:text-teal-300 whitespace-nowrap">
                    {r.phase}
                  </th>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{r.focus}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300 whitespace-nowrap">{r.time}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{r.tools}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
