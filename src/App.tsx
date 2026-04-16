import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import HeroSection from './sections/HeroSection';
import WhyOptimiseSection from './sections/WhyOptimiseSection';
import MetaSection from './sections/MetaSection';
import SlugSection from './sections/SlugSection';
import StructureSection from './sections/StructureSection';
import HeadingsSection from './sections/HeadingsSection';
import FirstParagraphSection from './sections/FirstParagraphSection';
import ImageSection from './sections/ImageSection';
import LinksSection from './sections/LinksSection';
import ContentSection from './sections/ContentSection';
import SchemaSection from './sections/SchemaSection';
import TechnicalSection from './sections/TechnicalSection';
import SitemapSection from './sections/SitemapSection';
import RedirectsSection from './sections/RedirectsSection';
import SocialSection from './sections/SocialSection';
import EeatSection from './sections/EeatSection';
import FreshnessSection from './sections/FreshnessSection';
import AnalyticsSection from './sections/AnalyticsSection';
import ResourcesSection from './sections/ResourcesSection';
import LocalSeoSection from './sections/LocalSeoSection';
import AccessibilitySection from './sections/AccessibilitySection';
import TypographySection from './sections/TypographySection';
import ChecklistSection from './sections/ChecklistSection';

const Divider = () => <div className="border-t border-slate-200 dark:border-slate-800/50" />;

function App() {
  const { sectionId } = useParams<{ sectionId?: string }>();

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
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 transition-colors duration-300">
      <Navigation />
      <AccessibilityToolbar />

      <main className="lg:ml-72">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <HeroSection />

          <div className="space-y-16">
            <WhyOptimiseSection />
            <Divider />
            <MetaSection />
            <Divider />
            <SlugSection />
            <Divider />
            <StructureSection />
            <Divider />
            <HeadingsSection />
            <Divider />
            <FirstParagraphSection />
            <Divider />
            <ImageSection />
            <Divider />
            <LinksSection />
            <Divider />
            <ContentSection />
            <Divider />
            <SchemaSection />
            <Divider />
            <TechnicalSection />
            <Divider />
            <SitemapSection />
            <Divider />
            <RedirectsSection />
            <Divider />
            <SocialSection />
            <Divider />
            <EeatSection />
            <Divider />
            <FreshnessSection />
            <Divider />
            <AnalyticsSection />
            <Divider />
            <ResourcesSection />
            <Divider />
            <LocalSeoSection />
            <Divider />
            <AccessibilitySection />
            <Divider />
            <TypographySection />
            <Divider />
            <ChecklistSection />
          </div>

          <footer className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-500">
              SEO Anatomy -- The complete interactive reference for copywriters and designers.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600 mt-2">
              20 sections covering every aspect of building and maintaining a perfect SEO web page.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
