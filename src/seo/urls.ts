/**
 * Production canonicals and og:url must use your real origin.
 * Set `VITE_SITE_URL` in Netlify (Site settings → Environment variables), e.g. https://yoursite.netlify.app
 * so prerendered HTML is not stuck on http://127.0.0.1.
 */
export function getSiteOrigin(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, '');
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin;
  return '';
}

export function absoluteUrl(pathname: string): string {
  const origin = getSiteOrigin();
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!origin) return path;
  return `${origin}${path}`;
}
