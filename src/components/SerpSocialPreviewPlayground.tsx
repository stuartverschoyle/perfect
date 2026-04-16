import { useEffect, useId, useMemo, useState } from 'react';
import { Share2, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const GOOD = {
  title: 'How to Build the Perfect SEO Web Page | SEO Guide 2026',
  url: 'https://example.com/seo-guide/perfect-web-page',
  description:
    'Learn every element of a perfectly optimized web page for SEO. From meta tags and heading structure to image optimization and schema markup — your complete guide.',
  ogImage: '/laptop-and-computer.webp',
};

const POOR = {
  title: 'Home | SEO SEO SEO Best SEO Web Page Perfect SEO Guide 2026 Free Checklist',
  url: 'https://example.com/',
  description: 'Welcome to our website. We offer great services. Click here to learn more.',
  ogImage: '',
};

type ExampleMode = 'good' | 'poor' | 'custom';

type CheckStatus = 'good' | 'warn' | 'bad';

type QualityCheck = {
  id: string;
  label: string;
  status: CheckStatus;
  hint: string;
};

type QualityVerdict = 'good' | 'mixed' | 'poor';

function analyzeMetaQuality(title: string, url: string, description: string, ogImageUrl: string): { verdict: QualityVerdict; checks: QualityCheck[] } {
  const checks: QualityCheck[] = [];
  const t = title.trim();
  const d = description.trim();
  const img = ogImageUrl.trim();

  const titleLen = t.length;
  if (titleLen === 0) {
    checks.push({ id: 't-empty', label: 'Title', status: 'bad', hint: 'Add a title — search engines and social cards need one.' });
  } else if (titleLen < 28) {
    checks.push({
      id: 't-short',
      label: 'Title length',
      status: 'warn',
      hint: 'Very short titles often under-describe the page; most guides aim for about 30–60 characters.',
    });
  } else if (titleLen > 62) {
    checks.push({
      id: 't-long',
      label: 'Title length',
      status: 'warn',
      hint: 'Google frequently truncates past ~60 characters — put keywords and intent at the start.',
    });
  } else {
    checks.push({
      id: 't-len',
      label: 'Title length',
      status: 'good',
      hint: 'Length is in a typical range for visible SERP titles.',
    });
  }

  if (titleLen > 0) {
    const words = t.toLowerCase().match(/\b[a-zà-ÿ]{2,}\b/g) || [];
    const counts = new Map<string, number>();
    for (const w of words) counts.set(w, (counts.get(w) || 0) + 1);
    const overused = [...counts.entries()].filter(([, c]) => c >= 3).map(([w]) => w);
    if (overused.length > 0) {
      checks.push({
        id: 't-repeat',
        label: 'Title wording',
        status: 'bad',
        hint: `Repeating “${overused[0]}” many times reads as keyword stuffing and can hurt trust.`,
      });
    }
  }

  if (/^(home|welcome)\s*(\||\s*[-–])/i.test(t) || /^home\s*$/i.test(t)) {
    checks.push({
      id: 't-home',
      label: 'Title lead-in',
      status: 'warn',
      hint: 'Starting with “Home” or “Welcome” wastes space; open with the topic people searched for.',
    });
  }

  try {
    const normalized = url.trim().startsWith('http') ? url.trim() : `https://${url.trim()}`;
    const u = new URL(normalized);
    const path = u.pathname.replace(/\/$/, '') || '/';
    if (path === '/' || path === '') {
      checks.push({
        id: 'u-root',
        label: 'URL path',
        status: 'warn',
        hint: 'Homepage URLs are fine, but a descriptive path (e.g. /guides/seo) often improves clarity in results.',
      });
    } else {
      checks.push({
        id: 'u-path',
        label: 'URL path',
        status: 'good',
        hint: 'A specific path signals a dedicated page and matches user expectations.',
      });
    }
    if (!/^https:/i.test(u.protocol)) {
      checks.push({
        id: 'u-https',
        label: 'HTTPS',
        status: 'warn',
        hint: 'Prefer https:// for security and trust signals.',
      });
    }
  } catch {
    checks.push({
      id: 'u-parse',
      label: 'URL',
      status: 'bad',
      hint: 'This URL could not be parsed — check for typos or a missing domain.',
    });
  }

  const descLen = d.length;
  if (descLen === 0) {
    checks.push({
      id: 'd-empty',
      label: 'Meta description',
      status: 'bad',
      hint: 'Empty descriptions leave Google to invent snippets; write a concise summary with a clear benefit.',
    });
  } else if (descLen < 90) {
    checks.push({
      id: 'd-short',
      label: 'Meta description length',
      status: 'warn',
      hint: 'Short descriptions may miss secondary keywords; many pages target roughly 120–155 characters.',
    });
  } else if (descLen > 165) {
    checks.push({
      id: 'd-long',
      label: 'Meta description length',
      status: 'warn',
      hint: 'Long text is often cut off in SERPs — tighten and lead with the value proposition.',
    });
  } else {
    checks.push({
      id: 'd-len',
      label: 'Meta description length',
      status: 'good',
      hint: 'Length is in a common range for snippet display.',
    });
  }

  if (descLen > 0) {
    const lower = d.toLowerCase();
    if (/\bclick here\b/i.test(lower)) {
      checks.push({
        id: 'd-click',
        label: 'Description wording',
        status: 'bad',
        hint: '“Click here” is vague for users and search; describe the destination instead.',
      });
    }
    if (/^welcome to (our |my )?website\.?(\s|$)/i.test(d) || /^we offer great services\.?$/i.test(d)) {
      checks.push({
        id: 'd-generic',
        label: 'Description specificity',
        status: 'bad',
        hint: 'Generic filler doesn’t answer search intent — say what the page covers and who it’s for.',
      });
    }
    if (/\blearn more\.?\s*$/i.test(d) && descLen < 110) {
      checks.push({
        id: 'd-cta',
        label: 'Call to action',
        status: 'warn',
        hint: 'Ending only with “learn more” on a thin description feels boilerplate; add concrete detail earlier.',
      });
    }
  }

  if (img.length === 0) {
    checks.push({
      id: 'i-empty',
      label: 'og:image',
      status: 'warn',
      hint: 'Social networks fall back to guessing a thumbnail or show a blank card — set og:image (often ~1200×630) for stronger shares.',
    });
  } else if (img.startsWith('/')) {
    checks.push({
      id: 'i-path',
      label: 'og:image URL',
      status: 'good',
      hint: 'Root-relative path loads in this preview; in production meta tags, use a full https:// URL so social crawlers resolve it.',
    });
  } else {
    try {
      const normalized = img.startsWith('http') ? img : `https://${img}`;
      const iu = new URL(normalized);
      if (!/^https:/i.test(iu.protocol)) {
        checks.push({
          id: 'i-http',
          label: 'og:image URL',
          status: 'warn',
          hint: 'Use https:// for og:image so platforms don’t block or downgrade mixed-content previews.',
        });
      } else {
        checks.push({
          id: 'i-parse',
          label: 'og:image URL',
          status: 'good',
          hint: 'URL is well-formed; after deploy, validate the image loads and isn’t blocked by hotlink rules.',
        });
      }
    } catch {
      checks.push({
        id: 'i-bad',
        label: 'og:image URL',
        status: 'bad',
        hint: 'Could not parse this as a URL — check the address or add https://.',
      });
    }
  }

  const hasBad = checks.some((c) => c.status === 'bad');
  const hasWarn = checks.some((c) => c.status === 'warn');
  let verdict: QualityVerdict = 'good';
  if (hasBad) verdict = 'poor';
  else if (hasWarn) verdict = 'mixed';

  return { verdict, checks };
}

function hostnameFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'example.com';
  }
}

