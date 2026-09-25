/**
 * remark plugin: translate kramdown block IAL syntax — a trailing
 * `{: .notice--info}` attached to a block — into a class on that block.
 * Lets legacy Jekyll Markdown render unchanged (e.g. callout notices).
 *
 * Only class tokens (`.name`) are applied; ids/key=value are ignored.
 * (SmartyPants is disabled in astro.config so `--` in class names is preserved.)
 */
const IAL = /\n?\{:\s*([^}]+)\}\s*$/;

function applyClasses(node, raw) {
  const classes = raw
    .split(/\s+/)
    .filter((t) => t.startsWith('.'))
    .map((t) => t.slice(1));
  if (classes.length === 0) return;
  node.data ??= {};
  node.data.hProperties ??= {};
  const existing = node.data.hProperties.className ?? [];
  node.data.hProperties.className = [
    ...(Array.isArray(existing) ? existing : [existing]),
    ...classes,
  ];
}

function walk(node) {
  if (!node.children) return;
  for (const child of node.children) {
    walk(child);
    if (child.type === 'paragraph' && child.children?.length) {
      const last = child.children[child.children.length - 1];
      if (last.type === 'text') {
        const m = last.value.match(IAL);
        if (m) {
          last.value = last.value.slice(0, m.index).replace(/\n$/, '');
          if (last.value === '') child.children.pop();
          applyClasses(child, m[1]);
        }
      }
    }
  }
}

export default function remarkKramdownIal() {
  return (tree) => walk(tree);
}
