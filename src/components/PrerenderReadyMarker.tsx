import { useEffect } from 'react';

/**
 * Sets `window.__PRERENDER_READY__` when `selector` matches an element in the document,
 * so static prerender (Playwright / Netlify) can wait for lazy route UI before capturing HTML.
 */
export default function PrerenderReadyMarker({ selector }: { selector: string }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    window.__PRERENDER_READY__ = false;

    let cancelled = false;
    let raf = 0;
    let frames = 0;
    const maxFrames = 7200;

    const poll = () => {
      if (cancelled) return;
      try {
        if (document.querySelector(selector)) {
          window.__PRERENDER_READY__ = true;
          return;
        }
      } catch {
        /* invalid selector */
      }
      frames += 1;
      if (frames > maxFrames) {
        console.warn(`[PrerenderReadyMarker] Gave up waiting for "${selector}"`);
        return;
      }
      raf = requestAnimationFrame(poll);
    };

    raf = requestAnimationFrame(poll);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.__PRERENDER_READY__ = false;
    };
  }, [selector]);

  return null;
}
