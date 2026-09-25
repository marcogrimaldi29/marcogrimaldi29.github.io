// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkKramdownIal from './src/plugins/remark-kramdown-ial.mjs';
import rehypeInternalLinks from './src/plugins/rehype-internal-links.mjs';
import rehypeExternalLinks from './src/plugins/rehype-external-links.mjs';
import { spokeSitemapUrls } from './src/data/spokes.ts';

// Canonical production origin. Set in Settings -> Pages (GitHub ignores
// public/CNAME for custom Actions workflows); this constant is what every
// canonical URL, hreflang and sitemap entry is built from.
const SITE = 'https://marcogrimaldi29.com';

// Locale set — English is the default and stays UNPREFIXED so existing
// URLs (e.g. /cv/) never break. IT/ES/DE are served under /it, /es, /de.
const DEFAULT_LOCALE = 'en';
const LOCALES = ['en', 'it', 'es', 'de'];

// Articles are nested under their section landing (/cert-reviews/, /resources/).
// The old flat permalinks were live + indexed in production, so 301-style
// redirects (meta-refresh pages in the static build) preserve inbound links and
// SEO. Only the English flat URLs were ever public — the locale-prefixed URLs
// (/it/…) are new in this Astro build, so they need no redirect. Study-notes /
// deep-dive spokes are separate repos and redirect from within their own builds.
const NESTED_ARTICLES = {
  'cert-reviews': [
    'google-automation-python',
    'google-data-analytics',
    'google-project-management',
    'google-it-support',
    'microsoft-ms-700',
    'microsoft-dp-900',
    'microsoft-ai-900',
    'microsoft-az-900',
    'microsoft-pl-900',
    'microsoft-sc-900',
  ],
  resources: [
    'resources-ai',
    'resources-microsoft',
    'resources-german',
    'resources-github-jekyll-markdown',
  ],
};
const redirects = Object.fromEntries(
  Object.entries(NESTED_ARTICLES).flatMap(([section, slugs]) =>
    slugs.map((slug) => [`/${slug}/`, `/${section}/${slug}/`]),
  ),
);

export default defineConfig({
  site: SITE,
  // Match the legacy Jekyll permalink style (/cv/, /study-notes/, …).
  trailingSlash: 'always',

  // Old flat article URLs → new section-nested URLs (see NESTED_ARTICLES above).
  redirects,

  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: {
      // English has no /en prefix → preserves current public URLs.
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
    // Note: per-page content fallback (it/es/de → en) is handled in app code
    // (useTranslations + collection lookup) and wired fully in Phase 6.
  },

  markdown: {
    // Disabled so kramdown IAL class names (e.g. `{: .notice--info}`) keep their
    // `--` instead of being turned into a Unicode dash (which broke `.notice--*`).
    smartypants: false,
    remarkPlugins: [remarkKramdownIal],
    rehypePlugins: [rehypeInternalLinks, rehypeExternalLinks],
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: { en: 'en', it: 'it', es: 'es', de: 'de' },
      },
      // Site search is a thin, JS-driven page with nothing to index — it also
      // carries `noindex`, and a URL that is both noindex AND in the sitemap is
      // an error in Search Console. Keep the two consistent.
      filter: (page) => !/\/search\/$/.test(page),
      // The spokes are separate GitHub Pages repos served under this domain, so
      // their sitemaps can't be generated here — they're referenced instead, in
      // the same index a crawler already fetches (see spokes.ts).
      customSitemaps: spokeSitemapUrls(SITE),
    }),
  ],
});
