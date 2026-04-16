import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  Link,
  LayoutGrid as Layout,
  Heading1,
  MessageSquare,
  Image,
  ExternalLink,
  FileText,
  Code,
  Settings,
  Accessibility,
  Map,
  Calendar,
  Award,
  Share2,
  BarChart3,
  CornerDownRight,
  MapPin,
  ClipboardCheck,
  Type,
  Target,
} from 'lucide-react';

/** Section ids must match `SeoSection id=` in each guide section component. */
export const guideSections: { id: string; label: string; icon: LucideIcon }[] = [
  { id: 'why-optimise', label: 'Why Optimise?', icon: Target },
  { id: 'meta', label: 'Meta & Head Tags', icon: Globe },
  { id: 'slug', label: 'URL & Slug', icon: Link },
  { id: 'structure', label: 'Semantic HTML', icon: Layout },
  { id: 'headings', label: 'Heading Hierarchy', icon: Heading1 },
  { id: 'first-paragraph', label: 'First Paragraph & AEO', icon: MessageSquare },
  { id: 'images', label: 'Image Optimization', icon: Image },
  { id: 'links', label: 'Links & CTAs', icon: ExternalLink },
  { id: 'content', label: 'Content & Copy', icon: FileText },
  { id: 'schema', label: 'Schema & JSON-LD', icon: Code },
  { id: 'technical', label: 'Technical SEO', icon: Settings },
  { id: 'sitemap', label: 'Sitemap & Indexing', icon: Map },
  { id: 'redirects', label: 'Redirects & Migrations', icon: CornerDownRight },
  { id: 'social', label: 'Social & Open Graph', icon: Share2 },
  { id: 'eeat', label: 'E-E-A-T & Authority', icon: Award },
  { id: 'freshness', label: 'Content Freshness', icon: Calendar },
  { id: 'analytics', label: 'Analytics & KPIs', icon: BarChart3 },
  { id: 'resources', label: 'Tools & Resources', icon: ExternalLink },
  { id: 'local-seo', label: 'Local SEO', icon: MapPin },
  { id: 'accessibility', label: 'Accessibility', icon: Accessibility },
  { id: 'typography', label: 'Web Fonts & Typography', icon: Type },
  { id: 'checklist', label: 'SEO Checklist', icon: ClipboardCheck },
];

export const GUIDE_SECTION_IDS = guideSections.map((s) => s.id);

export const GUIDE_HOME_PATH = '/';

export const EXAMPLE_PATH = '/example';

export function guideSectionPath(sectionId: string) {
  return `/guide/${sectionId}`;
}
