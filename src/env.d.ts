/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** Umami analytics website ID, injected at build from a CI secret (no more sed). */
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
