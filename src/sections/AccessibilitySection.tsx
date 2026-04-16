import { Accessibility, Check } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function AccessibilitySection() {
  return (
    <SeoSection id="accessibility" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-teal-100 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
          <Accessibility size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Accessibility & SEO</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Accessibility and SEO share the same goal: making content understandable and usable for everyone, including search engine crawlers.</p>
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Why Accessibility Helps SEO</h3>
          <InfoTooltip title="Accessibility & SEO Connection">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">Shared signals:</strong> Alt text, heading structure, link text, and semantic HTML all serve both accessibility and SEO.</li>
              <li><strong className="text-slate-900 dark:text-white">User experience:</strong> Accessible sites have lower bounce rates and higher engagement -- signals Google uses for rankings.</li>
              <li><strong className="text-slate-900 dark:text-white">Legal compliance:</strong> Many countries require WCAG 2.1 AA compliance. Lawsuits for inaccessible websites are increasing.</li>
              <li><strong className="text-slate-900 dark:text-white">Audience reach:</strong> ~15% of the global population has a disability. Accessible design serves everyone better.</li>
            </ul>
          </InfoTooltip>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            {
              title: 'ARIA Labels',
              description: 'Add aria-label to interactive elements without visible text, like icon buttons.',
              example: '<button aria-label="Open menu"><svg>...</svg></button>',
            },
            {
              title: 'Color Contrast',
              description: 'Text must have a 4.5:1 contrast ratio against its background (WCAG AA).',
              example: 'Use tools like WebAIM Contrast Checker to verify.',
            },
            {
              title: 'Focus States',
              description: 'All interactive elements must have visible focus indicators for keyboard navigation.',
              example: ':focus-visible { outline: 2px solid #0ea5e9; }',
            },
            {
              title: 'Skip Links',
              description: 'Allow keyboard users to skip navigation and jump directly to main content.',
              example: '<a href="#main" class="sr-only focus:not-sr-only">Skip to content</a>',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700/30">
              <div className="flex items-center gap-1.5 mb-1">
                <Check size={14} className="text-teal-600 dark:text-teal-400" />
                <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{item.description}</p>
              <code className="text-xs text-teal-600 dark:text-teal-300 font-mono">{item.example}</code>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Language & Hreflang</h3>
          <InfoTooltip title="Language Tags for SEO">
            <ul className="space-y-2">
              <li><strong className="text-slate-900 dark:text-white">lang attribute:</strong> Always set the lang attribute on your HTML element. This tells search engines and screen readers what language your content is in.</li>
              <li><strong className="text-slate-900 dark:text-white">Hreflang:</strong> If your site has multiple language versions, use hreflang tags to tell Google which version to show in each country/language.</li>
              <li><strong className="text-slate-900 dark:text-white">x-default:</strong> Include an x-default hreflang for users whose language isn't explicitly covered.</li>
              <li><strong className="text-slate-900 dark:text-white">International SEO:</strong> Proper hreflang prevents duplicate content issues across language versions and ensures the right version ranks in each market.</li>
            </ul>
          </InfoTooltip>
        </div>
        <CodeBlock
          language="html"
          code={`<html lang="en">

<!-- For multilingual sites, add hreflang in <head> -->
<link rel="alternate" hreflang="en" href="https://example.com/page" />
<link rel="alternate" hreflang="es" href="https://example.com/es/page" />
<link rel="alternate" hreflang="fr" href="https://example.com/fr/page" />
<link rel="alternate" hreflang="x-default" href="https://example.com/page" />`}
        />
      </div>
    </SeoSection>
  );
}
