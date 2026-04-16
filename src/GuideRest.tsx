import { lazy, Suspense } from 'react';
import PrerenderReadyMarker from './components/PrerenderReadyMarker';

const WhyOptimiseSection = lazy(() => import('./sections/WhyOptimiseSection'));
const MetaSection = lazy(() => import('./sections/MetaSection'));
const SlugSection = lazy(() => import('./sections/SlugSection'));
const StructureSection = lazy(() => import('./sections/StructureSection'));
const HeadingsSection = lazy(() => import('./sections/HeadingsSection'));
const FirstParagraphSection = lazy(() => import('./sections/FirstParagraphSection'));
const ImageSection = lazy(() => import('./sections/ImageSection'));
const LinksSection = lazy(() => import('./sections/LinksSection'));
const ContentSection = lazy(() => import('./sections/ContentSection'));
const SchemaSection = lazy(() => import('./sections/SchemaSection'));
const TechnicalSection = lazy(() => import('./sections/TechnicalSection'));
const SitemapSection = lazy(() => import('./sections/SitemapSection'));
const RedirectsSection = lazy(() => import('./sections/RedirectsSection'));
const SocialSection = lazy(() => import('./sections/SocialSection'));
const EeatSection = lazy(() => import('./sections/EeatSection'));
const FreshnessSection = lazy(() => import('./sections/FreshnessSection'));
const AnalyticsSection = lazy(() => import('./sections/AnalyticsSection'));
const ResourcesSection = lazy(() => import('./sections/ResourcesSection'));
const LocalSeoSection = lazy(() => import('./sections/LocalSeoSection'));
const AccessibilitySection = lazy(() => import('./sections/AccessibilitySection'));
const TypographySection = lazy(() => import('./sections/TypographySection'));
const ChecklistSection = lazy(() => import('./sections/ChecklistSection'));

const Divider = () => <div className="border-t border-slate-200 dark:border-slate-800/50" />;

function SectionSkeleton() {
  return (
    <div
      className="min-h-[10rem] rounded-xl border border-slate-200/80 bg-slate-50/90 dark:border-slate-700/40 dark:bg-slate-800/30"
      aria-hidden="true"
    >
      <div className="h-full w-full animate-pulse bg-gradient-to-r from-slate-100 via-slate-200/80 to-slate-100 dark:from-slate-800 dark:via-slate-700/60 dark:to-slate-800" />
    </div>
  );
}

/** Below-the-fold guide sections: one async chunk per section (parallel loads via sibling `lazy()`). */
export default function GuideRest() {
  return (
    <>
      <div className="space-y-16">
        <Suspense fallback={<SectionSkeleton />}>
          <WhyOptimiseSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <MetaSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <SlugSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <StructureSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <HeadingsSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <FirstParagraphSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <ImageSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <LinksSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <ContentSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <SchemaSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <TechnicalSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <SitemapSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <RedirectsSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <SocialSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <EeatSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <FreshnessSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <AnalyticsSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <ResourcesSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <LocalSeoSection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <AccessibilitySection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <TypographySection />
        </Suspense>
        <Divider />
        <Suspense fallback={<SectionSkeleton />}>
          <ChecklistSection />
        </Suspense>
      </div>

      <footer className="mt-20 border-t border-slate-200 pt-8 text-center dark:border-slate-800">
        <p className="text-sm text-slate-500">
          SEO Anatomy -- The complete interactive reference for copywriters and designers.
        </p>
        <p className="mt-2 text-xs text-slate-400 dark:text-slate-600">
          20 sections covering every aspect of building and maintaining a perfect SEO web page.
        </p>
      </footer>
      <PrerenderReadyMarker selector="#why-optimise" />
    </>
  );
}
