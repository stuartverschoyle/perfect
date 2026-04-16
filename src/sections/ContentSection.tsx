import { FileText, Check, X } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import SeoSection from '../components/SeoSection';

export default function ContentSection() {
  return (
    <SeoSection id="content" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
          <FileText size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Content & Copy Quality</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Content is still king. How you write, structure, and present your copy directly impacts rankings, engagement, and conversions.</p>
        </div>
      </div>

      {/* Readability */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Readability & Structure</h3>
          <InfoTooltip title="Content Readability">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Reading level:</strong> Aim for 8th grade reading level (Flesch-Kincaid). Simple, clear writing outperforms complex prose.</li>
              <li><strong className="text-slate-900 dark:text-white">Paragraph length:</strong> Keep paragraphs to 2-3 sentences max. Large blocks of text increase bounce rates.</li>
              <li><strong className="text-slate-900 dark:text-white">Sentence length:</strong> Mix short and medium sentences. Average 15-20 words per sentence.</li>
              <li><strong className="text-slate-900 dark:text-white">Scannable content:</strong> Use bullet points, numbered lists, bold key terms, and subheadings every 200-300 words.</li>
              <li><strong className="text-slate-900 dark:text-white">Active voice:</strong> Use active voice ("Google ranks pages" vs "Pages are ranked by Google"). It's clearer and more direct.</li>
              <li><strong className="text-slate-900 dark:text-white">Transition words:</strong> Use words like "however", "additionally", "therefore" to guide readers through your content.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-emerald-50 dark:bg-emerald-500/5 rounded-lg border border-emerald-300 dark:border-emerald-500/20 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Scannable Content</span>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-2">
              <p><strong className="text-slate-900 dark:text-white">Short paragraphs</strong> make content easy to scan on mobile devices.</p>
              <p>Users read in an <strong className="text-slate-900 dark:text-white">F-pattern</strong>, so front-load important information in each paragraph.</p>
              <p>Break up text with:</p>
              <ul className="list-disc list-inside text-slate-500 dark:text-slate-400 space-y-1 pl-2">
                <li>Bullet points</li>
                <li>Bold key terms</li>
                <li>Subheadings</li>
              </ul>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-500/5 rounded-lg border border-red-300 dark:border-red-500/20 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <X size={14} className="text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">Wall of Text</span>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              <p>When you write content for the web it is important to remember that users don't actually read every word on the page, they scan through the content looking for relevant information and if they can't find what they're looking for quickly they will leave your page and go to a competitor's site which will increase your bounce rate and signal to search engines that your content isn't providing value to users who click on it from the search results page.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Keyword Usage */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Keyword Strategy</h3>
          <InfoTooltip title="Keyword Best Practices">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Primary keyword:</strong> One main keyword per page. Include it in the title, H1, first paragraph, URL, and naturally 3-5 more times in the body.</li>
              <li><strong className="text-slate-900 dark:text-white">Keyword density:</strong> Aim for 1-2% keyword density. Anything over 3% risks being flagged as keyword stuffing.</li>
              <li><strong className="text-slate-900 dark:text-white">Semantic keywords:</strong> Include related terms and synonyms. Google's algorithms understand context and synonyms (e.g., "car", "vehicle", "automobile").</li>
              <li><strong className="text-slate-900 dark:text-white">LSI keywords:</strong> Latent Semantic Indexing keywords are contextually related terms. For "SEO", LSI terms include "search rankings", "organic traffic", "backlinks".</li>
              <li><strong className="text-slate-900 dark:text-white">Long-tail keywords:</strong> Target specific, lower-competition phrases in H3s and throughout content. "best image format for SEO 2026" vs "image SEO".</li>
              <li><strong className="text-slate-900 dark:text-white">Search intent:</strong> Match content type to intent. Informational ("how to"), navigational ("brand name"), transactional ("buy"), commercial ("best X").</li>
              <li><strong className="text-slate-900 dark:text-white">NLP optimization:</strong> Write naturally. Google's BERT and MUM models understand natural language, so forced keyword placement hurts more than it helps.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
          <div className="text-xs text-slate-500 mb-3">Keyword placement map for a page targeting "SEO web page optimization"</div>
          <div className="space-y-2.5">
            {[
              { location: 'Title Tag', priority: 'Critical', example: '"SEO Web Page Optimization Guide | Brand"' },
              { location: 'H1', priority: 'Critical', example: '"How to Master SEO Web Page Optimization"' },
              { location: 'URL Slug', priority: 'Critical', example: '"/guide/seo-web-page-optimization"' },
              { location: 'First paragraph', priority: 'Critical', example: 'Within first 100 words' },
              { location: 'Meta description', priority: 'High', example: 'Natural inclusion for CTR boost' },
              { location: 'H2 headings', priority: 'High', example: 'Related variations and secondary terms' },
              { location: 'Image alt text', priority: 'Medium', example: 'Only when image is relevant to keyword' },
              { location: 'Body content', priority: 'Medium', example: '3-5 natural mentions per 1000 words' },
            ].map((item) => (
              <div key={item.location} className="flex items-center gap-3 text-sm">
                <span className={`w-16 shrink-0 text-xs font-medium ${
                  item.priority === 'Critical' ? 'text-rose-400' :
                  item.priority === 'High' ? 'text-amber-600 dark:text-amber-400' : 'text-slate-500 dark:text-slate-400'
                }`}>{item.priority}</span>
                <span className="w-36 shrink-0 text-slate-900 dark:text-white font-medium">{item.location}</span>
                <span className="text-slate-500 dark:text-slate-400">{item.example}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Length */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Content Length & Depth</h3>
          <InfoTooltip title="Content Length Guidelines">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">No magic number:</strong> The ideal length depends on search intent and competition. Analyze the top 5 ranking pages for your keyword.</li>
              <li><strong className="text-slate-900 dark:text-white">General guidelines:</strong> Blog posts: 1500-2500 words. Landing pages: 500-1000 words. Product pages: 300-500 words + specs.</li>
              <li><strong className="text-slate-900 dark:text-white">Comprehensive coverage:</strong> Cover the topic thoroughly. Thin content (under 300 words) rarely ranks for competitive terms.</li>
              <li><strong className="text-slate-900 dark:text-white">Quality over quantity:</strong> 1000 words of valuable, focused content beats 3000 words of filler. Google measures engagement, not just word count.</li>
              <li><strong className="text-slate-900 dark:text-white">E-E-A-T:</strong> Experience, Expertise, Authoritativeness, Trustworthiness. Show real knowledge through specific examples, data, and original insights.</li>
              <li><strong className="text-slate-900 dark:text-white">Fresh content:</strong> Regularly update content to keep it current. Add a "Last updated" date to signal freshness.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { type: 'Blog Post', words: '1,500-2,500', color: 'text-sky-500 dark:text-sky-400 bg-sky-100 dark:bg-sky-400/10 border-sky-400/20' },
            { type: 'Landing Page', words: '500-1,000', color: 'text-teal-600 dark:text-teal-400 bg-teal-400/10 border-teal-400/20' },
            { type: 'Product Page', words: '300-500', color: 'text-amber-600 dark:text-amber-400 bg-amber-400/10 border-amber-400/20' },
            { type: 'Pillar Page', words: '3,000-5,000', color: 'text-rose-400 bg-rose-400/10 border-rose-400/20' },
          ].map((item) => (
            <div key={item.type} className={`rounded-lg border p-4 text-center ${item.color}`}>
              <div className="text-xs opacity-70 mb-1">{item.type}</div>
              <div className="text-lg font-bold">{item.words}</div>
              <div className="text-xs opacity-70">words</div>
            </div>
          ))}
        </div>
      </div>

      {/* Image to Copy Ratio */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Image-to-Copy Ratio</h3>
          <InfoTooltip title="Image-to-Copy Ratio">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Rule of thumb:</strong> Include one image or visual for every 300-400 words of content.</li>
              <li><strong className="text-slate-900 dark:text-white">Engagement:</strong> Articles with images get 94% more views than those without. Visuals break up text and illustrate concepts.</li>
              <li><strong className="text-slate-900 dark:text-white">Types of visuals:</strong> Charts, infographics, diagrams, screenshots, and photos all count. Vary your visual types.</li>
              <li><strong className="text-slate-900 dark:text-white">Above the fold:</strong> Always have a visual element above the fold (hero image, video, or illustration).</li>
              <li><strong className="text-slate-900 dark:text-white">Don't overdo it:</strong> Too many images slow page load and can overwhelm content. Balance is key.</li>
              <li><strong className="text-slate-900 dark:text-white">Decorative vs functional:</strong> Every image should serve a purpose: illustrate a point, provide data, or enhance understanding.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
          <div className="space-y-1.5">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-blue-500/20 rounded-full">
                  <div className="h-full bg-blue-400/60 rounded-full" style={{ width: '80%' }} />
                </div>
                <div className="w-8 h-8 rounded bg-rose-400/20 border border-rose-400/30 shrink-0 flex items-center justify-center">
                  <span className="text-[10px] text-rose-400">IMG</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400" /> Text content (~300-400 words)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-400" /> Image / Visual</span>
          </div>
        </div>
      </div>
    </SeoSection>
  );
}
