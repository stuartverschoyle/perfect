import { useEffect } from 'react';

function setReady(value: boolean) {
  if (typeof window === 'undefined') return;
  window.__PRERENDER_READY__ = value;
  window.prerenderReady = value;
}

/**
 * Signals prerender capture once `selector` matches an element (sync check + rAF polling).
 * Sets both `window.__PRERENDER_READY__` and `window.prerenderReady` for Netlify / Playwright compatibility.
 */
export default function PrerenderReadyMarker({ selector }: { selector: string }) {
  useEffect(() => {
    setReady(false);

    let cancelled = false;
    let raf = 0;
    let frames = 0;
    const maxFrames = 12_000;

    const query = () => {
      try {
        return document.querySelector(selector);
      } catch {
        return null;
      }
    };

    const mark = () => {
      if (cancelled) return;
      setReady(true);
    };

    if (query()) {
      mark();
      return () => {
        cancelled = true;
        setReady(false);
      };
    }

    const poll = () => {
      if (cancelled) return;
      if (query()) {
        mark();
        return;
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
      setReady(false);
    };
  }, [selector]);

  return null;
}
