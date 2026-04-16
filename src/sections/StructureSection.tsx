import { LayoutGrid as Layout } from 'lucide-react';
import InfoTooltip from '../components/InfoTooltip';
import CodeBlock from '../components/CodeBlock';
import SeoSection from '../components/SeoSection';

export default function StructureSection() {
  const elements = [
    {
      tag: '<header>',
      color: 'text-sky-500 dark:text-sky-400 bg-sky-100 dark:bg-sky-400/10 border-sky-300 dark:border-sky-400/30',
      description: 'Site-wide header with logo, navigation, and primary CTA',
      tip: {
        title: 'Header Element',
        content: [
          'Contains your logo, primary navigation, and optionally a CTA.',
          'Should be consistent across all pages for usability.',
          'Navigation links in the header help search engines discover your pages.',
          'Use <nav> inside <header> for your main navigation.',
          'Keep navigation links to 7 or fewer items for usability.',
        ],
      },
    },
    {
      tag: '<nav>',
      color: 'text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-400/10 border-teal-300 dark:border-teal-400/30',
      description: 'Primary navigation with internal links',
      tip: {
        title: 'Nav Element',
        content: [
          'Wraps your main navigation links. Helps screen readers and search engines identify navigation.',
          'Use descriptive anchor text, not "Click here". Example: "SEO Services" instead of "Learn More".',
          'A well-structured nav helps Google understand your site architecture.',
          'Use aria-label if you have multiple <nav> elements (e.g., "Main navigation", "Footer navigation").',
        ],
      },
    },
    {
      tag: '<main>',
      color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-400/10 border-emerald-300 dark:border-emerald-400/30',
      description: 'Primary content area -- only ONE per page',
      tip: {
        title: 'Main Element',
        content: [
          'There must be only ONE <main> element per page.',
          'It should contain the dominant content of the page.',
          'Helps screen readers skip directly to primary content.',
          'Do NOT include repeated content like sidebars, navigation, or footers inside <main>.',
          'Search engines give higher weight to content within <main>.',
        ],
      },
    },
    {
      tag: '<article>',
      color: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-400/10 border-amber-300 dark:border-amber-400/30',
      description: 'Self-contained content (blog post, product, news story)',
      tip: {
        title: 'Article Element',
        content: [
          'Use <article> for content that would make sense on its own if syndicated.',
          'Blog posts, news articles, product cards, and forum posts are all articles.',
          'Can be nested (e.g., blog post with comment articles).',
          'Google uses <article> to better understand content boundaries.',
          'Each <article> should have its own heading (h2 or h3).',
        ],
      },
    },
    {
      tag: '<section>',
      color: 'text-orange-400 bg-orange-400/10 border-orange-400/30',
      description: 'Thematic grouping of content with a heading',
      tip: {
        title: 'Section Element',
        content: [
          'Groups related content under a common theme.',
          'Every <section> should have a heading (h2, h3, etc.).',
          'Use <section> to break up long-form content into logical parts.',
          'Helps search engines understand content structure and topic relationships.',
          'Don\'t use <section> as a generic wrapper -- use <div> for styling-only containers.',
        ],
      },
    },
    {
      tag: '<aside>',
      color: 'text-rose-400 bg-rose-400/10 border-rose-400/30',
      description: 'Supplementary content (sidebar, related links, ads)',
      tip: {
        title: 'Aside Element',
        content: [
          'Content tangentially related to the main content.',
          'Sidebars, pull quotes, related articles, and advertising.',
          'Search engines may give less weight to content in <aside>.',
          'Don\'t put your primary content in <aside>.',
          'Great for internal linking sections like "Related Posts".',
        ],
      },
    },
    {
      tag: '<footer>',
      color: 'text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-400/10 border-slate-300 dark:border-slate-400/30',
      description: 'Site-wide footer with secondary navigation, legal, contact',
      tip: {
        title: 'Footer Element',
        content: [
          'Contains secondary navigation, copyright, legal links, and contact information.',
          'Footer links still pass PageRank but carry less weight than in-content links.',
          'Include your business address here for local SEO signals.',
          'Keep footer navigation organized and minimal.',
          'Structured data (Organization schema) can reference footer contact info.',
        ],
      },
    },
  ];

  return (
    <SeoSection id="structure" className="space-y-6">
      <div className="flex items-start gap-3">
        <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
          <Layout size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Semantic HTML Structure</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Semantic elements tell search engines and screen readers what each part of your page means, not just how it looks.</p>
        </div>
      </div>

      <div className="space-y-3">
        {elements.map((el) => (
          <div key={el.tag} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-4">
            <div className="flex items-center gap-3 flex-wrap">
              <code className={`text-sm font-mono px-2.5 py-1 rounded-lg border ${el.color}`}>{el.tag}</code>
              <span className="text-slate-600 dark:text-slate-300 text-sm">{el.description}</span>
              <InfoTooltip title={el.tip.title}>
                <ul className="space-y-2">
                  {el.tip.content.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </InfoTooltip>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 p-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Recommended Page Template</h3>
        <CodeBlock
          language="html"
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title | Brand</title>
  <meta name="description" content="..." />
  <link rel="canonical" href="https://example.com/page" />
</head>
<body>
  <header>
    <nav aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/blog">Blog</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>

  <main>
    <article>
      <h1>Primary Heading</h1>
      <p>First paragraph with key information...</p>

      <section>
        <h2>Section Topic</h2>
        <p>Content...</p>
      </section>
    </article>

    <aside>
      <h2>Related Articles</h2>
      <!-- supplementary content -->
    </aside>
  </main>

  <footer>
    <nav aria-label="Footer navigation">...</nav>
    <p>&copy; 2026 Brand Name</p>
  </footer>
</body>
</html>`}
        />
      </div>
    </SeoSection>
  );
}
