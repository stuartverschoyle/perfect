import { Heading1 } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import SeoSection from '../components/SeoSection';

export default function HeadingsSection() {
  const headings = [
    {
      tag: 'H1',
      size: 'text-3xl',
      example: 'How to Build the Perfect SEO Web Page',
      color: 'border-sky-500 dark:border-sky-400 text-sky-500 dark:text-sky-400',
      tips: {
        title: 'H1 Tag Rules',
        items: [
          'Only ONE H1 per page. Multiple H1s confuse search engines about the main topic.',
          'Include your primary keyword naturally. This is the strongest on-page heading signal.',
          'Keep it between 20-70 characters for optimal display.',
          'The H1 should match or closely align with your title tag.',
          'Make it descriptive and compelling -- it\'s the first thing users read on the page.',
          'H1 is NOT the same as the title tag. The title appears in search results; H1 appears on the page.',
        ],
      },
    },
    {
      tag: 'H2',
      size: 'text-2xl',
      example: 'Understanding Meta Tags for SEO',
      color: 'border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400',
      tips: {
        title: 'H2 Tag Rules',
        items: [
          'Use H2s for major sections of your content. They act as chapter headings.',
          'Include secondary keywords and related terms in H2s.',
          'Multiple H2s are fine and expected on long-form content.',
          'H2s often become the anchors for featured snippets and "People Also Ask" results.',
          'Google uses H2s to understand the topical structure of your page.',
        ],
      },
    },
    {
      tag: 'H3',
      size: 'text-xl',
      example: 'Writing Effective Title Tags',
      color: 'border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400',
      tips: {
        title: 'H3 Tag Rules',
        items: [
          'Subsections within an H2 section. Creates logical content hierarchy.',
          'Great for breaking down complex topics into digestible parts.',
          'Include long-tail keywords and question-based headings.',
          'Question-format H3s ("How does X work?") can trigger featured snippets.',
        ],
      },
    },
    {
      tag: 'H4-H6',
      size: 'text-lg',
      example: 'Character Limit Guidelines',
      color: 'border-amber-600 dark:border-amber-400 text-amber-600 dark:text-amber-400',
      tips: {
        title: 'H4-H6 Tag Rules',
        items: [
          'Use sparingly. If you need H4+, consider if your content needs restructuring.',
          'Useful for detailed technical documentation or long-form guides.',
          'Carry less SEO weight but still contribute to content hierarchy.',
          'Never skip heading levels (e.g., don\'t go from H2 to H4).',
        ],
      },
    },
  ];

  return (
    <SeoSection id="headings" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-500 dark:text-sky-400 shrink-0">
          <Heading1 size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Heading Hierarchy</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Headings create a table of contents that search engines use to understand your content structure and topics.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Visual Hierarchy</h3>
          <InfoTooltip title="Heading Hierarchy Rules">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Logical nesting:</strong> {'Headings must follow a logical order. H1 > H2 > H3. Never skip levels.'}</li>
              <li><strong className="text-slate-900 dark:text-white">Outline test:</strong> If you extract just the headings, they should read like a table of contents for your page.</li>
              <li><strong className="text-slate-900 dark:text-white">Don't use for styling:</strong> Never choose a heading level based on size. Use CSS for visual sizing and heading tags for semantic meaning.</li>
              <li><strong className="text-slate-900 dark:text-white">Screen readers:</strong> Visually impaired users navigate by headings. Proper hierarchy is an accessibility requirement.</li>
              <li><strong className="text-slate-900 dark:text-white">Featured snippets:</strong> Google often pulls content from beneath well-structured headings for featured snippets.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="space-y-4">
          {headings.map((h, i) => (
            <div key={h.tag} className="flex items-start gap-4">
              <div className={`shrink-0 w-14 h-14 rounded-xl border-2 ${h.color} flex items-center justify-center font-bold text-sm`}>
                {h.tag}
              </div>
              <div className="flex-1 min-w-0" style={{ paddingLeft: `${i * 16}px` }}>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`${h.size} font-bold text-slate-900 dark:text-white`}>{h.example}</span>
                  <InfoTooltip title={h.tips.title}>
                    <ul className="space-y-2">
                      {h.tips.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </InfoTooltip>
                </div>
                <div className="h-px bg-slate-200 dark:bg-slate-700/50 mt-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-2 p-4 rounded-xl bg-amber-50 dark:bg-amber-500/5 border border-amber-300 dark:border-amber-500/20">
        <span className="text-amber-600 dark:text-amber-400 text-lg mt-0.5">!</span>
        <div className="text-sm text-amber-700 dark:text-amber-300/80">
          <strong className="text-amber-600 dark:text-amber-300">Common mistake:</strong> Using heading tags for visual styling. If you want large, bold text that isn't a section heading, use CSS classes instead. Heading tags carry semantic meaning that affects SEO.
        </div>
      </div>
    </SeoSection>
  );
}
