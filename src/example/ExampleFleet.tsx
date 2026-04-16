import { ArrowRight, Clock, TrendingUp, Zap } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';

const steps = [
  {
    name: 'Audit',
    category: 'Step 1',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Website performance audit dashboard showing analytics data and site health metrics',
    time: '2-4 hours',
    difficulty: 'Beginner',
    tools: 'Screaming Frog, PageSpeed Insights',
  },
  {
    name: 'Fix',
    category: 'Step 2',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Developer fixing website technical issues and broken links on computer screen',
    time: '1-2 days',
    difficulty: 'Intermediate',
    tools: 'Search Console, Ahrefs',
  },
  {
    name: 'Optimise',
    category: 'Step 3',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Content strategist reviewing on-page SEO elements including title tags and meta descriptions',
    time: 'Ongoing',
    difficulty: 'Intermediate',
    tools: 'Surfer SEO, Hemingway Editor',
  },
  {
    name: 'Measure',
    category: 'Step 4',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Analytics dashboard showing traffic, conversions, and search performance metrics',
    time: 'Weekly',
    difficulty: 'Intermediate',
    tools: 'Google Analytics 4, Search Console',
  },
  {
    name: 'Update',
    category: 'Step 5',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Team planning content updates and site maintenance on a calendar',
    time: 'Monthly+',
    difficulty: 'Intermediate',
    tools: 'CMS, content calendar',
  },
  {
    name: 'Repeat',
    category: 'Step 6',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    alt: 'Team collaboration representing continuous improvement and iterative SEO cycles',
    time: 'Continuous',
    difficulty: 'All levels',
    tools: 'Checklist, retrospectives',
  },
];

