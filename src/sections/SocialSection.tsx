import { Share2, Twitter, MessageCircle } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function SocialSection() {
  return (
    <SeoSection id="social" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-500/10 text-sky-500 dark:text-sky-400 shrink-0">
          <Share2 size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Social Sharing & Open Graph</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Control exactly how your pages appear when shared on social media, messaging apps, and link previews.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Share2 size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Open Graph Tags</h3>
          <InfoTooltip title="Open Graph Protocol">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">What:</strong> Open Graph (OG) tags are meta tags that control how your URL appears when shared on Facebook, LinkedIn, WhatsApp, Slack, Discord, iMessage, and most social platforms.</li>
              <li><strong className="text-slate-900 dark:text-white">Indirect SEO benefit:</strong> OG tags don't directly influence rankings, but compelling social previews increase click-through rates, shares, and backlinks -- which DO influence rankings.</li>
              <li><strong className="text-slate-900 dark:text-white">og:title:</strong> Can differ from your SEO title. Social titles can be more provocative or emotional. Max 60 characters.</li>
              <li><strong className="text-slate-900 dark:text-white">og:description:</strong> Can differ from meta description. Write for social engagement, not search intent. Max 155 characters.</li>
              <li><strong className="text-slate-900 dark:text-white">og:image:</strong> The single most important OG tag. Posts with images get 2.3x more engagement. Use 1200x630px for optimal display across all platforms.</li>
              <li><strong className="text-slate-900 dark:text-white">Debugging:</strong> Use Facebook's Sharing Debugger and LinkedIn's Post Inspector to preview and clear cached previews after changes.</li>
            </ul>
          </InfoTooltip>
        </div>

        <CodeBlock
          language="html"
          code={`<!-- Essential Open Graph tags for every page -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/page/" />
<meta property="og:title" content="Private Aviation Redefined | SilverAir" />
<meta property="og:description" content="Guaranteed access to a global fleet. No ownership, no joining fees." />
<meta property="og:image" content="https://example.com/images/og-silverair-hero.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="SilverAir private jet fleet" />
<meta property="og:site_name" content="SilverAir" />
<meta property="og:locale" content="en_US" />`}
        />

        <div className="mt-4 bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Social Preview Simulation</h4>
          <div className="bg-[#1a1a2e] rounded-lg overflow-hidden border border-slate-600/30 max-w-md">
            <div className="aspect-[1200/630] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">&#9992;</div>
                <span className="text-xs text-slate-400">og:image -- 1200x630px</span>
              </div>
            </div>
            <div className="p-3">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">silverair.com</div>
              <div className="text-sm font-semibold text-white mb-1">Private Aviation Redefined | SilverAir</div>
              <div className="text-xs text-slate-400">Guaranteed access to a global fleet. No ownership, no joining fees.</div>
            </div>
          </div>
          <p className="text-xs text-teal-400/60 mt-2">This is how your page appears when shared on Facebook, LinkedIn, and most messaging apps.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Twitter size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Twitter/X Card Tags</h3>
          <InfoTooltip title="Twitter Card Best Practices">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">summary_large_image:</strong> The preferred card type for most pages. Displays a large image above the title and description.</li>
              <li><strong className="text-slate-900 dark:text-white">Fallback:</strong> If Twitter card tags are missing, Twitter will use Open Graph tags instead. But for best results, include both.</li>
              <li><strong className="text-slate-900 dark:text-white">twitter:site:</strong> Your brand's Twitter handle. This attributes the content to your account.</li>
              <li><strong className="text-slate-900 dark:text-white">twitter:creator:</strong> The author's personal Twitter handle. Great for E-E-A-T signals and personal brand building.</li>
              <li><strong className="text-slate-900 dark:text-white">Image requirements:</strong> Minimum 300x157px, maximum 4096x4096px. Recommended 1200x628px (same as OG).</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="html"
          code={`<!-- Twitter/X Card tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@silverair" />
<meta name="twitter:creator" content="@stuartverschoyle" />
<meta name="twitter:title" content="Private Aviation Redefined" />
<meta name="twitter:description" content="Guaranteed access to a global fleet." />
<meta name="twitter:image" content="https://example.com/images/twitter-card.jpg" />
<meta name="twitter:image:alt" content="SilverAir private jet in flight" />`}
        />
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle size={18} className="text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Platform-Specific Tips</h3>
          <InfoTooltip title="Social Platform SEO Tips" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Pinterest:</strong> Add rich pin markup for products, articles, and recipes. Pinterest is a visual search engine -- optimise image descriptions.</li>
              <li><strong className="text-slate-900 dark:text-white">LinkedIn:</strong> Article posts from company pages get 3x more reach than link posts. But link posts still need good OG tags.</li>
              <li><strong className="text-slate-900 dark:text-white">WhatsApp/iMessage:</strong> These use OG tags for link previews. A compelling og:image and og:title dramatically increase tap-through rates.</li>
              <li><strong className="text-slate-900 dark:text-white">Social signals debate:</strong> Google says social signals (likes, shares) are not ranking factors. However, viral content earns natural backlinks, which are a ranking factor.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            {
              platform: 'Facebook / LinkedIn',
              image: '1200 x 630px',
              format: 'JPG or PNG (not WebP)',
              maxSize: '< 8MB',
              notes: 'Text on images should cover < 20% of the area for Facebook ads. Use Sharing Debugger to clear cache.',
            },
            {
              platform: 'Twitter / X',
              image: '1200 x 628px',
              format: 'JPG, PNG, GIF (< 5MB)',
              maxSize: '< 5MB',
              notes: 'Use Card Validator to preview. GIFs auto-play in timeline. Include twitter:creator for author attribution.',
            },
            {
              platform: 'Pinterest',
              image: '1000 x 1500px (2:3)',
              format: 'JPG or PNG',
              maxSize: '< 20MB',
              notes: 'Vertical images perform best. Add rich pin meta tags for products. Alt text is crucial for Pinterest search.',
            },
            {
              platform: 'WhatsApp / iMessage',
              image: '1200 x 630px (OG)',
              format: 'JPG or PNG',
              maxSize: '< 300KB ideal',
              notes: 'Smaller images load faster in chat. Both platforms use OG tags. Preview updates may take hours to propagate.',
            },
          ].map((p) => (
            <div key={p.platform} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">{p.platform}</h4>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Image Size</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">{p.image}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Format</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">{p.format}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Max Size</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">{p.maxSize}</div>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{p.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </SeoSection>
  );
}
