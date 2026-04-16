import { Search } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';
import { guideSectionPath } from '../guideSections';

const footerLinks = {
  Guide: ['Technical SEO', 'On-Page SEO', 'Page Speed', 'Content Strategy'],
  Tools: ['Site Audit', 'Speed Test', 'Schema Validator', 'SEO Checklist'],
  Learn: ['SEO Glossary', 'Case Studies', 'Video Tutorials', 'Newsletter'],
  Company: ['About Us', 'Contact', 'Write for Us', 'Careers'],
};

const footerHrefMap: Record<string, string> = {
  'Technical SEO': guideSectionPath('technical'),
  'On-Page SEO': guideSectionPath('content'),
  'Page Speed': guideSectionPath('technical'),
  'Content Strategy': guideSectionPath('content'),
  'Site Audit': guideSectionPath('technical'),
  'Speed Test': guideSectionPath('technical'),
  'Schema Validator': guideSectionPath('schema'),
  'SEO Checklist': guideSectionPath('checklist'),
  'SEO Glossary': guideSectionPath('typography'),
  'Case Studies': guideSectionPath('eeat'),
  'Video Tutorials': guideSectionPath('resources'),
  Newsletter: guideSectionPath('resources'),
  'About Us': guideSectionPath('eeat'),
  Contact: guideSectionPath('links'),
  'Write for Us': guideSectionPath('eeat'),
  Careers: guideSectionPath('eeat'),
  'Privacy Policy': guideSectionPath('accessibility'),
  'Terms of Service': guideSectionPath('accessibility'),
  'Cookie Policy': guideSectionPath('accessibility'),
  Accessibility: guideSectionPath('accessibility'),
};

export default function ExampleFooter() {
  return (
    <footer className="relative border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#050505]">
      <SeoAnnotation
        label="Footer IA"
        position="top-right"
        tone="sky"
        byRole={{
          copywriter: (
            <>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Coverage &amp; trust</p>
              <p>Grouped links show breadth (guide, tools, learn) without stuffing keywords. Legal links at the bar reinforce legitimacy for humans and raters.</p>
            </>
          ),
          designer: (
            <>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Density</p>
              <p>Footer typography should be smaller and calmer than body — it’s wayfinding, not a second article.</p>
            </>
          ),
          dev: (
            <>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Landmarks</p>
              <p>
                One <code className="text-teal-600 dark:text-teal-400">&lt;footer&gt;</code> per page. Column headings can be <code className="text-teal-600 dark:text-teal-400">&lt;h4&gt;</code> if your outline allows; avoid skipping up from page H1 in confusing ways.
              </p>
            </>
          ),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href={guideSectionPath('why-optimise')} className="flex items-center gap-2 mb-4" aria-label="Go to SEO guide">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                <Search size={14} className="text-white" />
              </div>
              <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">Optimise</span>
            </a>
            <p className="text-xs text-slate-900/80 dark:text-white/75 leading-relaxed mb-4">
              The complete guide to website optimisation. Helping developers, designers, and copywriters build sites that rank.
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Built as an example of a perfectly SEO-optimised page. Every element on this page follows best practices.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={footerHrefMap[link] ?? guideSectionPath('resources')}
                      className="text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <SeoAnnotation
            label="Legal row"
            position="top-right"
            tone="emerald"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Policy clarity</p>
                  <p>Short labels (“Privacy Policy”) are standard — don’t rename them creatively; users and auditors expect these nouns.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Bar layout</p>
                  <p>Copyright left / legal right is a familiar pattern; keep tap targets comfortable on mobile even when text is small.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Stable URLs</p>
                  <p>Policy links should resolve with 200s and match your actual documents — broken footers erode trust signals.</p>
                </>
              ),
            }}
          />
          <div className="flex items-center gap-6">
            <span className="text-xs text-slate-700 dark:text-slate-300">&copy; 2026 Optimise. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((link) => (
              <a
                key={link}
                href={footerHrefMap[link] ?? guideSectionPath('accessibility')}
                className="text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <SeoAnnotation
        label="Schema"
        position="bottom-left"
        tone="amber"
        byRole={{
          copywriter: (
            <>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">What schema buys you</p>
              <p>Article JSON-LD can surface richer results (title, dates, author) — it supports the same story your visible byline tells.</p>
            </>
          ),
          designer: (
            <>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Not a UI element</p>
              <p>Schema is invisible metadata — never style fake “stars” on-page unless they reflect real review markup you publish.</p>
            </>
          ),
          dev: (
            <>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Valid JSON-LD</p>
              <p>
                Inject via <code className="text-teal-600 dark:text-teal-400">&lt;script type=&quot;application/ld+json&quot;&gt;</code>. Keep URLs absolute, dates ISO-8601, and validate in Rich Results Test.
              </p>
              <p className="mt-1.5">Avoid duplicating conflicting Article blocks per URL.</p>
              <p className="mt-1.5">Example payload for this demo page:</p>
              <pre className="mt-2 p-2 bg-slate-950 rounded text-[10px] text-teal-300 overflow-x-auto">
{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Optimise a Website",
  "description": "A complete guide to improving speed, search rankings, and user experience.",
  "author": {
    "@type": "Person",
    "name": "Stuart Verschoyle",
    "url": "https://optimise.dev/authors/stuart-verschoyle"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Optimise",
    "logo": "https://optimise.dev/logo.svg"
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-04-16"
}`}
              </pre>
            </>
          ),
        }}
      />
    </footer>
  );
}
