import { guideSections, GUIDE_HOME_PATH, guideSectionPath } from '../guideSections';
import { EXAMPLE_PAGE_DESCRIPTION, EXAMPLE_PAGE_TITLE, EXAMPLE_CANONICAL_PATH } from './exampleMeta';
import { getGuidePageMeta, HOME_PAGE_DESCRIPTION } from './guideMeta';
import { AUTHOR_NAME, AUTHOR_PROFILE_URL, ORG_NAME, SITE_NAME_LONG } from './site';
import { absoluteUrl } from './urls';

export function buildGuideJsonLd(sectionId: string | undefined): object[] {
  const homeUrl = absoluteUrl(GUIDE_HOME_PATH);
  const pagePath = sectionId ? guideSectionPath(sectionId) : GUIDE_HOME_PATH;
  const pageUrl = absoluteUrl(pagePath);
  const { title: pageTitle, description: pageDescription } = getGuidePageMeta(sectionId);

  const website: object = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homeUrl}#website`,
    name: SITE_NAME_LONG,
    url: homeUrl,
    description: HOME_PAGE_DESCRIPTION,
    inLanguage: 'en-GB',
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/vite.svg'),
      },
    },
  };

  const webPage: object = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: { '@id': `${homeUrl}#website` },
    inLanguage: 'en-GB',
  };

  const out: object[] = [website, webPage];

  if (sectionId) {
    const label = guideSections.find((s) => s.id === sectionId)?.label ?? sectionId;
    const breadcrumb: object = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: homeUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: label,
          item: pageUrl,
        },
      ],
    };
    out.push(breadcrumb);
  }

  return out;
}

export function buildExampleJsonLd(): object[] {
  const homeUrl = absoluteUrl(GUIDE_HOME_PATH);
  const pageUrl = absoluteUrl(EXAMPLE_CANONICAL_PATH);
  const title = EXAMPLE_PAGE_TITLE;
  const description = EXAMPLE_PAGE_DESCRIPTION;

  const website: object = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homeUrl}#website`,
    name: SITE_NAME_LONG,
    url: homeUrl,
    description: HOME_PAGE_DESCRIPTION,
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/vite.svg') },
    },
  };

  const webPage: object = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { '@id': `${homeUrl}#website` },
    inLanguage: 'en-GB',
  };

  const article: object = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: title,
    description,
    url: pageUrl,
    inLanguage: 'en-GB',
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: AUTHOR_PROFILE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/vite.svg') },
    },
    datePublished: '2026-01-15',
    dateModified: '2026-04-16',
    mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
  };

  const breadcrumb: object = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: homeUrl },
      { '@type': 'ListItem', position: 2, name: 'Annotated example', item: pageUrl },
    ],
  };

  return [website, webPage, article, breadcrumb];
}
