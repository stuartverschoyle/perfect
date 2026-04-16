import { BookOpen, ExternalLink, BarChart3 } from 'lucide-react';
import SeoSection from '../components/SeoSection';

const resources = [
  {
    name: 'Google Search Console',
    description: 'Monitor impressions, clicks, and average position for every URL. See which queries drive traffic and where you can improve.',
    url: 'https://search.google.com/search-console',
    type: 'Essential',
  },
  {
    name: 'PageSpeed Insights',
    description: 'Measure Core Web Vitals (LCP, INP, CLS) on mobile and desktop, with specific recommendations to improve performance.',
    url: 'https://pagespeed.web.dev/',
    type: 'Performance',
  },
  {
    name: 'Rich Results Test',
    description: 'Validate your schema / JSON-LD and see which rich result types your page is eligible for in Google Search.',
    url: 'https://search.google.com/test/rich-results',
    type: 'Schema',
  },
  {
    name: 'Lighthouse in Chrome DevTools',
    description: 'Run accessibility, SEO, and performance audits directly in your browser on any page state (including logged-in views).',
    url: 'https://developer.chrome.com/docs/lighthouse/overview',
    type: 'Audit',
  },
];

export default function ResourcesSection() {
  return (
    <SeoSection id="resources" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
          <BookOpen size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">SEO Tools & Resources</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-1">
            A short list of trusted tools you can use to audit and monitor your pages after following this guide.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((tool) => (
          <article
            key={tool.name}
            className="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-700/40 bg-white dark:bg-slate-900/40 p-4 gap-3"
          >
            <header className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{tool.name}</h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{tool.description}</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-medium text-slate-700 dark:text-slate-200 uppercase tracking-wide">
                <BarChart3 size={10} />
                {tool.type}
              </span>
            </header>

            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 dark:text-sky-300 hover:text-sky-900 dark:hover:text-sky-200 mt-1"
            >
              Open tool
              <ExternalLink size={12} />
            </a>
          </article>
        ))}
      </div>
    </SeoSection>
  );
}

