import { useState } from 'react';
import { ClipboardCheck, ChevronDown, ChevronUp } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import SeoSection from '../components/SeoSection';

interface ChecklistGroup {
  title: string;
  color: string;
  items: { label: string; detail: string }[];
}

const checklistData: ChecklistGroup[] = [
  {
    title: 'Before Publishing',
    color: 'sky',
    items: [
      { label: 'Title tag is 50-60 characters with primary keyword', detail: 'Place the keyword near the front. Make it compelling for clicks.' },
      { label: 'Meta description is 150-160 characters with a call-to-action', detail: 'Include the target keyword and a reason to click.' },
      { label: 'URL/slug is short, descriptive, and hyphenated', detail: 'e.g., /private-jet-memberships/ not /page?id=123' },
      { label: 'One H1 tag with primary keyword', detail: 'Only one per page. Should closely match the title tag.' },
      { label: 'H2-H3 tags create a logical content hierarchy', detail: 'Subheadings should read like a table of contents.' },
      { label: 'First paragraph answers the target query directly', detail: 'Critical for featured snippets and AEO.' },
      { label: 'All images have descriptive alt text', detail: 'Include keywords naturally. Describe the image for blind users.' },
      { label: 'Images are compressed and in WebP/AVIF format', detail: 'Under 200KB for content images, under 500KB for heroes.' },
      { label: 'Image file names are descriptive and hyphenated', detail: 'silverair-global-7500-cabin.webp, not IMG_4521.jpg' },
      { label: 'At least 3-5 internal links to related pages', detail: 'Use descriptive anchor text, not "click here".' },
      { label: 'External links open in new tab with rel="noopener"', detail: 'Link to authoritative sources to build trust.' },
      { label: 'Canonical tag points to the correct URL', detail: 'Self-referencing canonical on every page.' },
      { label: 'Open Graph tags are set (title, description, image)', detail: 'Test with Facebook Sharing Debugger before publishing.' },
      { label: 'Schema markup / JSON-LD is valid', detail: 'Test with Google Rich Results Test.' },
      { label: 'Content is at least 300 words (ideally 1000+ for articles)', detail: 'Thin content ranks poorly. Quality over quantity.' },
      { label: 'No duplicate content issues', detail: 'Check with Copyscape or site:yoursite.com + title search.' },
    ],
  },
  {
    title: 'Technical Checks',
    color: 'teal',
    items: [
      { label: 'Page loads in under 3 seconds', detail: 'Test with PageSpeed Insights. Check both mobile and desktop.' },
      { label: 'Core Web Vitals pass (LCP < 2.5s, INP < 200ms, CLS < 0.1)', detail: 'Check field data in Search Console > Core Web Vitals.' },
      { label: 'HTTPS is active with valid SSL certificate', detail: 'No mixed content warnings. All resources loaded over HTTPS.' },
      { label: 'Mobile-friendly and responsive', detail: 'Test with Google Mobile-Friendly Test. No horizontal scrolling.' },
      { label: 'XML sitemap is current and submitted to Search Console', detail: 'Regenerate after every publish. Only include canonical URLs.' },
      { label: 'Robots.txt allows crawling of important pages', detail: "Don't accidentally block CSS, JS, or image directories." },
      { label: 'No broken links (404 errors)', detail: 'Run Screaming Frog or check Search Console Coverage report.' },
      { label: 'No redirect chains or loops', detail: 'Every redirect should go directly to the final destination.' },
      { label: 'Viewport meta tag is present', detail: 'width=device-width, initial-scale=1.0' },
      { label: 'Semantic HTML structure (header, main, nav, footer)', detail: 'Helps crawlers and screen readers understand page structure.' },
      { label: 'Lazy loading on below-fold images', detail: 'loading="lazy" on all images except the hero/LCP image.' },
      { label: 'Font-display: swap to prevent FOIT', detail: 'Text should be visible immediately, even before fonts load.' },
    ],
  },
  {
    title: 'Content Quality',
    color: 'amber',
    items: [
      { label: 'Content satisfies search intent for target query', detail: 'Informational, transactional, or navigational -- match the intent.' },
      { label: 'Author byline with credentials is visible', detail: 'Important for E-E-A-T, especially for YMYL topics.' },
      { label: 'Statistics and claims cite credible sources', detail: 'Link to original studies, not secondary sources.' },
      { label: 'Content includes unique value (not available elsewhere)', detail: 'Original data, case studies, expert quotes, or unique perspectives.' },
      { label: 'Reading level is appropriate for the audience', detail: 'Use Hemingway Editor. Aim for grade 8-10 for general audiences.' },
      { label: 'No keyword stuffing -- keywords appear naturally', detail: '1-2% keyword density maximum. Write for humans first.' },
      { label: 'Content has a clear call-to-action', detail: 'Every page should have a purpose. What should the reader do next?' },
      { label: 'Publication date is visible', detail: "Google uses this as a freshness signal. Don't hide dates." },
    ],
  },
  {
    title: 'Post-Publishing & Ongoing',
    color: 'emerald',
    items: [
      { label: 'Page is indexed in Google (site: search or URL Inspection)', detail: 'Check within 1-2 weeks of publishing. Request indexing if needed.' },
      { label: 'Share on social media with proper OG preview', detail: 'Verify the preview looks correct before sharing.' },
      { label: 'Build internal links from existing high-authority pages', detail: 'Find your top-performing pages and link from them to new content.' },
      { label: 'Monitor Search Console for the page in the first month', detail: 'Check impressions, clicks, and average position weekly.' },
      { label: 'Set a calendar reminder to review in 6 months', detail: 'Check for content decay. Update statistics and add new information.' },
      { label: 'Monitor and respond to user engagement signals', detail: 'Comments, time on page, scroll depth. Improve if metrics are poor.' },
      { label: 'Check for new competitor content targeting the same keywords', detail: 'Set up Google Alerts or use Ahrefs Content Explorer.' },
      { label: 'Update "last modified" date when making substantive changes', detail: 'Only when content genuinely changes. Don\'t fake freshness.' },
    ],
  },
];

