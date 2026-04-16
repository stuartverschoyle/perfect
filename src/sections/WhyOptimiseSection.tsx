import { BarChart3, Gauge, Target } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import SeoSection from '../components/SeoSection';

const reasons = [
  {
    icon: Target,
    title: 'Match search intent',
    body: 'SEO isn’t tricks — it’s making the page clearly answer the query. When your structure and copy align with intent, rankings and conversions follow.',
  },
  {
    icon: Gauge,
    title: 'Improve performance & UX',
    body: 'Core Web Vitals and usability affect engagement. Faster pages reduce bounce, increase time on page, and create better outcomes for users and search engines.',
  },
  {
    icon: BarChart3,
    title: 'Measure, iterate, grow',
    body: 'Great SEO is measurable. Track queries, pages, and conversions; ship improvements; then validate results with Search Console and analytics.',
  },
];

export default function WhyOptimiseSection() {
  return (
    <SeoSection id="why-optimise" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 shrink-0">
          <Target size={24} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Why Optimise?</h2>
            <InfoTooltip title="Why this matters" variant="info">
              <p className="mb-2">
                This section is the “why” behind everything in the guide: help users complete a task and help search engines understand the page.
              </p>
              <p>
                When structure, content, performance, and accessibility work together, you earn both better rankings and better user outcomes.
              </p>
            </InfoTooltip>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
            A perfect SEO page is built for humans first: clear intent, readable content, fast delivery, and inclusive accessibility. Search engines reward that.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {reasons.map((r) => (
          <article
            key={r.title}
            className="rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-slate-900/40 p-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-teal-100 dark:bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-700 dark:text-teal-300">
                <r.icon size={16} />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{r.title}</h3>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">{r.body}</p>
          </article>
        ))}
      </div>
    </SeoSection>
  );
}

