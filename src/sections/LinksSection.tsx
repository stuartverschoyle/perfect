import { ExternalLink, ArrowRight, Check, X } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function LinksSection() {
  return (
    <SeoSection id="links" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
          <ExternalLink size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Links & Calls-to-Action</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Links are the backbone of how search engines discover and evaluate your content. Every link is a vote of confidence.</p>
        </div>
      </div>

      {/* Internal Links */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Internal Links</h3>
          <InfoTooltip title="Internal Linking Strategy">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">PageRank flow:</strong> Internal links distribute "link juice" across your site. Pages with more internal links receive more authority.</li>
              <li><strong className="text-slate-900 dark:text-white">Crawl depth:</strong> Every page should be reachable within 3 clicks from the homepage. Deep pages get crawled less frequently.</li>
              <li><strong className="text-slate-900 dark:text-white">Anchor text:</strong> Use descriptive, keyword-rich anchor text. "Learn about on-page SEO" is better than "click here".</li>
              <li><strong className="text-slate-900 dark:text-white">Contextual links:</strong> Links within body content carry more weight than navigation or footer links.</li>
              <li><strong className="text-slate-900 dark:text-white">Quantity:</strong> Aim for 3-5 internal links per 1000 words. More is fine if naturally placed.</li>
              <li><strong className="text-slate-900 dark:text-white">Pillar pages:</strong> Create hub pages that link to related content, creating topic clusters that signal expertise to Google.</li>
              <li><strong className="text-slate-900 dark:text-white">Orphan pages:</strong> Pages with no internal links pointing to them are "orphans" -- Google may not discover or value them.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-emerald-50 dark:bg-emerald-500/5 rounded-lg border border-emerald-300 dark:border-emerald-500/20 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Effective Anchor Text</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>"Read our <span className="text-emerald-600 dark:text-emerald-300 underline">complete guide to image optimization</span>"</li>
              <li>"Improve your site's <span className="text-emerald-600 dark:text-emerald-300 underline">Core Web Vitals performance</span>"</li>
              <li>"Explore our <span className="text-emerald-600 dark:text-emerald-300 underline">technical SEO audit checklist</span>"</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-500/5 rounded-lg border border-red-300 dark:border-red-500/20 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <X size={14} className="text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">Poor Anchor Text</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>"<span className="text-red-300 underline">Click here</span> to read more"</li>
              <li>"Learn more about it <span className="text-red-300 underline">here</span>"</li>
              <li>"<span className="text-red-300 underline">Read more</span>"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* External / Outbound Links */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">External / Outbound Links</h3>
          <InfoTooltip title="Outbound Link Strategy">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Credibility signal:</strong> Linking to authoritative sources (studies, official docs, research) signals that your content is well-researched.</li>
              <li><strong className="text-slate-900 dark:text-white">Topical relevance:</strong> Outbound links to related, high-authority sites help Google understand your content's topic and niche.</li>
              <li><strong className="text-slate-900 dark:text-white">rel="nofollow":</strong> Use for paid links, user-generated content, or untrusted sources. This tells Google not to pass PageRank.</li>
              <li><strong className="text-slate-900 dark:text-white">rel="sponsored":</strong> Required for paid/sponsored links. Google may penalize sites that don't disclose paid links.</li>
              <li><strong className="text-slate-900 dark:text-white">Open in new tab:</strong> External links should use target="_blank" with rel="noopener noreferrer" for security and UX.</li>
              <li><strong className="text-slate-900 dark:text-white">Don't overdo it:</strong> Link only to genuinely useful resources. Excessive outbound links can dilute your page's authority.</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="html"
          code={`<!-- Standard outbound link (authoritative source) -->
<a href="https://developers.google.com/search/docs"
   target="_blank"
   rel="noopener noreferrer">
  Google Search documentation
</a>

<!-- Sponsored/paid link -->
<a href="https://tool.com"
   target="_blank"
   rel="sponsored noopener noreferrer">
  SEO Tool (Affiliate)
</a>

<!-- User-generated content link -->
<a href="https://user-site.com"
   rel="nofollow ugc noopener noreferrer">
  User's website
</a>`}
        />
      </div>

      {/* CTAs */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Calls-to-Action (CTAs)</h3>
          <InfoTooltip title="CTA Best Practices for SEO">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Action-oriented:</strong> Use verbs that describe the outcome: "Get Your Free Audit", "Download the Checklist", "Start Optimizing".</li>
              <li><strong className="text-slate-900 dark:text-white">Above the fold:</strong> Your primary CTA should be visible without scrolling. Secondary CTAs can appear throughout the content.</li>
              <li><strong className="text-slate-900 dark:text-white">Inbound link value:</strong> CTAs that link to other pages on your site distribute link equity and guide users through your conversion funnel.</li>
              <li><strong className="text-slate-900 dark:text-white">Button text:</strong> Descriptive button text ("Download SEO Checklist") beats generic text ("Submit") for both UX and SEO.</li>
              <li><strong className="text-slate-900 dark:text-white">One primary CTA:</strong> Each page should have one clear primary action. Too many competing CTAs reduce conversion rates.</li>
              <li><strong className="text-slate-900 dark:text-white">Contrast & visibility:</strong> CTAs should be the most visually prominent interactive element. Use contrasting colors and ample whitespace.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-5 border border-slate-200 dark:border-slate-700/30">
            <div className="text-xs text-slate-500 mb-3">Example CTA hierarchy on a page</div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-20 shrink-0">Primary</span>
                <button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2">
                  Get Your Free SEO Audit <ArrowRight size={16} />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-20 shrink-0">Secondary</span>
                <button className="border border-teal-500/50 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-teal-500/10 font-medium px-5 py-2 rounded-lg transition-colors">
                  Download SEO Checklist
                </button>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-20 shrink-0">Tertiary</span>
                <button className="text-teal-600 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 font-medium text-sm underline underline-offset-2 transition-colors">
                  View case studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SeoSection>
  );
}
