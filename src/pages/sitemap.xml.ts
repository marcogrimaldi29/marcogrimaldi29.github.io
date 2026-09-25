import type { APIRoute } from 'astro';
import { spokeSitemapUrls } from '@data/spokes';

/**
 * Legacy `/sitemap.xml` — kept alive for the switch from the Jekyll site.
 *
 * The Jekyll build served its sitemap index at `/sitemap.xml`; that URL is
 * what the old robots.txt advertised and what is registered in Google Search
 * Console, so letting it 404 would break an already-crawled entry point.
 * `@astrojs/sitemap` names its own index `sitemap-index.xml`, so this route
 * mirrors it under the old name.
 *
 * It lists the hub's generated `sitemap-0.xml` (NOT `sitemap-index.xml` — the
 * protocol forbids a sitemap index pointing at another index) plus every spoke
 * sitemap. `sitemap-0.xml` is the only chunk @astrojs/sitemap emits until the
 * site passes its 45,000-URL `entryLimit`; we are at ~100.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://marcogrimaldi29.com')).origin;
  const sitemaps = [`${origin}/sitemap-0.xml`, ...spokeSitemapUrls(origin)];

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemaps.map((loc) => `  <sitemap><loc>${loc}</loc></sitemap>`),
    '</sitemapindex>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
