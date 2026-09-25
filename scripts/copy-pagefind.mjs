/**
 * Copy the built Pagefind index (dist/pagefind) into public/pagefind so the
 * Astro dev server can serve /pagefind/* (search works in `astro dev`, not just
 * in the built site). public/pagefind is git-ignored; rerun after content
 * changes via `npm run search:index`.
 */
import { cpSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, 'dist/pagefind');
const dest = resolve(root, 'public/pagefind');

if (!existsSync(src)) {
  console.error('dist/pagefind not found — run `npm run build` first.');
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
console.log('Copied dist/pagefind → public/pagefind (dev search index ready)');
