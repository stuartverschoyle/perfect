import { Star } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';

export default function ExampleTrust() {
  return (
    <section className="py-14 sm:py-16 bg-white dark:bg-[#0a0a0a] scroll-mt-20 border-t border-slate-200 dark:border-white/5" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto">
          <SeoAnnotation
            label="Reviews & schema"
            position="top-right"
            tone="rose"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Proof, not decoration</p>
                  <p>Short quotes with name and role beat anonymous stars. Only show ratings you can substantiate.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Stars &amp; quotes</p>
                  <p>Keep star rows decorative (<code className="text-teal-600 dark:text-teal-400">aria-hidden</code>) if they duplicate text; the quote carries meaning.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Review / Organization JSON-LD</p>
                  <p>
                    For real product reviews, use <code className="text-teal-600 dark:text-teal-400">Review</code> + <code className="text-teal-600 dark:text-teal-400">Rating</code> inside the right parent type. Match visible text. This block is illustrative only.
                  </p>
                </>
              ),
            }}
          />
          <h2 id="trust-heading" className="sr-only">
            Reader feedback
          </h2>
          <figure className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6 sm:p-8">
            <div className="flex gap-0.5 mb-4" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-base sm:text-lg text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              “We used this page as the internal template for our marketing site relaunch. The checklist and meta sections alone saved us two sprint cycles — and Search Console errors dropped within a week of launch.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-white">Jordan Ellis</span>
              <span className="text-slate-400 dark:text-slate-500"> · </span>
              Head of Digital, Northline Studio
              <span className="block text-xs text-slate-500 dark:text-slate-500 mt-1">Illustrative testimonial for educational layout — not a live third-party review feed.</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
