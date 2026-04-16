import { guideSections } from '../guideSections';
import { SITE_NAME } from './site';

export const HOME_PAGE_TITLE = 'SEO Anatomy | Interactive Perfect SEO Web Page Guide';
export const HOME_PAGE_DESCRIPTION =
  'Interactive reference for copywriters and designers: meta tags, semantic HTML, headings, schema, Core Web Vitals, and 20+ sections with actionable SEO patterns.';

/** Unique meta descriptions per section (~150–160 chars where possible). */
const SECTION_DESCRIPTIONS: Record<string, string> = {
  'why-optimise':
    'Why search intent, UX, and measurable SEO matter—build pages that work for people first and still earn visibility in search.',
  meta: 'Title tags, meta descriptions, Open Graph, Twitter cards, canonicals, and robots meta—practical patterns with good vs poor examples.',
  slug: 'URL structure and slugs: readable paths, hierarchy, hyphens, and mistakes that confuse users and search engines.',
  structure: 'Semantic HTML: header, nav, main, article, section, aside, and footer—how landmarks help SEO and accessibility.',
  headings: 'Heading hierarchy (H1–H6): one clear H1, logical outline, snippet-friendly structure, and common outline mistakes.',
  'first-paragraph':
    'First paragraph and answer-engine optimisation (AEO): answer the query early, entities, and quotable sentences for snippets.',
  images: 'Image SEO: descriptive alt text, compression, modern formats (WebP/AVIF), dimensions, and lazy-loading without harming LCP.',
  links: 'Internal links, anchor text, CTAs, and external links—how linking shapes crawl paths, trust, and conversions.',
  content: 'On-page copy: E-E-A-T signals, readability, keyword use without stuffing, and content that matches intent.',
  schema: 'Schema.org and JSON-LD: Article, FAQ, Organization—valid markup, testing in Rich Results, and matching visible content.',
  technical: 'Technical SEO: crawling, indexation, HTTPS, Core Web Vitals, structured data basics, and Search Console hygiene.',
  sitemap: 'XML sitemaps and indexing: what to include, priorities, lastmod, and how sitemaps complement internal linking.',
  redirects: 'Redirects and migrations: 301 vs 302, chains, preserving equity, and avoiding soft 404s during replatforms.',
  social: 'Social metadata: Open Graph and Twitter/X tags for link previews—images, titles, and platform-specific tips.',
  eeat: 'E-E-A-T and authority: author bios, bylines, credentials, reviews, and trust signals for competitive queries.',
  freshness: 'Content freshness: visible dates, meaningful updates, stale content risks, and aligning copy with dateModified.',
  analytics: 'SEO KPIs: Search Console, analytics, rankings, and tying technical fixes to business outcomes.',
  resources: 'Curated SEO tools and references: validators, testing utilities, and official docs worth bookmarking.',
  'local-seo': 'Local SEO basics: NAP consistency, Google Business Profile, local landing pages, and local schema where relevant.',
  accessibility: 'Accessibility and SEO overlap: skip links, focus order, contrast, ARIA, and inclusive patterns that help everyone.',
  typography: 'Web fonts and typography: performance, FOIT/FOUT, variable fonts, and readable type scales for long-form content.',
  checklist: 'Interactive SEO checklist: pre-publish checks for titles, meta, headings, images, schema, and technical health.',
};

export function getGuidePageMeta(sectionId: string | undefined): {
  title: string;
  description: string;
  path: string;
} {
  if (!sectionId) {
    return {
      title: HOME_PAGE_TITLE,
      description: HOME_PAGE_DESCRIPTION,
      path: '/',
    };
  }

  const section = guideSections.find((s) => s.id === sectionId);
  const label = section?.label ?? sectionId;
  const description =
    SECTION_DESCRIPTIONS[sectionId] ??
    `${label}: chapter in the ${SITE_NAME} interactive guide—patterns, examples, and tips for a stronger web page.`;

  return {
    title: `${label} | ${SITE_NAME}`,
    description,
    path: `/guide/${sectionId}`,
  };
}
