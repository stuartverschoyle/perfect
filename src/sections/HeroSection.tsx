import { Link } from 'react-router-dom';
import { Search, BookOpen, Zap, Target, ExternalLink } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import { EXAMPLE_PATH } from '../guideSections';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/50 p-6 md:p-10 mb-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-500/10 border border-teal-300 dark:border-teal-500/20">
            <Search size={12} className="text-teal-600 dark:text-teal-400" />
            <span className="text-xs font-medium text-teal-600 dark:text-teal-400">Interactive SEO Reference</span>
          </div>
          <InfoTooltip title="About This Guide">
            <p className="mb-2">This interactive page demonstrates every element of a perfectly SEO-optimized web page.</p>
            <p className="mb-2">Each section represents a critical component, and every <strong className="text-slate-900 dark:text-white">info icon</strong> contains detailed guidance for copywriters and designers.</p>
            <p>Use the navigation on the left to jump between sections, or scroll through the entire page for a comprehensive understanding.</p>
          </InfoTooltip>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
          Anatomy of the Perfect<br />
          <span className="bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">SEO Web Page</span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
          An interactive guide for copywriters, designers and developers. Click the info icons to discover how every element -- from meta tags to schema markup -- impacts search rankings, user experience, and conversions.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mb-6">
          {[
            { icon: BookOpen, label: '20 Sections', desc: 'The complete SEO bible', color: 'text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-400/10' },
            { icon: Zap, label: 'Actionable Tips', desc: 'Click the (i) icons to learn', color: 'text-sky-500 dark:text-sky-400 bg-sky-100 dark:bg-sky-400/10' },
            { icon: Target, label: 'Copy & Design', desc: 'Made for non-developers', color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-400/10' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-white dark:bg-slate-900/50 rounded-xl p-3 border border-slate-200 dark:border-slate-700/30">
              <div className={`p-2 rounded-lg ${item.color}`}>
                <item.icon size={18} />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-white">{item.label}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <Link
          to={EXAMPLE_PATH}
          className="relative inline-flex w-full max-w-xl flex-col gap-3 rounded-2xl border-2 border-teal-700/40 bg-teal-600 px-5 py-4 text-left shadow-lg shadow-teal-900/20 transition hover:bg-teal-500 hover:shadow-xl hover:shadow-teal-900/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:border-teal-300/35 dark:bg-teal-500 dark:shadow-teal-950/50 dark:hover:bg-teal-400 dark:focus-visible:ring-teal-300 dark:focus-visible:ring-offset-slate-900 sm:flex-row sm:items-center sm:gap-4"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white ring-1 ring-white/30 dark:bg-slate-950/25 dark:ring-white/20">
            <ExternalLink size={22} className="text-white" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-base font-semibold leading-snug text-white sm:text-lg">
              View the Perfect SEO Page in Action
            </span>
            <span className="mt-1 block text-sm font-medium leading-snug text-teal-50 dark:text-slate-900">
              Live demo — fully annotated example with role-based tips on every block
            </span>
          </span>
          <span className="hidden text-xs font-bold uppercase tracking-wider text-white/90 sm:inline sm:shrink-0 sm:self-center sm:rounded-lg sm:bg-white/15 sm:px-2.5 sm:py-1 sm:ring-1 sm:ring-white/25">
            Open demo
          </span>
        </Link>
      </div>
    </div>
  );
}
