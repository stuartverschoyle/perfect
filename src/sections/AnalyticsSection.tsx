import { BarChart3, Search, Target, TrendingUp } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import SeoSection from '../components/SeoSection';

const kpis = [
  {
    category: 'Search Visibility',
    color: 'sky',
    metrics: [
      { name: 'Organic Traffic', source: 'GA4', desc: 'Total sessions from organic search. The north star metric for SEO.', benchmark: 'Growth of 5-15% MoM for established sites' },
      { name: 'Impressions', source: 'GSC', desc: 'How often your pages appear in search results, regardless of clicks.', benchmark: 'Tracks keyword coverage and visibility' },
      { name: 'Average Position', source: 'GSC', desc: 'Your average ranking position across all queries. Lower is better.', benchmark: 'Position 1-3 gets 55% of all clicks' },
      { name: 'Indexed Pages', source: 'GSC', desc: 'Pages Google has successfully indexed from your site.', benchmark: 'Should match your sitemap count closely' },
    ],
  },
  {
    category: 'Engagement Quality',
    color: 'teal',
    metrics: [
      { name: 'Click-Through Rate', source: 'GSC', desc: 'Percentage of impressions that result in a click. Measures title/description effectiveness.', benchmark: 'Position 1: ~28%, Position 3: ~11%' },
      { name: 'Engagement Rate', source: 'GA4', desc: 'Sessions lasting 10+ seconds, with conversion, or 2+ page views. Replaces bounce rate.', benchmark: 'Above 60% is good for most content' },
      { name: 'Avg. Session Duration', source: 'GA4', desc: 'How long visitors stay on your site per session. Indicates content quality.', benchmark: '2-3 min for blog content, 3-5 for tools' },
      { name: 'Pages per Session', source: 'GA4', desc: 'Average number of pages viewed per session. Measures internal linking effectiveness.', benchmark: '2-3 pages is typical, 4+ is excellent' },
    ],
  },
  {
    category: 'Conversions & Revenue',
    color: 'emerald',
    metrics: [
      { name: 'Organic Conversions', source: 'GA4', desc: 'Goal completions from organic traffic. The ultimate measure of SEO ROI.', benchmark: 'Track both micro and macro conversions' },
      { name: 'Conversion Rate', source: 'GA4', desc: 'Percentage of organic visitors who complete a desired action.', benchmark: '2-5% for lead gen, 1-3% for ecommerce' },
      { name: 'Revenue per Session', source: 'GA4', desc: 'Average revenue generated per organic session. Connects SEO to business value.', benchmark: 'Varies by industry -- track trend over time' },
      { name: 'Assisted Conversions', source: 'GA4', desc: 'Conversions where organic search was in the path but not the final touch.', benchmark: 'SEO often assists more than it converts directly' },
    ],
  },
];

