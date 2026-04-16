import SeoAnnotation from './SeoAnnotation';

export default function ExampleEEAT() {
  return (
    <section className="border-b border-slate-200 dark:border-white/5 bg-white dark:bg-[#0a0a0a] scroll-mt-24" aria-labelledby="author-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
          <SeoAnnotation
            label="E-E-A-T"
            position="top-right"
            tone="amber"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Who &amp; why trust</p>
                  <p>Named authors, roles, and dates help raters and users see experience and accountability — especially on YMYL-adjacent topics.</p>
                  <p className="mt-1.5">Align visible bylines with <code className="text-teal-600 dark:text-teal-400">author</code> in Article JSON-LD.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Byline layout</p>
                  <p>Photo, name, and role should scan in one row on desktop; stack cleanly on small screens with consistent spacing.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Semantics</p>
                  <p>
                    Use <code className="text-teal-600 dark:text-teal-400">&lt;time dateTime&gt;</code> for publish/update. Link the name to an author URL when you have one.
                  </p>
                </>
              ),
            }}
          />
          <img
            src="/stuart-verschoyle.png"
            alt="Portrait of Stuart Verschoyle"
            width={96}
            height={96}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-center border border-slate-200 dark:border-white/10 shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p id="author-heading" className="text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-1">
              About the author
            </p>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">Stuart Verschoyle</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">Senior SEO editor · 12 years in search &amp; content strategy</p>
            <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              Stuart leads technical and editorial SEO programmes for publishers. He focuses on measurable quality: structure, clarity, and performance that hold up in Search Console and in AI-generated overviews.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400">
              <span>
                Published{' '}
                <time dateTime="2026-01-15" className="font-medium text-slate-800 dark:text-slate-200">
                  15 Jan 2026
                </time>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
                |
              </span>
              <span>
                Updated{' '}
                <time dateTime="2026-04-16" className="font-medium text-slate-800 dark:text-slate-200">
                  16 Apr 2026
                </time>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
