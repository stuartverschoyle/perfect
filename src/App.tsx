import { lazy, Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import HeroSection from './sections/HeroSection';
import SeoDocument from './seo/SeoDocument';
import { getGuidePageMeta } from './seo/guideMeta';
import { buildGuideJsonLd } from './seo/jsonLd';
import { DEFAULT_OG_IMAGE } from './seo/site';

const GuideRest = lazy(() => import('./GuideRest'));

function App() {
  const { sectionId } = useParams<{ sectionId?: string }>();
  const pageMeta = getGuidePageMeta(sectionId);
  const jsonLd = buildGuideJsonLd(sectionId);

  useEffect(() => {
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [sectionId]);

  return (
    <div className="min-h-screen max-w-[100vw] overflow-x-hidden bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 transition-colors duration-300">
      <SeoDocument
        title={pageMeta.title}
        description={pageMeta.description}
        canonicalPath={pageMeta.path}
        ogType="website"
        ogImage={DEFAULT_OG_IMAGE}
        jsonLd={jsonLd}
      />
      <Navigation />
      <AccessibilityToolbar />

      <main className="min-w-0 lg:ml-72 pt-16 lg:pt-0">
        <div className="mx-auto max-w-4xl min-w-0 break-words px-4 py-8 [overflow-wrap:anywhere] sm:px-6 lg:px-8 lg:py-12">
          <HeroSection />

          <Suspense
            fallback={
              <div
                className="mt-12 flex min-h-[30vh] items-center justify-center text-slate-400 dark:text-slate-500"
                aria-busy="true"
                aria-label="Loading guide sections"
              >
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
              </div>
            }
          >
            <GuideRest />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
