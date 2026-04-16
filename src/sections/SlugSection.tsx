import { Link, Check, X } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import SeoSection from '../components/SeoSection';

export default function SlugSection() {
  const goodExamples = [
    { slug: '/seo-guide/perfect-web-page', why: 'Descriptive, hierarchical, keyword-rich' },
    { slug: '/blog/image-optimization-tips', why: 'Clear topic, natural reading' },
    { slug: '/services/web-design', why: 'Short, categorized, relevant' },
  ];

  const badExamples = [
    { slug: '/page?id=12847&cat=3', why: 'No keywords, unreadable, no hierarchy' },
    { slug: '/blog/the-ultimate-guide-to-building-the-perfect-seo-optimized-web-page-in-2025', why: 'Too long, keyword stuffing' },
    { slug: '/Blog/SEO_Guide/Page1', why: 'Mixed case, underscores, generic name' },
  ];

  return (
    <SeoSection id="slug" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
          <Link size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">URL Structure & Slug</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Your URL is the first thing both users and search engines read. Make every character count.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">URL Anatomy</h3>
          <InfoTooltip title="URL Structure for SEO">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Length:</strong> Keep URLs under 75 characters. Shorter URLs tend to rank better and are easier to share.</li>
              <li><strong className="text-slate-900 dark:text-white">Keywords:</strong> Include your primary keyword in the slug. URLs are a confirmed (minor) ranking factor.</li>
              <li><strong className="text-slate-900 dark:text-white">Hyphens:</strong> Always use hyphens (-) to separate words, never underscores (_). Google treats hyphens as word separators but underscores as word joiners.</li>
              <li><strong className="text-slate-900 dark:text-white">Lowercase:</strong> Always use lowercase letters. URLs are case-sensitive, and mixed case creates duplicate content risk.</li>
              <li><strong className="text-slate-900 dark:text-white">Hierarchy:</strong> Use folder structure to reflect site hierarchy: /category/subcategory/page-name</li>
              <li><strong className="text-slate-900 dark:text-white">Stop words:</strong> Remove unnecessary words like "a", "the", "and", "of" from slugs.</li>
              <li><strong className="text-slate-900 dark:text-white">No parameters:</strong> Avoid query strings (?id=123) in public-facing URLs. Use clean, readable paths.</li>
              <li><strong className="text-slate-900 dark:text-white">Permanence:</strong> Once published, avoid changing URLs. If you must, always implement 301 redirects.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30 font-mono text-sm overflow-x-auto">
          <div className="flex flex-wrap items-center gap-0">
            <span className="text-slate-500">https://</span>
            <span className="text-teal-600 dark:text-teal-400">example.com</span>
            <span className="text-slate-500">/</span>
            <span className="text-amber-600 dark:text-amber-400">seo-guide</span>
            <span className="text-slate-500">/</span>
            <span className="text-emerald-600 dark:text-emerald-400">perfect-web-page</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-teal-400" /> Domain</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> Category</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" /> Slug (page identifier)</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-emerald-50 dark:bg-emerald-500/5 rounded-xl border border-emerald-300 dark:border-emerald-500/20 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Check size={18} className="text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-semibold text-emerald-600 dark:text-emerald-400">Good URL Structures</h3>
          </div>
          <div className="space-y-3">
            {goodExamples.map((ex) => (
              <div key={ex.slug} className="bg-white dark:bg-slate-900/50 rounded-lg p-3">
                <code className="text-sm text-emerald-600 dark:text-emerald-300 font-mono">{ex.slug}</code>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{ex.why}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-red-50 dark:bg-red-500/5 rounded-xl border border-red-300 dark:border-red-500/20 p-5">
          <div className="flex items-center gap-2 mb-3">
            <X size={18} className="text-red-600 dark:text-red-400" />
            <h3 className="font-semibold text-red-600 dark:text-red-400">Poor URL Structures</h3>
          </div>
          <div className="space-y-3">
            {badExamples.map((ex) => (
              <div key={ex.slug} className="bg-white dark:bg-slate-900/50 rounded-lg p-3">
                <code className="text-sm text-red-300 font-mono">{ex.slug}</code>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{ex.why}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SeoSection>
  );
}
