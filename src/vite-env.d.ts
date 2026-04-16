/// <reference types="vite/client" />

interface Window {
  /** Set when route-specific content is in the DOM for prerender capture. */
  __PRERENDER_READY__?: boolean;
}

interface ImportMetaEnv {
  /** Public site origin for canonicals and og:url in prerender (no trailing slash). */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
