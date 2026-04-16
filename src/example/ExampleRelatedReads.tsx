import { ArrowRight, BookOpen, ClipboardList, Wrench } from 'lucide-react';
import SeoAnnotation from './SeoAnnotation';
import { guideSectionPath } from '../guideSections';

const items = [
  {
    href: guideSectionPath('checklist'),
    title: 'Interactive SEO checklist',
    desc: 'Tick off technical, content, and performance tasks from the main guide.',
    icon: ClipboardList,
  },
  {
    href: guideSectionPath('resources'),
    title: 'Tools & resources',
    desc: 'Official tools and references referenced across this demo.',
    icon: Wrench,
  },
  {
    href: guideSectionPath('why-optimise'),
    title: 'Why optimise first?',
    desc: 'Business case and outcomes before you dive into implementation.',
    icon: BookOpen,
  },
];

export default function ExampleRelatedReads() {
  return (
    <section className="py-14 sm:py-16 bg-slate-50 dark:bg-[#070707] scroll-mt-20 border-t border-slate-200/80 dark:border-white/5" aria-labelledby="related-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-8">
          <SeoAnnotation
            label="Related links"
            position="top-right"
            tone="emerald"
            byRole={{
              copywriter: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Varied anchors</p>
                  <p>Rotate anchor patterns (“checklist”, “tools”, “why optimise”) so internal links feel natural, not repetitive exact-match spam.</p>
                </>
              ),
              designer: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Card rhythm</p>
                  <p>Three-up cards give a clear “next step” without competing with the primary footer.</p>
                </>
              ),
              dev: (
                <>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">Real hrefs</p>
                  <p>
                    These use path URLs like <code className="text-teal-600 dark:text-teal-400">/guide/checklist</code> so they work with static hosting and prerender.
                  </p>
                </>
              ),
            }}
          />
          <h2 id="related-heading" className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
            Next reads in the guide
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Deepen the topics from this demo with these anchors — each uses a different wording style on purpose.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/40 p-5 hover:border-teal-500/40 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#070707]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <item.icon size={18} className="text-teal-700 dark:text-teal-400" />
                </div>
                <ArrowRight size={16} className="ml-auto text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" aria-hidden />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-teal-800 dark:group-hover:text-teal-300">{item.title}</h3>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed flex-1">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
