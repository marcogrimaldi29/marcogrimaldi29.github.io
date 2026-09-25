import type { APIRoute } from 'astro';
import { spokeSitemapUrls } from '@data/spokes';

/**
 * Generated robots.txt — the hub's own sitemap is produced by @astrojs/sitemap
 * (sitemap-index.xml); spoke sitemaps are derived from the single spokes.ts
 * list. Replaces the hand-maintained robots.txt + sitemap-main.xml (audit
 * SC-1/SC-2): adding a spoke is now a one-line data change.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://marcogrimaldi29.com')).origin;
  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${origin}/sitemap-index.xml`,
    ...spokeSitemapUrls(origin).map((u) => `Sitemap: ${u}`),
    '',
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
