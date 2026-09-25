/**
 * rehype plugin: open genuinely external links in a new tab with safe rel.
 * Build-time replacement for the legacy head/custom.html runtime JS (audit
 * SC-4 / PF). Same-domain links (marcogrimaldi29.com + its spoke paths) keep
 * the default same-tab behavior; in-page anchors are untouched.
 */
const INTERNAL_HOST = /(^|\.)marcogrimaldi29\.com$/i;

function isExternal(href) {
  if (!href || typeof href !== 'string') return false;
  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  try {
    const url = new URL(href, 'https://marcogrimaldi29.com');
    return url.protocol.startsWith('http') && !INTERNAL_HOST.test(url.hostname);
  } catch {
    return false;
  }
}

function walk(node) {
  if (node.tagName === 'a' && node.properties && isExternal(node.properties.href)) {
    node.properties.target = '_blank';
    node.properties.rel = ['noopener', 'noreferrer'];
  }
  if (node.children) for (const child of node.children) walk(child);
}

export default function rehypeExternalLinks() {
  return (tree) => walk(tree);
}
