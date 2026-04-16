import { TrendingUp, Search, MousePointerClick, DollarSign } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';

const benefits = [
  {
    icon: Search,
    title: 'Higher Search Rankings',
    description:
      'Optimised websites consistently rank higher in Google. The top 3 results capture 55% of all organic clicks, making every position gained a significant traffic increase.',
  },
  {
    icon: MousePointerClick,
    title: 'Better User Experience',
    description:
      'Fast-loading pages with clear navigation reduce bounce rates by up to 35%. Users stay longer, engage more, and are more likely to convert into customers.',
  },
  {
    icon: TrendingUp,
    title: 'More Organic Traffic',
    description:
      'Organic search drives 53% of all website traffic. A well-optimised website attracts visitors 24/7 without the ongoing cost of paid advertising.',
  },
  {
    icon: DollarSign,
    title: 'Higher Conversion Rates',
    description:
      'Every second of load time improvement increases conversions by 7%. Clear CTAs, readable copy, and trust signals turn visitors into leads and customers.',
  },
];

export default function ExampleExperience() {
  return (
    <section id="results" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <SeoAnnotation
                label="Section intro"
                position="inline"
                tone="sky"
                byRole={{
                  copywriter: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Payoff first</p>
                      <p>The H2 promises outcomes; the next paragraph should quantify or qualify that promise before bullets.</p>
                      <p className="mt-1.5">Stats and claims need a credible source or careful hedging — avoid unverifiable precision.</p>
                    </>
                  ),
                  designer: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Column balance</p>
                      <p>Two-column layouts should break so text leads on small screens and the visual rewards scroll on large ones.</p>
                    </>
                  ),
                  dev: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Source order</p>
                      <p>
                        Keep meaningful text before heavy images in DOM order when possible — it helps parsers and low-bandwidth users even if CSS reorders visually.
                      </p>
                    </>
                  ),
                }}
              />
            </div>

            <span className="block text-xs text-slate-900/70 dark:text-white/70 tracking-[0.3em] uppercase mb-3 mt-3">The Results</span>
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 dark:text-white tracking-tight mb-6">
              What Improves When You <span className="font-semibold">Optimise</span>
            </h2>

            <p className="text-slate-900/85 dark:text-white/75 text-base leading-relaxed mb-10 font-normal">
              Website optimisation delivers measurable results across traffic, engagement, and revenue. The data consistently shows that faster, better-structured websites outperform
              their competitors in every meaningful metric.
            </p>

            <div className="relative space-y-6">
              <SeoAnnotation
                label="Benefit list"
                position="top-right"
                tone="emerald"
                byRole={{
                  copywriter: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Micro-headlines</p>
                      <p>Each benefit uses an H3-sized title with evidence in the body. That pattern is easy to skim and easy for search to chunk.</p>
                      <p className="mt-1.5">Vary openings slightly (“Higher…”, “Better…”) while keeping parallel length.</p>
                    </>
                  ),
                  designer: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Icon grid</p>
                      <p>Icons anchor each row; keep stroke weight and colour consistent so the list reads as one component.</p>
                    </>
                  ),
                  dev: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Heading level</p>
                      <p>
                        These titles are <code className="text-teal-600 dark:text-teal-400">&lt;h3&gt;</code> under the section <code className="text-teal-600 dark:text-teal-400">&lt;h2&gt;</code> — valid even without a wrapping card.
                      </p>
                    </>
                  ),
                }}
              />
              {benefits.map((b) => (
                <div key={b.title} className="group flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/5 border border-teal-500/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/10 transition-colors">
                    <b.icon size={16} className="text-teal-600/60 dark:text-teal-400/60" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{b.title}</h3>
                    <p className="text-xs text-slate-900/80 dark:text-white/75 leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <SeoAnnotation
              label="Editorial image"
              position="top-right"
              tone="violet"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Proof adjacent to claims</p>
                    <p>The photo should echo the stats (analytics, growth). If you cite numbers in the overlay, repeat them in HTML text nearby.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Aspect &amp; crop</p>
                    <p>4:5 editorial crops feel premium; ensure key UI in the photo stays legible at card width, not only full bleed.</p>
                    <p className="mt-1.5">Bottom gradient ties the image into the page background — check banding in dark mode.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Responsive delivery</p>
                    <p>
                      Serve this column image at sizes appropriate to <code className="text-teal-600 dark:text-teal-400">lg</code> half-width, not full viewport. Pair <code className="text-teal-600 dark:text-teal-400">srcset</code> with layout width.
                    </p>
                    <p className="mt-1.5">
                      <code className="text-teal-600 dark:text-teal-400">loading=&quot;lazy&quot;</code> is appropriate here — it’s below the hero and often below the fold on mobile stacks.
                    </p>
                  </>
                ),
              }}
            />

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Website analytics dashboard showing traffic growth and improved search rankings after optimisation"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full rounded-xl object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-transparent to-transparent rounded-xl" />

              <div className="absolute bottom-6 left-6 right-6">
                <SeoAnnotation
                  label="Stat overlay"
                  position="top-right"
                  tone="rose"
                  byRole={{
                    copywriter: (
                      <>
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Numbers in context</p>
                        <p>Short labels (“Organic traffic share”) explain what the % refers to. Pair bold stats with a plain-English takeaway in the column copy.</p>
                      </>
                    ),
                    designer: (
                      <>
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Glass &amp; contrast</p>
                        <p>Frosted panels need sufficient contrast for small caps labels. Test on busy screenshots, not flat mocks.</p>
                      </>
                    ),
                    dev: (
                      <>
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Accessibility</p>
                        <p>
                          Don’t rely on the overlay alone — mirror key stats in text or a <code className="text-teal-600 dark:text-teal-400">&lt;dl&gt;</code> nearby. Decorative gradients should be <code className="text-teal-600 dark:text-teal-400">aria-hidden</code>.
                        </p>
                      </>
                    ),
                  }}
                />
                <div className="flex items-center gap-3 p-4 bg-white/60 dark:bg-black/60 backdrop-blur-md rounded-xl border border-slate-200 dark:border-white/5">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-light text-slate-900 dark:text-white">53%</div>
                    <div className="text-[10px] text-slate-900/70 dark:text-white/70 tracking-wider uppercase mt-0.5">Organic Traffic Share</div>
                  </div>
                  <div className="w-px h-10 bg-slate-200 dark:bg-white/10" />
                  <div className="text-center flex-1">
                    <div className="text-2xl font-light text-slate-900 dark:text-white">7%</div>
                    <div className="text-[10px] text-slate-900/70 dark:text-white/70 tracking-wider uppercase mt-0.5">Conv. Lift Per Second</div>
                  </div>
                  <div className="w-px h-10 bg-slate-200 dark:bg-white/10" />
                  <div className="text-center flex-1">
                    <div className="text-2xl font-light text-slate-900 dark:text-white">14.6%</div>
                    <div className="text-[10px] text-slate-900/70 dark:text-white/70 tracking-wider uppercase mt-0.5">SEO Close Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
