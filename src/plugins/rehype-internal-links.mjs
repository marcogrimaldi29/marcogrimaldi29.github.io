/**
 * rehype plugin: rewrite absolute links to THIS site's own article pages
 * (https://marcogrimaldi29.com/cert-reviews/…, /resources/…) into root-relative
 * paths, so they resolve to the local build in dev and stay correct in
 * production. Spoke links (study-notes, deep dives — separate project sites at
 * their own /<slug>/ path prefix) are intentionally left absolute.
 */
const ORIGIN = 'https://marcogrimaldi29.com';
const LOCAL_PREFIX = /^\/(?:cert-reviews|resources)\//;

function walk(node) {
  if (node.tagName === 'a' && node.properties && typeof node.properties.href === 'string') {
    // Parse rather than prefix-match, so look-alike hosts such as
    // marcogrimaldi29.com.evil.com can never be mistaken for this site.
    let url = null;
    try {
      url = new URL(node.properties.href);
    } catch {
      // relative or malformed href: nothing to rewrite
    }
    if (url && url.origin === ORIGIN && LOCAL_PREFIX.test(url.pathname)) {
      node.properties.href = url.pathname + url.search + url.hash;
    }
  }
  if (node.children) for (const child of node.children) walk(child);
}

export default function rehypeInternalLinks() {
  return (tree) => walk(tree);
}
