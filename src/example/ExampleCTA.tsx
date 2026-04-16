import { ArrowRight, Globe, Zap, BookOpen } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';

export default function ExampleCTA() {
  return (
    <section id="resources" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid lg:grid-cols-2 gap-16">
          <SeoAnnotation
            label="Resources column"
            position="top-left"
            tone="orange"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Split intent</p>
                  <p>List credible tools before the form — it helps researchers and reduces scepticism before you ask for an email.</p>
                  <p className="mt-1.5">Headline + deck (“Free Tools”) should mirror what the bullets deliver.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Two-up rhythm</p>
                  <p>Left column breathes with icon rows; right column is denser (form). Balance negative space so the grid doesn’t feel lopsided.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Layout</p>
                  <p>
                    Use CSS grid for the two columns; stack to one column under <code className="text-teal-600 dark:text-teal-400">lg</code> with the form still reachable without excessive scroll.
                  </p>
                </>
              ),
            }}
          />

          <div>
            <span className="text-xs text-slate-900/70 dark:text-white/70 tracking-[0.3em] uppercase mb-3 block">Free Tools</span>
            <h2 className="text-3xl sm:text-4xl font-light text-slate-900 dark:text-white tracking-tight mb-6">
              Resources to <span className="font-semibold">Get Started</span>
            </h2>
            <p className="text-slate-900/85 dark:text-white/75 text-base font-normal leading-relaxed mb-10">
              You don't need expensive tools to start optimising. These free resources will help you audit your site, identify issues, and track improvements over time.
            </p>

            <div className="relative space-y-6">
              <SeoAnnotation
                label="Tool list"
                position="top-right"
                tone="teal"
                byRole={{
                  copywriter: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Named proof</p>
                      <p>Citing Search Console, PageSpeed, and Rich Results Test shows you’re aligned with how practitioners work — not generic “SEO tools” fluff.</p>
                    </>
                  ),
                  designer: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Row scan</p>
                      <p>Icon + title + one-line benefit is the right density; avoid multi-paragraph tool pitches in this pattern.</p>
                    </>
                  ),
                  dev: (
                    <>
                      <p className="font-semibold text-slate-900 dark:text-white mb-1">Outbound links</p>
                      <p>
                        If these become live links, add <code className="text-teal-600 dark:text-teal-400">rel=&quot;noopener noreferrer&quot;</code> on third-party targets and prefer HTTPS.
                      </p>
                      <p className="mt-1.5">Consider <code className="text-teal-600 dark:text-teal-400">target=&quot;_blank&quot;</code> only when you truly need it — it’s a context switch for some users.</p>
                    </>
                  ),
                }}
              />
              {[
                { icon: Globe, label: 'Google Search Console', detail: 'See how Google views your site. Free, essential, non-negotiable.' },
                { icon: Zap, label: 'PageSpeed Insights', detail: 'Test any URL for Core Web Vitals. Lab and field data combined.' },
                { icon: BookOpen, label: 'Google Rich Results Test', detail: 'Validate your schema markup and see which rich features you qualify for.' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/5 border border-teal-500/10 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-teal-600/60 dark:text-teal-400/60" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900 dark:text-white">{item.label}</div>
                    <div className="text-xs text-slate-900/80 dark:text-white/70">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <SeoAnnotation
              label="Lead form"
              position="top-right"
              tone="violet"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Offer &amp; friction</p>
                    <p>“44 checks” quantifies the lead magnet. Ask only fields you’ll use — each extra input drops completion.</p>
                    <p className="mt-1.5">Privacy reassurance belongs directly under the submit control.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Field affordance</p>
                    <p>Underline inputs read lighter than boxed fields — fine for short forms; ensure focus states are obvious in both themes.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Forms that work</p>
                    <p>
                      Wire <code className="text-teal-600 dark:text-teal-400">label htmlFor</code> ↔ <code className="text-teal-600 dark:text-teal-400">input id</code>. Use correct <code className="text-teal-600 dark:text-teal-400">type</code> and <code className="text-teal-600 dark:text-teal-400">autocomplete</code> attributes.
                    </p>
                    <p className="mt-1.5">
                      Handle submit with progressive enhancement — a working <code className="text-teal-600 dark:text-teal-400">action</code> or API route beats JS-only demos.
                    </p>
                  </>
                ),
              }}
            />

            <form className="bg-slate-50/[0.5] dark:bg-white/[0.02] border border-slate-200/[0.6] dark:border-white/[0.06] rounded-xl p-6 sm:p-8 space-y-5">
              <div className="text-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-3">
                  <BookOpen size={20} className="text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Free Website Audit Checklist</h3>
                <p className="text-xs text-slate-900/80 dark:text-white/75 mt-1">44 checks across technical SEO, content, and performance</p>
              </div>

              <div>
                <label htmlFor="name" className="block text-xs text-slate-900/80 dark:text-white/75 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 pb-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:border-teal-400/40 focus:outline-none transition-colors"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-slate-900/80 dark:text-white/75 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 pb-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:border-teal-400/40 focus:outline-none transition-colors"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-xs text-slate-900/80 dark:text-white/75 uppercase tracking-wider mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  autoComplete="url"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 pb-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/20 focus:border-teal-400/40 focus:outline-none transition-colors"
                  placeholder="https://yoursite.com"
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 px-6 py-4 bg-teal-500 text-white text-xs font-semibold uppercase tracking-widest hover:bg-teal-400 transition-colors mt-4 rounded-lg"
              >
                Get Your Free Checklist
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="text-xs text-slate-700 dark:text-slate-300 text-center leading-relaxed">No spam. Unsubscribe any time. We respect your inbox.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
