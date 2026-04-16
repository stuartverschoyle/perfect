import { ArrowRight, Gauge, FileSearch, Code } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';

const pillars = [
  {
    title: 'Technical SEO',
    subtitle: 'Foundation',
    description:
      'The structural and technical elements that help search engines crawl, index, and understand your website. Without a solid technical foundation, even great content won\'t rank.',
    features: ['Page speed and Core Web Vitals', 'Mobile responsiveness', 'Crawlability and indexing', 'Structured data markup'],
    impact: 'High Impact',
    icon: Code,
  },
  {
    title: 'On-Page SEO',
    subtitle: 'Content & Structure',
    description:
      'Optimising individual pages so that search engines understand your content and users find what they need. This includes titles, headings, meta descriptions, and copy quality.',
    features: ['Title tags and meta descriptions', 'Heading hierarchy (H1-H6)', 'Internal linking strategy', 'Image alt text and compression'],
    impact: 'High Impact',
    icon: FileSearch,
  },
  {
    title: 'Performance',
    subtitle: 'Speed & UX',
    description:
      'Google uses Core Web Vitals as a ranking factor. A fast, smooth website keeps visitors engaged and reduces bounce rates -- both direct signals that influence rankings.',
    features: ['Largest Contentful Paint (LCP)', 'Interaction to Next Paint (INP)', 'Cumulative Layout Shift (CLS)', 'Time to First Byte (TTFB)'],
    impact: 'Growing Impact',
    icon: Gauge,
  },
];

export default function ExampleMemberships() {
  const scrollToDemoSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="why-optimise" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-16">
          <span className="relative inline-block">
            <SeoAnnotation
              label="Section kicker"
              position="top-right"
              tone="orange"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Eyebrow copy</p>
                    <p>Small caps kickers (“The fundamentals”) prime the reader before the H2. Use them to segment long guides without adding another heading level.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Tracking &amp; tone</p>
                    <p>Wide tracking and low contrast on kickers separate them from H2s. Keep size clearly subordinate so the outline stays H2-first.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Markup choice</p>
                    <p>
                      Eyebrows are usually <code className="text-teal-600 dark:text-teal-400">&lt;span&gt;</code> or <code className="text-teal-600 dark:text-teal-400">&lt;p&gt;</code>, not headings — don’t inflate the heading outline for styling.
                    </p>
                  </>
                ),
              }}
            />
            <span className="block text-xs text-slate-900/60 dark:text-white/60 tracking-[0.3em] uppercase mb-3 mt-3">The fundamentals</span>
          </span>

          <SeoAnnotation
            label="H2 section"
            position="inline"
            tone="amber"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Sub-topic clarity</p>
                  <p>H2s declare the next chapter. “Why Website Optimisation Matters” broadens vocabulary around the H1 without cloning it word-for-word.</p>
                  <p className="mt-1.5">Follow with a short explainer sentence before dense components (cards, tables).</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Hierarchy &amp; spacing</p>
                  <p>Step down weight from H1: same family, smaller scale, slightly tighter tracking. Leave enough air before cards so the section breathes.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Landmark order</p>
                  <p>
                    The H2 should be the first heading inside this <code className="text-teal-600 dark:text-teal-400">&lt;section&gt;</code> after any non-heading intro — don’t skip from H1 on the page to H3 here.
                  </p>
                </>
              ),
            }}
          />

          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">
            Why Website Optimisation <span className="font-semibold">Matters</span>
          </h2>
          <p className="mt-4 text-slate-900/80 dark:text-white/70 max-w-xl text-lg font-normal leading-relaxed">
            Website optimisation improves how search engines understand your content and how users experience your site. It rests on three pillars.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6">
          <SeoAnnotation
            label="Pillar cards"
            position="top-right"
            tone="teal"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Parallel arguments</p>
                  <p>Each card states one pillar, then proves it with a tight feature list. Parallel grammar (“Page speed…”, “Mobile…”) reads faster and snippets better.</p>
                  <p className="mt-1.5">Impact labels (“High Impact”) give editors a prioritisation story without a full methodology essay.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Card system</p>
                  <p>Shared padding, icon tile, and divider before the footer link make the grid feel like one component, not three random panels.</p>
                  <p className="mt-1.5">Hover border shifts should be subtle — you’re not advertising interactivity on static content cards.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Heading levels</p>
                  <p>
                    Card titles are <code className="text-teal-600 dark:text-teal-400">&lt;h3&gt;</code> under this section’s <code className="text-teal-600 dark:text-teal-400">&lt;h2&gt;</code>. Lists use real <code className="text-teal-600 dark:text-teal-400">&lt;ul&gt;</code>/<code className="text-teal-600 dark:text-teal-400">&lt;li&gt;</code>.
                  </p>
                  <p className="mt-1.5">If cards become components, pass heading level as a prop to avoid accidental H3 → H3 jumps across templates.</p>
                </>
              ),
            }}
          />

          {pillars.map((p, index) => (
            <article
              key={p.title}
              className="group relative bg-white dark:bg-white/[0.02] border border-slate-200/[0.6] dark:border-white/[0.06] rounded-xl p-8 hover:bg-slate-50 dark:hover:bg-white/[0.04] hover:border-teal-500/30 transition-all duration-500"
            >
              {index === 1 ? (
                <SeoAnnotation
                  label="Card CTA"
                  position="top-right"
                  tone="rose"
                  byRole={{
                    copywriter: (
                      <>
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">In-card journeys</p>
                        <p>“View step-by-step plan” ties the abstract pillar to the process section — always give readers a next step that matches intent.</p>
                      </>
                    ),
                    designer: (
                      <>
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Footer emphasis</p>
                        <p>Impact label + link share one baseline; arrow motion hints clickability without looking like a second primary button.</p>
                      </>
                    ),
                    dev: (
                      <>
                        <p className="font-semibold text-slate-900 dark:text-white mb-1">Hash navigation</p>
                        <p>
                          <code className="text-teal-600 dark:text-teal-400">preventDefault</code> + <code className="text-teal-600 dark:text-teal-400">scrollIntoView</code> keeps SPA-like smooth scroll while preserving a real <code className="text-teal-600 dark:text-teal-400">href=&quot;#steps&quot;</code> fallback.
                        </p>
                      </>
                    ),
                  }}
                />
              ) : null}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                  <p.icon size={18} className="text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-900/70 dark:text-white/70 tracking-[0.2em] uppercase block">{p.subtitle}</span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white leading-snug">{p.title}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed mb-6">{p.description}</p>

              <ul className="space-y-2.5 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-800 dark:text-slate-100">
                    <div className="w-1 h-1 rounded-full bg-teal-400/50" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/5">
                <span className="text-xs text-teal-700 dark:text-teal-400 tracking-wider uppercase">{p.impact}</span>
                <a
                  href="#steps"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToDemoSection('steps');
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:text-teal-700 dark:hover:text-teal-300 transition-colors group-hover:gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0a]"
                  aria-label={`View the step-by-step optimisation plan for ${p.title}`}
                >
                  View step-by-step plan <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