export default function AnalyticsSection() {
  return (
    <SeoSection id="analytics" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 shrink-0">
          <BarChart3 size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics & Measurement</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">The metrics and tools you need to measure SEO performance, identify opportunities, and prove ROI.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Search size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Essential SEO Tools</h3>
          <InfoTooltip title="SEO Tool Stack">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Google Search Console (free):</strong> The single most important SEO tool. Shows which queries drive traffic, which pages are indexed, and technical issues. Check it weekly.</li>
              <li><strong className="text-slate-900 dark:text-white">Google Analytics 4 (free):</strong> Tracks user behaviour after they arrive on your site. Set up custom events for conversions, scroll depth, and outbound link clicks.</li>
              <li><strong className="text-slate-900 dark:text-white">PageSpeed Insights (free):</strong> Tests Core Web Vitals with both lab and field data. Run every page through this after launch and after major changes.</li>
              <li><strong className="text-slate-900 dark:text-white">Ahrefs / Semrush (paid):</strong> For competitive analysis, backlink monitoring, keyword research, and rank tracking. Essential for serious SEO work.</li>
              <li><strong className="text-slate-900 dark:text-white">Screaming Frog (free up to 500 URLs):</strong> Crawls your site like Google does. Identifies broken links, missing meta tags, duplicate content, and redirect chains.</li>
              <li><strong className="text-slate-900 dark:text-white">Schema Markup Validator (free):</strong> Google's Rich Results Test validates your structured data and shows which rich features your pages are eligible for.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {[
            { name: 'Google Search Console', type: 'Free', purpose: 'Search performance, indexing, technical health', frequency: 'Check weekly' },
            { name: 'Google Analytics 4', type: 'Free', purpose: 'User behaviour, conversions, audience insights', frequency: 'Check weekly' },
            { name: 'PageSpeed Insights', type: 'Free', purpose: 'Core Web Vitals, performance scoring', frequency: 'After each deploy' },
            { name: 'Rich Results Test', type: 'Free', purpose: 'Schema validation, rich snippet eligibility', frequency: 'After schema changes' },
            { name: 'Screaming Frog', type: 'Freemium', purpose: 'Site audits, broken links, on-page issues', frequency: 'Monthly crawl' },
            { name: 'Ahrefs / Semrush', type: 'Paid', purpose: 'Keywords, backlinks, competitor analysis', frequency: 'Ongoing monitoring' },
          ].map((tool) => (
            <div key={tool.name} className="bg-white dark:bg-slate-900/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700/30">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{tool.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${tool.type === 'Free' ? 'bg-emerald-400/10 text-emerald-600 dark:text-emerald-400' : tool.type === 'Paid' ? 'bg-amber-400/10 text-amber-600 dark:text-amber-400' : 'bg-sky-400/10 text-sky-500 dark:text-sky-400'}`}>
                  {tool.type}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-1.5">{tool.purpose}</p>
              <p className="text-[10px] text-slate-500">{tool.frequency}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Target size={18} className="text-teal-600 dark:text-teal-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">KPIs to Track</h3>
          <InfoTooltip title="SEO KPI Framework" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Layered approach:</strong> Track visibility metrics (are we being seen?), engagement metrics (are visitors finding value?), and conversion metrics (are we generating business?).</li>
              <li><strong className="text-slate-900 dark:text-white">Set baselines:</strong> Before optimising, record 3 months of baseline data. Compare future performance against this baseline, not arbitrary targets.</li>
              <li><strong className="text-slate-900 dark:text-white">Segment everything:</strong> Total organic traffic is a vanity metric. Segment by landing page, device, query type (branded vs non-branded), and geography.</li>
              <li><strong className="text-slate-900 dark:text-white">Reporting cadence:</strong> Weekly quick checks (rankings, traffic, errors), monthly deep dives (content performance, technical health), quarterly strategy reviews (ROI, competitive position).</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="space-y-4">
          {kpis.map((group) => (
            <div key={group.category}>
              <h4 className={`text-sm font-semibold text-${group.color}-400 mb-2 uppercase tracking-wider`}>{group.category}</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {group.metrics.map((m) => (
                  <div key={m.name} className="bg-white dark:bg-slate-900/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700/30 flex items-start gap-3">
                    <div className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-${group.color}-400/10 text-${group.color}-400 shrink-0 mt-0.5`}>
                      {m.source}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white mb-0.5">{m.name}</div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{m.desc}</p>
                      <p className="text-[10px] text-slate-500 mt-1">{m.benchmark}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={18} className="text-amber-600 dark:text-amber-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Reporting Cadence</h3>
          <InfoTooltip title="SEO Reporting Best Practices" variant="warning">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Don't panic over weekly fluctuations.</strong> SEO is measured in months, not days. Google's algorithm updates can cause temporary swings.</li>
              <li><strong className="text-slate-900 dark:text-white">Year-over-year comparison</strong> is more meaningful than month-over-month because it accounts for seasonality.</li>
              <li><strong className="text-slate-900 dark:text-white">Focus on trends, not snapshots.</strong> A single month's data is noise. Three months is a signal. Six months is a trend.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {[
            {
              period: 'Weekly',
              color: 'sky',
              tasks: [
                'Check Search Console for crawl errors',
                'Monitor keyword rankings for top 20 pages',
                'Review organic traffic vs. previous week',
                'Check for manual actions or security issues',
              ],
            },
            {
              period: 'Monthly',
              color: 'teal',
              tasks: [
                'Full content performance analysis',
                'Backlink profile review (new/lost)',
                'Core Web Vitals check on key pages',
                'Competitor ranking comparison',
                'Technical site audit (Screaming Frog)',
              ],
            },
            {
              period: 'Quarterly',
              color: 'amber',
              tasks: [
                'Content decay analysis and refresh plan',
                'Keyword strategy review and gap analysis',
                'ROI calculation: organic revenue vs SEO spend',
                'Site architecture and internal linking audit',
                'Update SEO strategy based on findings',
              ],
            },
          ].map((item) => (
            <div key={item.period} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <h4 className={`text-sm font-bold text-${item.color}-400 mb-3`}>{item.period}</h4>
              <ul className="space-y-2">
                {item.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className={`w-1 h-1 rounded-full bg-${item.color}-400/50 shrink-0 mt-1.5`} />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SeoSection>
  );
}
