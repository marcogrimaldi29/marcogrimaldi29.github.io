/**
 * Spoke repositories — each is an independent GitHub Pages site deployed at a
 * path prefix under marcogrimaldi29.com. Single source of truth so robots.txt
 * and the cross-repo sitemap index can be GENERATED (fixes audit SC-1/SC-2:
 * no more hand-maintained sitemap-main.xml + robots sitemap lines).
 *
 * `translated` marks spokes that have themselves migrated to the i18n Astro
 * theme; until then the hub links to their English path regardless of locale
 * (the hub↔spoke contract documented in PLAN.md / I18N.md).
 */

export interface Spoke {
  slug: string; // path prefix, e.g. 'az-305-study-notes'
  title: string;
  translated: boolean;
}

// Each spoke is a standalone GitHub Pages project site served at /<repo-name>/
// (the path is the repo name — GitHub Pages can't nest project sites under a
// /study-notes/ segment), so these stay flat. See DESIGN.md → "Section-nested
// article URLs" for why only cert-reviews + resources (in-repo) are nested.
// This list is the ONLY place spoke sitemaps are advertised to crawlers: a
// robots.txt is honoured only at the domain root, so each spoke's own
// /<slug>/robots.txt is ignored. A spoke missing here is still crawlable via
// hub links, but loses its sitemap. Keep it in sync with the `note()`/`dive()`
// cards in landings*.ts — every spoke linked there belongs here.
export const spokes: Spoke[] = [
  { slug: 'az-305-study-notes', title: 'AZ-305 Study Notes', translated: false },
  { slug: 'az-305-data-analytics', title: 'AZ-305 Data Analytics', translated: false },
  { slug: 'az-305-compute', title: 'AZ-305 Compute', translated: false },
  { slug: 'az-305-messaging', title: 'AZ-305 Messaging', translated: false },
  { slug: 'az-305-bcdr', title: 'AZ-305 BCDR', translated: false },
  { slug: 'az-500-study-notes', title: 'AZ-500 Study Notes', translated: false },
  { slug: 'az-104-study-notes', title: 'AZ-104 Study Notes', translated: false },
  { slug: 'dp-600-study-notes', title: 'DP-600 Study Notes', translated: false },
  { slug: 'dp-700-study-notes', title: 'DP-700 Study Notes', translated: false },
  { slug: 'dp-700-study-notes-v2', title: 'DP-700 Study Notes (v2)', translated: false },
  { slug: 'az-400-study-notes', title: 'AZ-400 Study Notes', translated: false },
  { slug: 'az-400-study-notes-v2', title: 'AZ-400 Study Notes (v2)', translated: false },
  { slug: 'ai-103-study-notes', title: 'AI-103 Study Notes', translated: false },
  { slug: 'gh-300-study-notes', title: 'GH-300 Study Notes', translated: false },
  { slug: 'gh-900-study-notes', title: 'GH-900 Study Notes', translated: false },
  { slug: 'ms-102-study-notes', title: 'MS-102 Study Notes', translated: false },
  { slug: 'ms-700-study-notes', title: 'MS-700 Study Notes', translated: false },
  { slug: 'ms-721-study-notes', title: 'MS-721 Study Notes', translated: false },
  { slug: 'sc-500-study-notes', title: 'SC-500 Study Notes', translated: false },
  { slug: 'itil-4-foundation', title: 'ITIL 4 Foundation', translated: false },
  { slug: 'engage-center-notes', title: 'Engage Center Notes', translated: false },
  { slug: 'waf-cost-opt', title: 'WAF Cost Optimization', translated: false },
];

/** Absolute sitemap URLs for every spoke (used to generate the sitemap index). */
export function spokeSitemapUrls(origin = 'https://marcogrimaldi29.com'): string[] {
  return spokes.map((s) => `${origin}/${s.slug}/sitemap.xml`);
}
