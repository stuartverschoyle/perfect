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

export default function ExamplePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0a0a0a] text-slate-900 dark:text-white font-sans">
      <ExampleSkipLink />
      <ExampleAnnotationBar />
      <ExampleReadingProgress />
      <AccessibilityToolbar />
      <ExampleNav />
      <main
        id="main-content"
        tabIndex={-1}
        className="outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0a0a0a]"
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
    </div>
  );
}
