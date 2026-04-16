import type { MouseEvent } from 'react';
import SeoAnnotation from './SeoAnnotation';

type Variant = 'hero' | 'default';

const linkHero = 'text-white/80 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm';
const linkDefault =
  'text-slate-600 dark:text-slate-400 hover:text-teal-700 dark:hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0a0a0a] rounded-sm';

export default function ExampleBreadcrumbs({ variant = 'default' }: { variant?: Variant }) {
  const link = variant === 'hero' ? linkHero : linkDefault;
  const sep = variant === 'hero' ? 'text-white/40' : 'text-slate-400 dark:text-slate-500';

  const scrollTo = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`relative ${variant === 'hero' ? 'mb-6' : 'mb-2'}`}>
      <SeoAnnotation
        label="BreadcrumbList"
        position="top-right"
        tone="amber"
        byRole={{
          copywriter: (
            <>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Wayfinding</p>
              <p>Breadcrumbs reinforce hierarchy for users and can supply trail context in SERPs when Google shows them.</p>
            </>
          ),
          designer: (
            <>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Density</p>
              <p>Keep the trail one line on desktop where possible; allow wrap with consistent separators.</p>
            </>
          ),
          dev: (
            <>
              <p className="font-semibold text-slate-900 dark:text-white mb-1">JSON-LD</p>
              <p>
                Optional: mirror this trail in <code className="text-teal-600 dark:text-teal-400">BreadcrumbList</code> structured data with{' '}
                <code className="text-teal-600 dark:text-teal-400">ListItem</code> positions and absolute <code className="text-teal-600 dark:text-teal-400">item</code> URLs. Validate in Rich Results Test.
              </p>
            </>
          ),
        }}
      />
      <nav aria-label="Breadcrumb">
        <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm ${variant === 'hero' ? '' : 'text-slate-600 dark:text-slate-400'}`}>
        <li>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={link}>
            Home
          </a>
        </li>
        <li className={sep} aria-hidden="true">
          /
        </li>
        <li>
          <a href="#why-optimise" onClick={scrollTo('why-optimise')} className={link}>
            Why optimise
          </a>
        </li>
        <li className={sep} aria-hidden="true">
          /
        </li>
        <li>
          <a href="#steps" onClick={scrollTo('steps')} className={link}>
            Step-by-step
          </a>
        </li>
        <li className={sep} aria-hidden="true">
          /
        </li>
        <li className={variant === 'hero' ? 'text-white/90 font-medium' : 'text-slate-900 dark:text-slate-200 font-medium'} aria-current="page">
          Optimisation guide
        </li>
      </ol>
      </nav>
    </div>
  );
}