function ChecklistGroup({ group }: { group: ChecklistGroup }) {
  const [expanded, setExpanded] = useState(true);
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const total = group.items.length;
  const progress = (checkedCount / total) * 100;

  return (
    <div className="bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700/30 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-100/30 dark:hover:bg-slate-800/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h4 className={`text-sm font-semibold text-${group.color}-400`}>{group.title}</h4>
          <span className="text-[11px] text-slate-700 dark:text-slate-300">{checkedCount}/{total}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-24 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 bg-${group.color}-400`}
              style={{ width: `${progress}%` }}
            />
          </div>
          {expanded ? <ChevronUp size={16} className="text-slate-700 dark:text-slate-300" /> : <ChevronDown size={16} className="text-slate-700 dark:text-slate-300" />}
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 space-y-1">
          {group.items.map((item, i) => (
            <label
              key={i}
              className={`flex items-start gap-3 p-2 rounded cursor-pointer transition-colors ${
                checked[i] ? 'bg-slate-100/20 dark:bg-slate-800/20' : 'hover:bg-slate-100/20 dark:hover:bg-slate-800/20'
              }`}
            >
              <input
                type="checkbox"
                checked={checked[i] || false}
                onChange={() => setChecked((prev) => ({ ...prev, [i]: !prev[i] }))}
                className="mt-0.5 w-4 h-4 rounded border-slate-600 bg-slate-100 dark:bg-slate-800 text-teal-500 focus:ring-teal-500/30 shrink-0"
              />
              <div>
                <span
                  className={`text-sm font-medium ${
                    checked[i] ? 'text-slate-600 dark:text-slate-400 line-through' : 'text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {item.label}
                </span>
                <p
                  className={`text-xs mt-1 leading-relaxed ${
                    checked[i] ? 'text-slate-700 dark:text-slate-300' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChecklistSection() {
  return (
    <SeoSection id="checklist" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
          <ClipboardCheck size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">SEO Checklist</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">An interactive checklist covering every SEO element. Use this before publishing any page and as a periodic maintenance reference.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Interactive Page Checklist</h3>
          <InfoTooltip title="How to Use This Checklist" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Pre-publish:</strong> Run through the "Before Publishing" section for every new page or major update.</li>
              <li><strong className="text-slate-900 dark:text-white">Monthly audit:</strong> Use the "Technical Checks" section as a monthly site health audit.</li>
              <li><strong className="text-slate-900 dark:text-white">Content review:</strong> Use "Content Quality" when reviewing existing content for updates.</li>
              <li><strong className="text-slate-900 dark:text-white">Ongoing:</strong> The "Post-Publishing" section has reminders for long-term maintenance.</li>
              <li><strong className="text-slate-900 dark:text-white">Tip:</strong> Not every item applies to every page type. Use judgement -- a legal page has different needs than a product page.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="space-y-3">
          {checklistData.map((group) => (
            <ChecklistGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </SeoSection>
  );
}
