import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, ORG_NAME } from './site';
import { absoluteUrl } from './urls';

export interface SeoDocumentProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  /** Absolute URL or root-relative path (e.g. `/stuart-verschoyle.png`). */
  ogImage?: string;
  jsonLd?: object[];
}

function resolveOgImage(urlOrPath?: string): string {
  const raw = urlOrPath ?? DEFAULT_OG_IMAGE;
  if (raw.startsWith('http://') || raw.startsWith('https://')) return raw;
  return absoluteUrl(raw.startsWith('/') ? raw : `/${raw}`);
}

export default function SeoDocument({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  ogImage,
  jsonLd,
}: SeoDocumentProps) {
  const canonical = absoluteUrl(canonicalPath);
  const ogImg = resolveOgImage(ogImage);

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-GB" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={ORG_NAME} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_GB" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />

      {jsonLd?.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
