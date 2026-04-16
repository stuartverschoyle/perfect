import { useEffect } from 'react';
import ExampleNav from './ExampleNav';
import ExampleHero from './ExampleHero';
import ExampleSkipLink from './ExampleSkipLink';
import ExampleReadingProgress from './ExampleReadingProgress';
import ExampleEEAT from './ExampleEEAT';
import ExampleMemberships from './ExampleMemberships';
import ExampleFleet from './ExampleFleet';
import ExampleComparisonTable from './ExampleComparisonTable';
import ExampleExperience from './ExampleExperience';
import ExampleSustainability from './ExampleSustainability';
import ExampleFAQ from './ExampleFAQ';
import ExampleRelatedReads from './ExampleRelatedReads';
import ExampleTrust from './ExampleTrust';
import ExampleCTA from './ExampleCTA';
import ExampleFooter from './ExampleFooter';
import ExampleAnnotationBar from './ExampleAnnotationBar';
import AccessibilityToolbar from '../components/AccessibilityToolbar';
import PrerenderReadyMarker from '../components/PrerenderReadyMarker';
import SeoDocument from '../seo/SeoDocument';
import { buildExampleJsonLd } from '../seo/jsonLd';
import { EXAMPLE_CANONICAL_PATH, EXAMPLE_PAGE_DESCRIPTION, EXAMPLE_PAGE_TITLE } from '../seo/exampleMeta';
import { DEFAULT_OG_IMAGE } from '../seo/site';

export default function ExamplePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen max-w-[100vw] overflow-x-hidden bg-white font-sans text-slate-900 dark:bg-[#0a0a0a] dark:text-white">
      <SeoDocument
        title={EXAMPLE_PAGE_TITLE}
        description={EXAMPLE_PAGE_DESCRIPTION}
        canonicalPath={EXAMPLE_CANONICAL_PATH}
        ogType="article"
        ogImage={DEFAULT_OG_IMAGE}
        jsonLd={buildExampleJsonLd()}
      />
      <ExampleSkipLink />
      <ExampleAnnotationBar />
      <ExampleReadingProgress />
      <AccessibilityToolbar />
      <ExampleNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-w-0 break-words outline-none [overflow-wrap:anywhere] focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0a]"
      >
        <ExampleHero />
        <ExampleEEAT />
        <ExampleMemberships />
        <ExampleFleet />
        <ExampleComparisonTable />
        <ExampleExperience />
        <ExampleSustainability />
        <ExampleFAQ />
        <ExampleRelatedReads />
        <ExampleTrust />
        <ExampleCTA />
      </main>
      <ExampleFooter />
      <PrerenderReadyMarker selector="#main-content" />
    </div>
  );
}
