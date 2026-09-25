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
    const href = node.properties.href;
    if (href.startsWith(ORIGIN)) {
      const path = href.slice(ORIGIN.length) || '/';
      if (LOCAL_PREFIX.test(path)) node.properties.href = path;
    }
  }
  if (node.children) for (const child of node.children) walk(child);
}

export default function rehypeInternalLinks() {
  return (tree) => walk(tree);
}
