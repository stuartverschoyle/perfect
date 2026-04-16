/**
 * Production canonicals and og:url must use your real origin.
 * Set `VITE_SITE_URL` in Netlify (Site settings → Environment variables).
 * You may use `https://yoursite.netlify.app` or just `yoursite.netlify.app` — we default missing schemes to https.
 */
function normalizeSiteUrl(input: string): string {
  const s = input.trim().replace(/\/$/, '');
  if (!s) return '';
  if (/^https?:\/\//i.test(s)) return s;
  return `https://${s}`;
}

export function getSiteOrigin(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim();
  if (raw) return normalizeSiteUrl(raw);
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin;
  return '';
}

export function absoluteUrl(pathname: string): string {
  const origin = getSiteOrigin();
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!origin) return path;
  return `${origin}${path}`;
}