export default function ExampleFleet() {
  return (
    <section id="steps" className="relative py-24 sm:py-32 bg-slate-50 dark:bg-[#070707] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="relative">
            <SeoAnnotation
              label="Process loop"
              position="top-left"
              tone="amber"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Narrative arc</p>
                    <p>Numbered phases give the page a story: diagnose → repair → improve → prove → maintain. That mirrors how stakeholders talk about SEO programmes.</p>
                    <p className="mt-1.5">Use verbs in body copy (“audit”, “measure”) that match the step names for cohesion.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Scannable structure</p>
                    <p>Repeating cards after a clear H2 + intro trains the eye: users learn the pattern by card two and skim the rest confidently.</p>
                    <p className="mt-1.5">Keep kicker, title, and CTA rhythm aligned across breakpoints.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Deep-link targets</p>
                    <p>
                      Each phase should map to an <code className="text-teal-600 dark:text-teal-400">id</code> or child URL you can link from dashboards or docs — here the section is <code className="text-teal-600 dark:text-teal-400">#steps</code>.
                    </p>
                    <p className="mt-1.5">If steps become CMS-driven, preserve stable IDs when titles change.</p>
                  </>
                ),
              }}
            />
            <span className="text-xs text-slate-900/70 dark:text-white/70 tracking-[0.3em] uppercase mb-3 block">The Process</span>
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 dark:text-white tracking-tight">
              Step-by-Step <span className="font-semibold">Optimisation</span>
            </h2>
            <p className="mt-4 text-slate-900/80 dark:text-white/75 max-w-2xl text-base font-normal leading-relaxed">
              Website optimisation follows a proven loop: <strong className="font-semibold text-slate-900 dark:text-white">audit</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">fix</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">optimise</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">measure</strong>,{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">update</strong>, then{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">repeat</strong>. Each card below maps to one phase.
            </p>
          </div>
          <div className="relative shrink-0 self-end md:self-auto">
            <SeoAnnotation
              label="Section CTA"
              position="top-right"
              tone="emerald"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Bridge to depth</p>
                    <p>Inline text links to the checklist reward readers who finish the section — they get a natural “what next” without a loud button.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Weight &amp; alignment</p>
                    <p>Keep secondary section links visually lighter than card CTAs so hierarchy stays: card actions → section escape hatch.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Real hrefs</p>
                    <p>
                      Point to <code className="text-teal-600 dark:text-teal-400">/guide/checklist</code> (guide) rather than JS-only handlers so the link works without the bundle.
                    </p>
                  </>
                ),
              }}
            />
            <a
              href="/guide/checklist"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 dark:text-teal-300 hover:text-teal-950 dark:hover:text-teal-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#070707]"
            >
              View the full optimisation checklist <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="relative grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <SeoAnnotation
            label="Card images"
            position="top-right"
            tone="violet"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Alt as caption</p>
                  <p>Alt should read like a short caption: who’s doing what, in what context. It supports image search and screen readers without repeating the H3 verbatim.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Crop &amp; hover</p>
                  <p>8:5 cards need intentional crops — faces and UI chrome should stay in frame at all breakpoints. Hover zoom is decorative; don’t rely on it for meaning.</p>
                  <p className="mt-1.5">Badge contrast on photos should pass APCA-style checks at small sizes.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Lazy &amp; CLS</p>
                  <p>
                    Below-fold images use <code className="text-teal-600 dark:text-teal-400">loading=&quot;lazy&quot;</code> with explicit <code className="text-teal-600 dark:text-teal-400">width</code>/<code className="text-teal-600 dark:text-teal-400">height</code> to reserve space.
                  </p>
                  <p className="mt-1.5">
                    Prefer <code className="text-teal-600 dark:text-teal-400">srcset</code> for card widths; cap DPR to avoid 3× waste on photo grids.
                  </p>
                </>
              ),
            }}
          />

          {steps.map((step, index) => (
            <article key={step.name} className="group relative">
              {index === 0 ? (
                <SeoAnnotation
                  label="Step metadata"
                  position="top-right"
                  tone="sky"
                  byRole={{
                    copywriter: (
                      <>
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Credibility detail</p>
                        <p>Time, difficulty, and tools set expectations — they reduce bounce from readers who fear the wrong effort level.</p>
                        <p className="mt-1.5">Name tools you’d actually use; generic “SEO software” lines feel like filler.</p>
                      </>
                    ),
                    designer: (
                      <>
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Tiles &amp; rhythm</p>
                        <p>
                          The <code className="text-teal-600 dark:text-teal-400">dl</code> / stat tiles create a repeating rhythm under each H3. Keep icon weight and label tracking identical card-to-card.
                        </p>
                      </>
                    ),
                    dev: (
                      <>
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Definition lists</p>
                        <p>
                          Using <code className="text-teal-600 dark:text-teal-400">&lt;dl&gt;</code>, <code className="text-teal-600 dark:text-teal-400">&lt;dt&gt;</code>, <code className="text-teal-600 dark:text-teal-400">&lt;dd&gt;</code> pairs labels to values semantically — better than div soup for “Time: 2–4 hours”.
                        </p>
                        <p className="mt-1.5">Keep one dt/dd group per fact so assistive tech announces them cleanly.</p>
                      </>
                    ),
                  }}
                />
              ) : null}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={step.image}
                  alt={step.alt}
                  width={800}
                  height={500}
                  loading="lazy"
                  className="w-full aspect-[8/5] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-teal-500/90 backdrop-blur-sm text-[10px] text-white font-semibold tracking-wider uppercase rounded-md">
                  {step.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{step.name}</h3>

              <dl className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {[
                  { icon: Clock, label: 'Time', value: step.time },
                  { icon: TrendingUp, label: 'Difficulty', value: step.difficulty },
                  { icon: Zap, label: 'Tools', value: step.tools },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-start gap-3 p-4 bg-white/80 dark:bg-white/[0.03] rounded-xl border border-slate-200/80 dark:border-white/[0.08] shadow-sm sm:flex-1 sm:min-w-[200px]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
                      <stat.icon size={18} className="text-teal-700 dark:text-teal-300" />
                    </div>
                    <div className="min-w-0">
                      <dt className="text-[11px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-[0.18em]">{stat.label}</dt>
                      <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white leading-snug break-words">
                        <span className="block text-pretty">{stat.value}</span>
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
