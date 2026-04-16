import { RefreshCw, Calendar, BarChart3, FileSearch } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';

export default function ExampleSustainability() {
  const scrollToDemoSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="maintenance" className="relative py-24 sm:py-32 bg-slate-50 dark:bg-[#070707] scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6 mt-3">
            <SeoAnnotation
              label="Status pill"
              position="top-right"
              tone="amber"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Ongoing narrative</p>
                    <p>“Ongoing effort” primes readers that SEO is operational, not a launch task — sets correct expectations before the H2.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Quiet emphasis</p>
                    <p>Pills on tinted section backgrounds need border + fill balance so they pop without shouting over the H2.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Decorative layers</p>
                    <p>
                      Pair icon + text in a single focusable control only if it’s interactive; here it’s presentational — avoid fake buttons.</p>
                  </>
                ),
              }}
            />
            <RefreshCw size={12} className="text-teal-600 dark:text-teal-400" />
            <span className="text-xs text-teal-600/80 dark:text-teal-400/80 tracking-wider uppercase">Ongoing Effort</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 dark:text-white tracking-tight mb-6">
            Maintenance That Keeps <span className="font-semibold">Rankings Growing</span>
          </h2>

          <p className="text-slate-900/85 dark:text-white/75 text-lg font-normal leading-relaxed">
            Optimisation is never finished. Search engines constantly re-evaluate your site, competitors publish new content, and user expectations evolve. A regular maintenance schedule is what
            separates sites that rank from sites that used to rank.
          </p>

          <div className="mt-4 text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            <SeoAnnotation
              label="Internal links"
              position="inline"
              tone="emerald"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Anchors that teach</p>
                    <p>“Step-by-step plan” and “tools &amp; resources” describe destinations. Good anchors reduce pogo-sticking and clarify topical clusters.</p>
                    <p className="mt-1.5">Avoid “click here” and bare URLs in body copy.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Link styling</p>
                    <p>Underline + weight shift signals tappable text without looking like primary buttons. Keep visited styles intentional, not accidental.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Routing</p>
                    <p>
                      Hash targets (<code className="text-teal-600 dark:text-teal-400">#steps</code>, <code className="text-teal-600 dark:text-teal-400">#resources</code>) must exist and should update focus for keyboard users after smooth scroll.
                    </p>
                  </>
                ),
              }}
            />
            <span className="ml-2">
              For example, revisit the{' '}
              <a
                href="#steps"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToDemoSection('steps');
                }}
                className="font-semibold text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-200 underline underline-offset-4"
              >
                step-by-step plan
              </a>{' '}
              or jump to{' '}
              <a
                href="#resources"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToDemoSection('resources');
                }}
                className="font-semibold text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-200 underline underline-offset-4"
              >
                tools & resources
              </a>
              .
            </span>
          </div>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SeoAnnotation
            label="Cadence grid"
            position="top-left"
            tone="violet"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Editorial calendar</p>
                  <p>Weekly / monthly / quarterly / bi-annual beats give teams a shared language for “what happens when”. Tie each tile to an owner and tool.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Tile parity</p>
                  <p>Four-up grids should share vertical rhythm: stat, label, description. Icons anchor the eye at the same y-position in each tile.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Semantics</p>
                  <p>
                    If these are truly informational tiles, use headings for the label lines or keep a single H2 above — don’t spray <code className="text-teal-600 dark:text-teal-400">&lt;h3&gt;</code> per card without a section heading strategy.
                  </p>
                </>
              ),
            }}
          />
          {[
            { icon: Calendar, stat: 'Weekly', label: 'Performance Checks', desc: 'Monitor Core Web Vitals, crawl errors, and ranking changes in Search Console' },
            { icon: FileSearch, stat: 'Monthly', label: 'Content Audit', desc: 'Identify decaying content, update statistics, refresh outdated screenshots' },
            { icon: BarChart3, stat: 'Quarterly', label: 'Strategy Review', desc: 'Analyse competitor movements, revise keyword targets, update content calendar' },
            { icon: RefreshCw, stat: '6 Months', label: 'Major Refresh', desc: 'Rewrite underperforming pages, rebuild internal linking, update schema markup' },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center p-6 bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.04] rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.04] hover:border-teal-500/10 transition-colors"
            >
              <item.icon size={20} className="mx-auto text-teal-600/60 dark:text-teal-400/60 mb-4" />
              <div className="text-2xl font-light text-slate-900 dark:text-white mb-1">{item.stat}</div>
              <div className="text-xs font-semibold text-slate-900/60 dark:text-white/60 uppercase tracking-wider mb-2">{item.label}</div>
              <p className="text-[11px] text-slate-900/80 dark:text-white/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-12 text-center">
          <SeoAnnotation
            label="Deep link"
            position="top-right"
            tone="sky"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Offer specificity</p>
                  <p>“Maintenance calendar template” is a concrete asset promise — stronger than “learn more” for motivated readers.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Tertiary link</p>
                  <p>Centre alignment works when it’s a single escape hatch; keep weight lighter than section CTAs in the hero.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Guide handoff</p>
                  <p>
                    Linking to <code className="text-teal-600 dark:text-teal-400">/guide/resources</code> hands users from demo to long-form without a dead end.
                  </p>
                </>
              ),
            }}
          />
          <a
            href="/guide/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 dark:text-teal-300 hover:text-teal-950 dark:hover:text-teal-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#070707]"
          >
            Get the maintenance calendar template
          </a>
        </div>
      </div>
    </section>
  );
}
