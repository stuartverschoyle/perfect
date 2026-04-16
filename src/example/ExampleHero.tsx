import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';
import ExampleBreadcrumbs from './ExampleBreadcrumbs';
import { guideSectionPath } from '../guideSections';

export default function ExampleHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <img
          src="/computer-with-code.webp"
          alt="Computer screen displaying website code and performance metrics for website optimisation"
          width={1920}
          height={1275}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <SeoAnnotation
          label="Hero image"
          position="top-left"
          tone="teal"
          byRole={{
            copywriter: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Story &amp; search intent</p>
                <p>
                  The hero photo should instantly signal what the page is about. Here it ties “code + metrics” to optimisation without needing extra headline words.
                </p>
                <p className="mt-1.5">
                  Alt text should describe the <em>subject and context</em> (what’s in frame + why it matters for the topic), not a keyword list.
                </p>
                <p className="mt-1.5 text-teal-600 dark:text-teal-400 font-medium">Pair a strong visual with a headline that matches the query — the combo lifts relevance and time on page.</p>
              </>
            ),
            designer: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Impact &amp; composition</p>
                <p>
                  A full-bleed hero sets emotional tone and hierarchy: the eye should travel image → headline → CTA. Choose photography with clear focal weight so text doesn’t fight busy detail.
                </p>
                <p className="mt-1.5">Treat the hero as part of the brand system: colour grade, contrast, and crop should feel consistent with the rest of the site.</p>
                <p className="mt-1.5 text-teal-600 dark:text-teal-400 font-medium">If text sits on the image, reserve darker or blurred bands so type stays legible without huge drop shadows.</p>
              </>
            ),
            dev: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Size, loading &amp; LCP</p>
                <p>
                  This asset is <code className="text-teal-600 dark:text-teal-400">1920×1275</code> with explicit <code className="text-teal-600 dark:text-teal-400">width</code> / <code className="text-teal-600 dark:text-teal-400">height</code> and{' '}
                  <code className="text-teal-600 dark:text-teal-400">loading=&quot;eager&quot;</code> because it is likely the LCP element.
                </p>
                <p className="mt-1.5">
                  The hero uses a same-origin WebP (<code className="text-teal-600 dark:text-teal-400">/computer-with-code.webp</code>) with{' '}
                  <code className="text-teal-600 dark:text-teal-400">decoding=&quot;async&quot;</code> and <code className="text-teal-600 dark:text-teal-400">fetchPriority=&quot;high&quot;</code>. Add <code className="text-teal-600 dark:text-teal-400">srcset</code>/<code className="text-teal-600 dark:text-teal-400">sizes</code> or <code className="text-teal-600 dark:text-teal-400">&lt;picture&gt;</code> when you ship multiple widths.
                </p>
                <p className="mt-1.5 text-teal-600 dark:text-teal-400 font-medium">Lazy-load everything below the fold; preload only the true LCP candidate.</p>
              </>
            ),
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-transparent to-transparent" />
        <SeoAnnotation
          label="Hero overlays"
          position="bottom-left"
          tone="sky"
          byRole={{
            copywriter: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Readable promise</p>
                <p>Gradients aren’t decoration here — they keep the promise in the H1 and CTAs readable on a busy photo. If users can’t read the value prop in three seconds, bounce risk jumps.</p>
                <p className="mt-1.5 text-teal-600 dark:text-teal-400 font-medium">Check the hero on real devices outdoors; “looks fine in Figma” often fails in sunlight.</p>
              </>
            ),
            designer: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Layering &amp; depth</p>
                <p>
                  A left-to-right vignette plus a bottom fade creates a predictable text zone. Keep stops consistent with your token system (opacity ramps, not one-off hexes everywhere).
                </p>
                <p className="mt-1.5">In dark mode, re-tune fades so the bottom blend into the page background doesn’t band or clip.</p>
                <p className="mt-1.5 text-teal-600 dark:text-teal-400 font-medium">Prototype hover/scroll states so motion doesn’t wash out headline contrast.</p>
              </>
            ),
            dev: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Implementation</p>
                <p>
                  Prefer CSS gradients (or pseudo-elements) over extra raster overlays when possible — fewer assets, easier theming. Stack: image, then gradient divs, then content with higher z-index.
                </p>
                <p className="mt-1.5">
                  Verify contrast with automated checks and manual zoom. Avoid <code className="text-teal-600 dark:text-teal-400">mix-blend-mode</code> tricks that break in forced-colors or high-contrast modes unless you test them.
                </p>
                <p className="mt-1.5 text-teal-600 dark:text-teal-400 font-medium">Keep decorative layers <code className="font-normal">aria-hidden</code> so they don’t clutter the accessibility tree.</p>
              </>
            ),
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <ExampleBreadcrumbs variant="hero" />
          <div className="flex items-center gap-3 mb-4">
            <SeoAnnotation
              label="H1"
              position="inline"
              tone="violet"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Topic &amp; one clear H1</p>
                    <p>
                      One H1 states the main topic. It should align with the title tag and search intent, but doesn’t have to be identical — avoid keyword-stuffed duplicates.
                    </p>
                    <p className="mt-1.5">Front-load the outcome readers want (“optimise a website”) before stylistic breaks or line wraps.</p>
                    <p className="mt-1.5 text-teal-600 dark:text-teal-400 font-medium">Don’t hide a second H1 for “SEO” — screen readers and parsers see through that.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Typographic hierarchy</p>
                    <p>Use weight and size contrast so the H1 clearly dominates body copy. Line breaks (“How to Optimise / a Website”) should follow natural speech, not awkward rags.</p>
                    <p className="mt-1.5">Pair a light + semibold style to add rhythm without extra DOM headings.</p>
                    <p className="mt-1.5 text-teal-600 dark:text-teal-400 font-medium">Test fluid type scales so the H1 never collides with nav or badges on small widths.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Markup</p>
                    <p>
                      There must be exactly one <code className="text-teal-600 dark:text-teal-400">&lt;h1&gt;</code> in the main landmark per view. Splitting lines with <code className="text-teal-600 dark:text-teal-400">&lt;br /&gt;</code> is fine; duplicating H1 for styling is not.
                    </p>
                    <p className="mt-1.5">Ensure heading order isn’t broken by components that inject hidden headings (carousels, modals).</p>
                    <p className="mt-1.5 text-teal-600 dark:text-teal-400 font-medium">Reserve <code className="font-normal">id</code> on the H1 if in-page or SERP deep links need a stable fragment.</p>
                  </>
                ),
              }}
            />
          </div>

          <div className="relative mb-6 w-fit">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-400/40 bg-black/40 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-xs text-teal-100 tracking-wider uppercase">Updated April 2026</span>
            </div>
            <SeoAnnotation
              label="Freshness"
              position="top-right"
              tone="orange"
              byRole={{
                copywriter: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Trust &amp; snippets</p>
                    <p>Visible “updated” messaging signals maintenance. Match it to real edits and to <code className="text-teal-600 dark:text-teal-400">dateModified</code> in Article schema when you use it.</p>
                    <p className="mt-1.5">Stale dates hurt credibility if the body still references old years or deprecated tools.</p>
                  </>
                ),
                designer: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Badge design</p>
                    <p>Pills on photography need blur, border, and contrast discipline. Keep motion subtle (pulse) so it doesn’t distract from the headline.</p>
                    <p className="mt-1.5">Align the badge to the grid used by CTAs so the block feels intentional.</p>
                  </>
                ),
                dev: (
                  <>
                    <p className="font-semibold text-slate-900 dark:text-white mb-1">Machine-readable dates</p>
                    <p>
                      Prefer exposing a <code className="text-teal-600 dark:text-teal-400">&lt;time dateTime=&quot;2026-04-16&quot;&gt;</code> (visually styled the same) so parsers and assistive tech get an unambiguous value.
                    </p>
                    <p className="mt-1.5">Automate <code className="text-teal-600 dark:text-teal-400">dateModified</code> from the CMS at publish time to avoid drift.</p>
                  </>
                ),
              }}
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight">
            How to Optimise
            <br />
            <span className="font-semibold">a Website</span>
          </h1>

          <SeoAnnotation
            label="Lead copy"
            position="inline"
            tone="sky"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">First answer, then expand</p>
                  <p>The paragraph under the H1 should answer “what will I learn?” in plain language, then broaden scope (speed, rankings, UX).</p>
                  <p className="mt-1.5">Short, factual sentences are easier to quote in passages and AI summaries.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Measure &amp; rhythm</p>
                  <p>Keep line length comfortable (roughly 45–75 characters where possible) and loosen leading on large type so blocks feel airy, not posterised.</p>
                  <p className="mt-1.5">Ensure colour contrast meets WCAG for body text over the gradient — don’t rely on opacity alone.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Semantics</p>
                  <p>
                    Use a real <code className="text-teal-600 dark:text-teal-400">&lt;p&gt;</code> (not a styled <code className="text-teal-600 dark:text-teal-400">&lt;div&gt;</code>) for this block so reading order stays predictable.
                  </p>
                  <p className="mt-1.5">Avoid embedding headings inside paragraphs; keep H1–H6 strictly hierarchical.</p>
                </>
              ),
            }}
          />

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-lg font-light">
            A complete, step-by-step guide to improving your website's speed, search rankings, and user experience. From technical SEO to content strategy, learn what actually moves the needle.
          </p>

          <SeoAnnotation
            label="CTAs"
            position="inline"
            tone="rose"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Action language</p>
                  <p>Primary: specific verb + outcome (“Start the Guide”). Secondary: lower-commitment (“Read the Checklist”) for mixed intent.</p>
                  <p className="mt-1.5">Avoid vague “Learn more” stacks that don’t describe the destination.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Hierarchy &amp; focus</p>
                  <p>One filled button + one ghost/text CTA keeps focus. Align tap targets to at least 44px and space them for thumb reach on mobile.</p>
                  <p className="mt-1.5">Use consistent radius and tracking so the pair reads as a system.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Links &amp; tracking</p>
                  <p>
                    Use native <code className="text-teal-600 dark:text-teal-400">&lt;a href&gt;</code> for navigation CTAs (not buttons with click handlers) so middle-click, copy link, and prefetch behave correctly.
                  </p>
                  <p className="mt-1.5">
                    Add analytics attributes or events with stable names (e.g. <code className="text-teal-600 dark:text-teal-400">cta_primary_guide</code>) per template.
                  </p>
                </>
              ),
            }}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <Link
              to={guideSectionPath('why-optimise')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-slate-950 text-sm font-semibold uppercase tracking-widest hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300 focus-visible:ring-offset-slate-950 transition-all rounded-lg"
            >
              Start the Guide
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={guideSectionPath('checklist')}
              className="group inline-flex items-center gap-3 text-sm text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-300 focus-visible:ring-offset-slate-950 transition-colors uppercase tracking-widest font-medium"
            >
              <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:border-teal-300 transition-colors">
                <BookOpen size={14} />
              </span>
              Read the Checklist
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 sm:right-8 hidden lg:flex flex-col items-center gap-3">
        <SeoAnnotation
          label="Scroll cue"
          position="top-right"
          tone="emerald"
          byRole={{
            copywriter: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Guiding scroll</p>
                <p>Small affordances hint that there’s more below — useful for long guides. Don’t rely on it as the only signal; content should invite scrolling on its own.</p>
              </>
            ),
            designer: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Motion &amp; subtlety</p>
                <p>Vertical “Scroll” labels and hairline rules read as editorial. Keep opacity low so they don’t compete with CTAs.</p>
                <p className="mt-1.5">Respect <code className="text-teal-600 dark:text-teal-400">prefers-reduced-motion</code>: fade or static fallback.</p>
              </>
            ),
            dev: (
              <>
                <p className="font-semibold text-slate-900 dark:text-white mb-1">Behaviour</p>
                <p>If you animate this cue, gate infinite loops. Prefer CSS scroll-driven animations with reduced-motion media query overrides.</p>
                <p className="mt-1.5">Ensure the cue is decorative — <code className="text-teal-600 dark:text-teal-400">aria-hidden</code> if it duplicates obvious scrolling.</p>
              </>
            ),
          }}
        />
        <span className="text-[10px] text-white/60 tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/10 via-white/40 to-white/10" />
      </div>
    </section>
  );
}
