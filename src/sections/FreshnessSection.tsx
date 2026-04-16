import { Calendar, TrendingDown, RotateCcw, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import SeoSection from '../components/SeoSection';

const updateSchedule = [
  {
    type: 'Core Pages',
    examples: 'Homepage, About, Services, Product pages',
    frequency: 'Every 3-6 months',
    priority: 'High',
    color: 'text-red-600 dark:text-red-400 bg-red-400/10',
    notes: 'Refresh statistics, update testimonials, verify all links work, update copyright year, review CTAs for relevance.',
  },
  {
    type: 'Blog / Articles',
    examples: 'How-to guides, industry insights, tutorials',
    frequency: 'Every 6-12 months',
    priority: 'High',
    color: 'text-amber-600 dark:text-amber-400 bg-amber-400/10',
    notes: 'Update outdated statistics, add new sections, refresh screenshots, check broken links, update publication date.',
  },
  {
    type: 'Landing Pages',
    examples: 'Campaign pages, PPC landing pages',
    frequency: 'Monthly review',
    priority: 'Critical',
    color: 'text-red-600 dark:text-red-400 bg-red-400/10',
    notes: 'A/B test headlines and CTAs, update social proof, verify form functionality, check conversion tracking.',
  },
  {
    type: 'Technical Pages',
    examples: 'Documentation, API docs, FAQs',
    frequency: 'When product changes',
    priority: 'Medium',
    color: 'text-sky-500 dark:text-sky-400 bg-sky-400/10',
    notes: 'Update when features change, add new FAQs from support tickets, ensure code examples are current.',
  },
  {
    type: 'Legal Pages',
    examples: 'Privacy policy, Terms of service',
    frequency: 'Annually + when laws change',
    priority: 'Medium',
    color: 'text-sky-500 dark:text-sky-400 bg-sky-400/10',
    notes: 'Review for legal compliance (GDPR, CCPA), update contact information, review cookie policies.',
  },
  {
    type: 'News / Time-sensitive',
    examples: 'Press releases, event pages, seasonal',
    frequency: 'Archive after relevance',
    priority: 'Low',
    color: 'text-slate-400 bg-slate-400/10',
    notes: 'Add "archived" notice, redirect to evergreen alternatives, or noindex to prevent stale content from ranking.',
  },
];

export default function FreshnessSection() {
  return (
    <SeoSection id="freshness" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
          <Calendar size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Content Freshness & Maintenance</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">How often to update your pages, what "content decay" means, and strategies to keep your rankings from declining over time.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown size={18} className="text-red-600 dark:text-red-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Content Decay</h3>
          <InfoTooltip title="What is Content Decay?" variant="warning">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Definition:</strong> Content decay is the gradual decline in search traffic to a page over time. It happens to virtually every page, even successful ones.</li>
              <li><strong className="text-slate-900 dark:text-white">Why it happens:</strong> Competitors publish better content, search intent evolves, statistics become outdated, Google's algorithm updates shift rankings, and user expectations change.</li>
              <li><strong className="text-slate-900 dark:text-white">How to detect it:</strong> In Google Search Console, filter pages by clicks with a 6-month comparison. Pages with 20%+ decline are decaying.</li>
              <li><strong className="text-slate-900 dark:text-white">The QDF signal:</strong> Google's "Query Deserves Freshness" algorithm boosts recently updated content for queries where freshness matters (news, trends, evolving topics).</li>
              <li><strong className="text-slate-900 dark:text-white">Freshness signals Google detects:</strong> Changed body content, new sections added, updated dates, new internal/external links, updated images, and user engagement metrics improving.</li>
              <li><strong className="text-slate-900 dark:text-white">Don't fake it:</strong> Simply changing the publication date without updating content is detectable and can be penalised. Google compares content diffs.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {[
            { phase: 'Growth', range: 'Months 0-6', desc: 'New content climbs rankings as Google tests it against established pages.', color: 'emerald' },
            { phase: 'Peak', range: 'Months 6-18', desc: 'Content reaches maximum traffic. This is when most pages perform their best.', color: 'sky' },
            { phase: 'Decay', range: 'Months 18+', desc: 'Traffic starts declining. Competitors outrank you, content becomes dated.', color: 'red' },
          ].map((item) => (
            <div key={item.phase} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <div className={`text-lg font-bold text-${item.color}-400 mb-0.5`}>{item.phase}</div>
              <div className="text-xs text-slate-500 mb-2">{item.range}</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-800/30 rounded-lg">
          <p className="text-xs text-amber-700 dark:text-amber-300/80 leading-relaxed">
            <strong>Key metric:</strong> Set up a quarterly content audit. Export your top 50 pages from Google Analytics, compare traffic year-over-year, and prioritise updating any page that has declined by more than 15%.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <RotateCcw size={18} className="text-teal-600 dark:text-teal-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recommended Update Schedule</h3>
          <InfoTooltip title="Update Cadence Guide" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Not all updates are equal:</strong> A "major refresh" (rewriting 30%+ of content, adding new sections, updating all data) is worth far more than minor tweaks.</li>
              <li><strong className="text-slate-900 dark:text-white">Republish strategy:</strong> When doing a major update, update the published date and add "Originally published [date], updated [date]" for transparency.</li>
              <li><strong className="text-slate-900 dark:text-white">Keep the same URL:</strong> Never create a new URL for updated content. Update in place to preserve accumulated backlinks and authority.</li>
              <li><strong className="text-slate-900 dark:text-white">Content calendar:</strong> Schedule content reviews like you schedule new content creation. Updating existing content often has higher ROI than creating new pages.</li>
              <li><strong className="text-slate-900 dark:text-white">HubSpot study:</strong> Updating and republishing old blog posts with new data and images increased organic traffic by an average of 106%.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="space-y-2">
          {updateSchedule.map((item) => (
            <div key={item.type} className="bg-white dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700/30 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${item.color}`}>
                    {item.priority}
                  </span>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{item.type}</h4>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock size={11} />
                  {item.frequency}
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-1.5">{item.examples}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.notes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle size={18} className="text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Evergreen Content Strategy</h3>
          <InfoTooltip title="Creating Evergreen Content">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Evergreen content</strong> remains relevant for years with minimal updates. It's the highest-ROI content you can create.</li>
              <li><strong className="text-slate-900 dark:text-white">Examples:</strong> "How to write a business plan", "What is SEO", "Guide to private aviation" -- topics with consistent search volume.</li>
              <li><strong className="text-slate-900 dark:text-white">Avoid date-dependent language:</strong> Don't say "this year" or "recently". Use specific dates or timeless phrasing.</li>
              <li><strong className="text-slate-900 dark:text-white">Modular structure:</strong> Write in sections that can be individually updated without rewriting the entire piece.</li>
              <li><strong className="text-slate-900 dark:text-white">Statistics section:</strong> If you include data, put statistics in a clearly marked section that's easy to update quarterly.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-emerald-300 dark:border-emerald-500/20">
            <div className="flex items-center gap-1.5 mb-2">
              <CheckCircle size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Evergreen Phrasing</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li>"Private aviation typically costs between..."</li>
              <li>"Studies consistently show that..."</li>
              <li>"As of [Month Year], the industry standard is..."</li>
              <li>"The fundamental principles of SEO include..."</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-red-300 dark:border-red-500/20">
            <div className="flex items-center gap-1.5 mb-2">
              <AlertTriangle size={14} className="text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">Date-Dependent (Avoid)</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li>"This year, the biggest trend is..."</li>
              <li>"Recently, Google announced..."</li>
              <li>"In 2024, the best strategy is..."</li>
              <li>"The latest update changed everything..."</li>
            </ul>
          </div>
        </div>
      </div>
    </SeoSection>
  );
}
