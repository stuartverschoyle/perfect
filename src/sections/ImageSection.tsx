import { Image, Check, X } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function ImageSection() {
  const formats = [
    { format: 'WebP', size: '~26KB', quality: 'Excellent', support: '97%+', recommended: true },
    { format: 'AVIF', size: '~18KB', quality: 'Excellent', support: '92%+', recommended: true },
    { format: 'JPEG', size: '~80KB', quality: 'Good', support: '100%', recommended: false },
    { format: 'PNG', size: '~200KB', quality: 'Lossless', support: '100%', recommended: false },
  ];

  return (
    <SeoSection id="images" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 shrink-0">
          <Image size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Image Optimization</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Images make up ~50% of a page's total weight. Proper optimization impacts load speed, SEO rankings, and accessibility.</p>
        </div>
      </div>

      {/* File Naming */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">File Naming Convention</h3>
          <InfoTooltip title="Image File Names for SEO">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Keywords in filename:</strong> Search engines read image filenames. "seo-web-page-structure.webp" tells Google what the image is about.</li>
              <li><strong className="text-slate-900 dark:text-white">Hyphens:</strong> Use hyphens to separate words, never underscores or spaces. Google treats hyphens as word separators.</li>
              <li><strong className="text-slate-900 dark:text-white">Descriptive:</strong> The filename should describe the image content. Avoid generic names like "image1.jpg" or "photo.png".</li>
              <li><strong className="text-slate-900 dark:text-white">Lowercase:</strong> Always use lowercase letters. Consistent casing prevents 404 errors on case-sensitive servers.</li>
              <li><strong className="text-slate-900 dark:text-white">Keep short:</strong> Be descriptive but concise. 3-5 words is ideal.</li>
              <li><strong className="text-slate-900 dark:text-white">Google Image Search:</strong> Good filenames help your images rank in Google Image Search, driving additional traffic.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-emerald-50 dark:bg-emerald-500/5 rounded-lg border border-emerald-300 dark:border-emerald-500/20 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Good</span>
            </div>
            <div className="space-y-1.5 font-mono text-sm">
              <div className="text-emerald-600 dark:text-emerald-300">seo-page-structure.webp</div>
              <div className="text-emerald-600 dark:text-emerald-300">hero-banner-homepage.avif</div>
              <div className="text-emerald-600 dark:text-emerald-300">team-photo-office.webp</div>
            </div>
          </div>
          <div className="bg-red-50 dark:bg-red-500/5 rounded-lg border border-red-300 dark:border-red-500/20 p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <X size={14} className="text-red-600 dark:text-red-400" />
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">Bad</span>
            </div>
            <div className="space-y-1.5 font-mono text-sm">
              <div className="text-red-300">IMG_20240315_001.jpg</div>
              <div className="text-red-300">Screenshot 2024-03-15.png</div>
              <div className="text-red-300">final_v2_UPDATED.jpeg</div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Text */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Alt Text</h3>
          <InfoTooltip title="Alt Text Best Practices">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Purpose:</strong> Describes the image to screen readers and search engines. It's also displayed when images fail to load.</li>
              <li><strong className="text-slate-900 dark:text-white">Length:</strong> Keep alt text under 125 characters. Screen readers cut off at this point.</li>
              <li><strong className="text-slate-900 dark:text-white">Be specific:</strong> Describe WHAT is in the image, not what it does. "Bar chart showing SEO traffic growth from Jan-Dec 2024" vs "chart".</li>
              <li><strong className="text-slate-900 dark:text-white">Keywords:</strong> Include your target keyword naturally if the image is relevant to it. Don't force keywords into decorative images.</li>
              <li><strong className="text-slate-900 dark:text-white">Don't start with:</strong> "Image of" or "Picture of" -- screen readers already announce it as an image.</li>
              <li><strong className="text-slate-900 dark:text-white">Decorative images:</strong> Use alt="" (empty) for purely decorative images. This tells screen readers to skip them.</li>
              <li><strong className="text-slate-900 dark:text-white">Ranking factor:</strong> Alt text is a confirmed Google ranking factor, especially for Google Image Search.</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="html"
          code={`<!-- Good alt text -->
<img src="seo-page-structure.webp"
     alt="Diagram showing semantic HTML structure with header, main, article, and footer elements"
     width="800"
     height="450" />

<!-- Decorative image (no alt needed) -->
<img src="decorative-divider.svg" alt="" role="presentation" />

<!-- Bad alt text -->
<img src="image1.jpg" alt="image" />
<img src="chart.png" alt="SEO SEO optimization SEO tips SEO guide" />`}
        />
      </div>

      {/* Format & Compression */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Format & Compression</h3>
          <InfoTooltip title="Image Formats for Web">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">WebP:</strong> Google's recommended format. 26-34% smaller than JPEG at equivalent quality. Use as your default format.</li>
              <li><strong className="text-slate-900 dark:text-white">AVIF:</strong> Next-gen format, even smaller than WebP (~50% smaller than JPEG). Browser support is growing rapidly.</li>
              <li><strong className="text-slate-900 dark:text-white">JPEG:</strong> Use as fallback only. Good for photographs but larger file sizes.</li>
              <li><strong className="text-slate-900 dark:text-white">PNG:</strong> Only use when you need transparency. Much larger than WebP/AVIF.</li>
              <li><strong className="text-slate-900 dark:text-white">SVG:</strong> Perfect for logos, icons, and illustrations. Infinitely scalable, tiny file size.</li>
              <li><strong className="text-slate-900 dark:text-white">Target file size:</strong> Hero images under 200KB, content images under 100KB, thumbnails under 30KB.</li>
              <li><strong className="text-slate-900 dark:text-white">Core Web Vitals:</strong> Image weight directly impacts Largest Contentful Paint (LCP), a key ranking factor.</li>
            </ul>
          </InfoTooltip>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-slate-200 dark:border-slate-700">
                <th className="pb-2 text-slate-500 dark:text-slate-400 font-medium">Format</th>
                <th className="pb-2 text-slate-500 dark:text-slate-400 font-medium">Size (800px)</th>
                <th className="pb-2 text-slate-500 dark:text-slate-400 font-medium">Quality</th>
                <th className="pb-2 text-slate-500 dark:text-slate-400 font-medium">Support</th>
                <th className="pb-2 text-slate-500 dark:text-slate-400 font-medium">Use?</th>
              </tr>
            </thead>
            <tbody>
              {formats.map((f) => (
                <tr key={f.format} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-2.5 font-mono text-slate-900 dark:text-white">{f.format}</td>
                  <td className="py-2.5 text-slate-600 dark:text-slate-300">{f.size}</td>
                  <td className="py-2.5 text-slate-600 dark:text-slate-300">{f.quality}</td>
                  <td className="py-2.5 text-slate-600 dark:text-slate-300">{f.support}</td>
                  <td className="py-2.5">
                    {f.recommended ? (
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><Check size={14} /> Recommended</span>
                    ) : (
                      <span className="text-slate-500">Fallback only</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Responsive Images */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Responsive Images</h3>
          <InfoTooltip title="Responsive Image Techniques">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">srcset:</strong> Provides multiple image sizes so the browser loads the smallest one needed for the device.</li>
              <li><strong className="text-slate-900 dark:text-white">sizes attribute:</strong> Tells the browser how wide the image will be at different viewport sizes, enabling smarter image selection.</li>
              <li><strong className="text-slate-900 dark:text-white">picture element:</strong> Use for art direction (different crops for mobile vs desktop) and format fallbacks.</li>
              <li><strong className="text-slate-900 dark:text-white">Width & height:</strong> ALWAYS include width and height attributes. This prevents Cumulative Layout Shift (CLS), a Core Web Vital.</li>
              <li><strong className="text-slate-900 dark:text-white">Lazy loading:</strong> Add loading="lazy" to below-the-fold images. The browser only loads them as the user scrolls near them.</li>
              <li><strong className="text-slate-900 dark:text-white">Eager loading:</strong> Your hero/above-the-fold image should use loading="eager" (or omit the attribute) for fastest LCP.</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="html"
          code={`<!-- Responsive image with srcset -->
<img src="hero-800.webp"
     srcset="hero-400.webp 400w,
             hero-800.webp 800w,
             hero-1200.webp 1200w"
     sizes="(max-width: 600px) 100vw,
            (max-width: 1200px) 80vw,
            1200px"
     alt="SEO page structure diagram"
     width="1200"
     height="675"
     loading="eager" />

<!-- Picture element with format fallback -->
<picture>
  <source srcset="hero.avif" type="image/avif" />
  <source srcset="hero.webp" type="image/webp" />
  <img src="hero.jpg" alt="SEO guide hero image" width="1200" height="675" />
</picture>

<!-- Below-the-fold image with lazy loading -->
<img src="content-image.webp"
     alt="Content optimization tips"
     width="800"
     height="450"
     loading="lazy" />`}
        />
      </div>
    </SeoSection>
  );
}
