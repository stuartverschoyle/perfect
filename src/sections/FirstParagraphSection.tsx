import { MessageSquare } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import SeoSection from '../components/SeoSection';

export default function FirstParagraphSection() {
  return (
    <SeoSection id="first-paragraph" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
          <MessageSquare size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">First Paragraph & AEO</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Your opening paragraph is the most valuable real estate on your page -- for both traditional SEO and Answer Engine Optimization.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">The Critical First 100 Words</h3>
          <InfoTooltip title="First Paragraph SEO">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Primary keyword:</strong> Include your main keyword within the first 100 words, ideally in the first sentence. This signals topic relevance to search engines.</li>
              <li><strong className="text-slate-900 dark:text-white">Answer the query:</strong> The first paragraph should directly answer the search intent. Google often uses this for featured snippets.</li>
              <li><strong className="text-slate-900 dark:text-white">Front-loading:</strong> Place the most important information first. Both users and search engines prioritize early content.</li>
              <li><strong className="text-slate-900 dark:text-white">Inverted pyramid:</strong> Follow the journalistic model -- conclusion first, then details, then background.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-5 border border-slate-200 dark:border-slate-700/30">
          <div className="relative">
            <div className="absolute -left-1 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-amber-400 to-amber-400/0" />
            <p className="text-slate-800 dark:text-slate-200 leading-relaxed pl-4">
              <span className="bg-amber-200/80 dark:bg-amber-400/20 text-amber-900 dark:text-amber-300/90 px-1 rounded font-medium">Building the perfect SEO web page</span>{' '}
              requires understanding how every element -- from meta tags to image alt text -- works together to help search engines understand, index, and rank your content. This guide breaks down each component with actionable rules for copywriters and designers.
            </p>
            <div className="mt-3 pl-4 flex items-center gap-3 text-xs">
              <span className="text-amber-700 dark:text-amber-400 font-medium">Primary keyword included in first sentence</span>
              <span className="text-slate-400 dark:text-slate-500" aria-hidden="true">
                |
              </span>
              <span className="text-slate-600 dark:text-slate-400">Word count: 42</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Answer Engine Optimization (AEO)</h3>
          <InfoTooltip title="AEO -- Answer Engine Optimization" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">What is AEO:</strong> Optimizing content to be the direct answer provided by AI assistants (ChatGPT, Google AI Overviews, Perplexity, Siri, Alexa).</li>
              <li><strong className="text-slate-900 dark:text-white">Why it matters:</strong> AI search is growing rapidly. By 2026, a significant portion of search queries return AI-generated answers that pull from web content.</li>
              <li><strong className="text-slate-900 dark:text-white">How to optimize:</strong> Write clear, concise answers to specific questions. Use the "is" statement format: "X is Y that does Z."</li>
              <li><strong className="text-slate-900 dark:text-white">Structure:</strong> Use question-based headings (H2/H3) followed by direct, factual answers in 2-3 sentences before elaborating.</li>
              <li><strong className="text-slate-900 dark:text-white">Factual tone:</strong> AI engines prefer authoritative, factual language over promotional copy.</li>
              <li><strong className="text-slate-900 dark:text-white">Entity clarity:</strong> Clearly define what your page is about in the first paragraph. AI engines use this to match queries to content.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 dark:bg-emerald-500/5 rounded-lg border border-emerald-300 dark:border-emerald-500/20 p-4">
            <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">AEO-Optimized Opening</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              "A meta description is a brief HTML attribute (150-160 characters) that summarizes a web page's content. It appears below the title in search engine results and directly impacts click-through rates."
            </p>
            <div className="mt-2 text-xs text-emerald-800 dark:text-emerald-400/80">Clear definition + context + relevance</div>
          </div>
          <div className="bg-red-50 dark:bg-red-500/5 rounded-lg border border-red-300 dark:border-red-500/20 p-4">
            <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Poor Opening</div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              "In today's digital landscape, understanding the nuances of search engine optimization is more important than ever. Let's dive into one of the most overlooked aspects..."
            </p>
            <div className="mt-2 text-xs text-red-800 dark:text-red-400/80">Vague, no definition, filler content</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Featured Snippet Formula</h3>
          <InfoTooltip title="Featured Snippets">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Paragraph snippets:</strong> Answer "what is" questions in 40-60 words directly below the question heading.</li>
              <li><strong className="text-slate-900 dark:text-white">List snippets:</strong> Use ordered or unordered lists for "how to" or "best of" content.</li>
              <li><strong className="text-slate-900 dark:text-white">Table snippets:</strong> Structure comparison data in HTML tables for comparison queries.</li>
              <li><strong className="text-slate-900 dark:text-white">Position zero:</strong> Featured snippets appear above the #1 organic result, dramatically increasing visibility.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30 space-y-3">
          <div className="text-sm">
            <span className="text-slate-500">Step 1:</span>
            <span className="text-slate-900 dark:text-white ml-2">Question-based heading</span>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-md px-3 py-2 text-sm font-mono text-teal-600 dark:text-teal-300">
            &lt;h2&gt;What Is a Meta Description?&lt;/h2&gt;
          </div>
          <div className="text-sm">
            <span className="text-slate-500">Step 2:</span>
            <span className="text-slate-900 dark:text-white ml-2">Direct answer in 40-60 words</span>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-md px-3 py-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            A meta description is an HTML attribute that provides a brief summary of a web page. Search engines display it in search results below the page title. While not a direct ranking factor, it significantly influences click-through rates and user engagement.
          </div>
          <div className="text-sm">
            <span className="text-slate-500">Step 3:</span>
            <span className="text-slate-900 dark:text-white ml-2">Expanded detail below</span>
          </div>
        </div>
      </div>
    </SeoSection>
  );
}