export default function SerpSocialPreviewPlayground() {
  const idPrefix = useId();
  const [mode, setMode] = useState<ExampleMode>('good');
  const [title, setTitle] = useState(GOOD.title);
  const [url, setUrl] = useState(GOOD.url);
  const [description, setDescription] = useState(GOOD.description);
  const [ogImageUrl, setOgImageUrl] = useState(GOOD.ogImage);
  const [richResult, setRichResult] = useState(false);
  const [ogImageError, setOgImageError] = useState(false);

  const applyMode = (m: ExampleMode) => {
    setMode(m);
    if (m === 'good') {
      setTitle(GOOD.title);
      setUrl(GOOD.url);
      setDescription(GOOD.description);
      setOgImageUrl(GOOD.ogImage);
    } else if (m === 'poor') {
      setTitle(POOR.title);
      setUrl(POOR.url);
      setDescription(POOR.description);
      setOgImageUrl(POOR.ogImage);
    }
  };

  useEffect(() => {
    setOgImageError(false);
  }, [ogImageUrl]);

  const host = useMemo(() => hostnameFromUrl(url), [url]);
  const titleLen = title.length;
  const descLen = description.length;

  const quality = useMemo(() => analyzeMetaQuality(title, url, description, ogImageUrl), [title, url, description, ogImageUrl]);

  const ogImageDisplaySrc = useMemo(() => {
    const u = ogImageUrl.trim();
    if (!u) return '';
    if (u.startsWith('/')) return u;
    if (u.startsWith('http')) return u;
    return `https://${u}`;
  }, [ogImageUrl]);

  const verdictStyles: Record<QualityVerdict, { bar: string; badge: string; label: string; lead: string }> = {
    good: {
      bar: 'border-emerald-200 dark:border-emerald-500/40 bg-emerald-50/90 dark:bg-emerald-950/30',
      badge: 'bg-emerald-600 text-white',
      label: 'Looks strong',
      lead: 'This combination is closer to what we’d call a solid baseline for SERPs and social previews.',
    },
    mixed: {
      bar: 'border-amber-200 dark:border-amber-500/40 bg-amber-50/90 dark:bg-amber-950/25',
      badge: 'bg-amber-600 text-white',
      label: 'Needs improvement',
      lead: 'No dealbreakers detected in every field, but tightening the items below would help click-through and clarity.',
    },
    poor: {
      bar: 'border-rose-200 dark:border-rose-500/40 bg-rose-50/90 dark:bg-rose-950/25',
      badge: 'bg-rose-600 text-white',
      label: 'Likely weak for SEO',
      lead: 'At least one issue below often correlates with weaker snippets or lower trust — revise and re-check.',
    },
  };

  const statusIcon = (s: CheckStatus) => {
    if (s === 'good') return <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 shrink-0" size={16} aria-hidden />;
    if (s === 'warn') return <AlertTriangle className="text-amber-600 dark:text-amber-400 shrink-0" size={16} aria-hidden />;
    return <XCircle className="text-rose-600 dark:text-rose-400 shrink-0" size={16} aria-hidden />;
  };

  return (
    <div className="min-w-0 space-y-5 rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50/80 to-white p-5 dark:border-sky-500/30 dark:from-sky-950/20 dark:to-slate-900/40">
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Interactive SERP & social preview</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
          Switch between good and poor examples, then edit fields to see how title, URL, description, and <code className="text-xs font-mono text-sky-700 dark:text-sky-300">og:image</code> change the SERP and social card. Toggle a mock Article rich result to visualize schema impact.
        </p>
      </div>

      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">Example</span>
        {(['good', 'poor', 'custom'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => applyMode(m)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
              mode === m
                ? 'bg-sky-600 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {m === 'good' ? 'Good' : m === 'poor' ? 'Poor' : 'Custom'}
          </button>
        ))}
        <label className="ml-0 inline-flex w-full cursor-pointer items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 sm:ml-auto sm:w-auto">
          <input
            type="checkbox"
            checked={richResult}
            onChange={(e) => setRichResult(e.target.checked)}
            className="rounded border-slate-400 text-sky-600 focus:ring-sky-500"
          />
          Mock Article rich result
        </label>
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <div className="min-w-0 space-y-3">
          <div>
            <label htmlFor={`${idPrefix}-title`} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Title <span className="font-mono text-slate-500 font-normal">({titleLen} chars)</span>
            </label>
            <input
              id={`${idPrefix}-title`}
              type="text"
              value={title}
              onChange={(e) => {
                setMode('custom');
                setTitle(e.target.value);
              }}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-url`} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              URL
            </label>
            <input
              id={`${idPrefix}-url`}
              type="url"
              value={url}
              onChange={(e) => {
                setMode('custom');
                setUrl(e.target.value);
              }}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm font-mono text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-desc`} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Meta description <span className="font-mono text-slate-500 font-normal">({descLen} chars)</span>
            </label>
            <textarea
              id={`${idPrefix}-desc`}
              rows={4}
              value={description}
              onChange={(e) => {
                setMode('custom');
                setDescription(e.target.value);
              }}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-ogimg`} className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Open Graph image URL <span className="font-normal text-slate-500">(og:image)</span>
            </label>
            <input
              id={`${idPrefix}-ogimg`}
              type="text"
              value={ogImageUrl}
              onChange={(e) => {
                setMode('custom');
                setOgImageUrl(e.target.value);
              }}
              placeholder="https://example.com/og/seo-guide-1200x630.jpg"
              className="w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm font-mono text-slate-900 dark:text-white"
            />
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Typical share image ratio is about 1.91∶1 (e.g. 1200×630). Paste any public image URL to preview — some hosts block hotlinking.
            </p>
          </div>

          <div
            className={`rounded-xl border p-4 space-y-3 ${verdictStyles[quality.verdict].bar}`}
            role="region"
            aria-label="Quality feedback for your title, URL, description, and social image"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${verdictStyles[quality.verdict].badge}`}>
                {verdictStyles[quality.verdict].label}
              </span>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Live feedback on your test data</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-snug">{verdictStyles[quality.verdict].lead}</p>
            <ul className="space-y-2.5">
              {quality.checks.map((c) => (
                <li key={c.id} className="flex gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {statusIcon(c.status)}
                  <span>
                    <span className="font-semibold text-slate-900 dark:text-white">{c.label}: </span>
                    {c.hint}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
              Google search (mock)
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-950 p-4 shadow-sm">
              {richResult && (
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 mb-2" aria-hidden="true">
                  <span className="text-amber-500">★★★★★</span>
                  <span>4.8 · Article · Updated Apr 2026</span>
                </div>
              )}
              <div className="text-base text-sky-700 dark:text-sky-400 leading-snug line-clamp-2">{title || '(no title)'}</div>
              <div className="mt-1 break-all font-mono text-xs text-emerald-700 dark:text-emerald-400">{url || 'https://'}</div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 line-clamp-3">{description || '(no description)'}</p>
              {richResult && (
                <p className="text-[11px] text-slate-500 dark:text-slate-500 mt-2 italic">
                  Rich snippets are not guaranteed; valid Article JSON-LD + quality signals help eligibility.
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
              Social share (Open Graph mock)
            </div>
            <div className="border border-slate-200 dark:border-slate-600 rounded-lg overflow-hidden max-w-md bg-slate-50 dark:bg-slate-900">
              <div className="relative aspect-[1200/630] max-h-52 w-full bg-slate-200 dark:bg-slate-700">
                {ogImageUrl.trim() && !ogImageError ? (
                  <img
                    src={ogImageDisplaySrc}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={() => setOgImageError(true)}
                  />
                ) : null}
                {(!ogImageUrl.trim() || ogImageError) && (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600 dark:text-slate-400 text-xs px-3 text-center gap-2">
                    <Share2 size={22} className="shrink-0 opacity-60" aria-hidden="true" />
                    <span>
                      {ogImageError
                        ? 'Image failed to load — try another URL or check CORS / hotlink rules.'
                        : 'No og:image — paste a URL on the left to preview the share image.'}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">{host}</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">{title || '(og:title)'}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">{description || '(og:description)'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
