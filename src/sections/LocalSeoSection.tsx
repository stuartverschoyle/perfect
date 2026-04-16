import { MapPin, Building, Star, Phone } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function LocalSeoSection() {
  return (
    <SeoSection id="local-seo" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-red-50 dark:bg-red-500/5 text-red-600 dark:text-red-400 shrink-0">
          <MapPin size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Local SEO</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Essential for any business with a physical location or service area. Local SEO drives foot traffic, calls, and map pack visibility.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Building size={18} className="text-sky-500 dark:text-sky-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Google Business Profile</h3>
          <InfoTooltip title="Google Business Profile (GBP)">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">The most important local ranking factor.</strong> Your GBP listing determines whether you appear in the Map Pack (the top 3 local results with a map).</li>
              <li><strong className="text-slate-900 dark:text-white">Claim and verify:</strong> Go to business.google.com. Verification usually requires a postcard, phone call, or video verification.</li>
              <li><strong className="text-slate-900 dark:text-white">Complete every field:</strong> Business name, address, phone, hours, website, categories, services, attributes, and photos. Completeness is a ranking signal.</li>
              <li><strong className="text-slate-900 dark:text-white">Posts:</strong> Publish weekly Google Posts (offers, events, updates). They appear in your listing and signal activity to Google.</li>
              <li><strong className="text-slate-900 dark:text-white">Photos:</strong> Businesses with photos receive 42% more direction requests and 35% more click-throughs. Upload 10+ quality photos.</li>
              <li><strong className="text-slate-900 dark:text-white">Q&A:</strong> Monitor and answer questions on your listing. You can also seed questions yourself to control the narrative.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30 mb-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-400/20 to-red-500/10 flex items-center justify-center border border-red-300 dark:border-red-500/20 shrink-0">
              <MapPin size={24} className="text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">SilverAir Private Aviation</span>
                <div className="flex items-center gap-0.5 text-amber-600 dark:text-amber-400">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} size={10} fill="currentColor" />
                  ))}
                </div>
                <span className="text-[10px] text-slate-500">(127 reviews)</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">Private Aviation Company</p>
              <p className="text-xs text-slate-500 mt-1">9th Floor, Europa Centre, Floriana, Malta FRN 1400</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400">Open 24/7</span>
                <span className="text-[10px] text-slate-500">+1 (800) 555-1234</span>
                <span className="text-[10px] text-sky-500 dark:text-sky-400">silverair.com</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-teal-400/60 mt-3">This simulates a Google Business Profile listing. Every field shown here is a ranking signal for local search.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {[
            { label: 'Map Pack Visibility', stat: '44%', desc: 'of all Google searches have local intent' },
            { label: 'Mobile Local Search', stat: '76%', desc: 'of local mobile searches result in a store visit within 24 hours' },
            { label: 'GBP Click-Through', stat: '5x', desc: 'more clicks than organic results for local queries' },
          ].map((item) => (
            <div key={item.label} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30 text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{item.stat}</div>
              <div className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">{item.label}</div>
              <p className="text-[10px] text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Phone size={18} className="text-emerald-600 dark:text-emerald-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">NAP Consistency</h3>
          <InfoTooltip title="NAP (Name, Address, Phone)" variant="success">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">NAP stands for Name, Address, Phone Number.</strong> Google cross-references your business info across hundreds of directories to verify accuracy.</li>
              <li><strong className="text-slate-900 dark:text-white">Exact match required:</strong> "Suite 200" vs "Ste 200" vs "#200" -- pick one format and use it everywhere. Even minor inconsistencies confuse Google.</li>
              <li><strong className="text-slate-900 dark:text-white">Key directories:</strong> Google Business Profile, Apple Maps, Bing Places, Yelp, Facebook, Yellow Pages, BBB, and industry-specific directories.</li>
              <li><strong className="text-slate-900 dark:text-white">Citations:</strong> Each mention of your NAP on another website is a "citation". More consistent citations from authoritative directories = higher local rankings.</li>
              <li><strong className="text-slate-900 dark:text-white">Audit tools:</strong> Use Moz Local, BrightLocal, or Whitespark to find and fix inconsistent NAP data across the web.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-800/30 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">Consistent (Correct)</h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-mono">
              <div className="p-2 bg-white dark:bg-slate-900/50 rounded">SilverAir Private Aviation<br />9th Floor, Europa Business Centre<br />Floriana, Malta FRN 1400<br />+356 2134 0000</div>
              <div className="p-2 bg-white dark:bg-slate-900/50 rounded">SilverAir Private Aviation<br />9th Floor, Europa Business Centre<br />Floriana, Malta FRN 1400<br />+356 2134 0000</div>
            </div>
            <p className="text-[10px] text-emerald-400/60 mt-2">Identical across all directories and your website footer.</p>
          </div>
          <div className="bg-red-50 dark:bg-red-950/30 border border-red-800/30 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Inconsistent (Problematic)</h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-mono">
              <div className="p-2 bg-white dark:bg-slate-900/50 rounded">SilverAir<br />Floor 9, Europa Centre<br />Floriana, MT<br />(356) 2134-0000</div>
              <div className="p-2 bg-white dark:bg-slate-900/50 rounded">Silver Air Aviation Ltd.<br />Europa Business Ctr, 9F<br />Floriana FRN1400, Malta<br />+356-21340000</div>
            </div>
            <p className="text-[10px] text-red-400/60 mt-2">Different name, address format, and phone format -- Google cannot confidently match these.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Star size={18} className="text-amber-600 dark:text-amber-400" />
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Reviews & Local Schema</h3>
          <InfoTooltip title="Reviews and Structured Data for Local SEO" variant="warning">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Reviews are a top 3 local ranking factor.</strong> Both quantity and quality matter. Aim for a consistent stream, not bursts.</li>
              <li><strong className="text-slate-900 dark:text-white">Respond to every review</strong> -- positive and negative. Google confirms that review responses are a ranking signal.</li>
              <li><strong className="text-slate-900 dark:text-white">Never fake reviews.</strong> Google's algorithm detects review spam and may penalise your listing. FTC enforcement has also increased.</li>
              <li><strong className="text-slate-900 dark:text-white">Ask at the right time:</strong> Request reviews after a positive interaction, not via mass email. Personalised requests get 4x higher response rates.</li>
            </ul>
          </InfoTooltip>
        </div>

        <CodeBlock
          language="json"
          code={`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SilverAir Private Aviation",
  "image": "https://silverair.com/images/office.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9th Floor, Europa Business Centre",
    "addressLocality": "Floriana",
    "addressCountry": "MT",
    "postalCode": "FRN 1400"
  },
  "telephone": "+356-2134-0000",
  "url": "https://silverair.com",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}`}
        />
        <p className="text-xs text-teal-400/60 mt-2">
          LocalBusiness schema helps Google display rich results with ratings, hours, and contact info directly in search results.
        </p>
      </div>
    </SeoSection>
  );
}
