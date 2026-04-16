/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public site origin for canonicals and og:url in prerender (no trailing slash). */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
