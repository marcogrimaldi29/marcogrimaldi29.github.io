/**
 * Generate raster favicons + the social share image from the brand mark.
 *
 * Single source of truth: public/site-mark.svg — the main logo mark (sunrise +
 * horizon line, no initials). public/favicon.svg is kept identical so modern
 * browsers show the same mark in the tab. From site-mark.svg we rasterise:
 *   - favicon.ico       (16 / 32 / 48 — the classic multi-size icon)
 *   - apple-touch-icon  (180px)
 *   - social-card.png   (1200x630 — the og:image / twitter:image)
 *
 * The mark reads cleanly at every size without text, so there's no separate
 * simplified fallback anymore.
 *
 * Run: npm run favicons  (after editing public/site-mark.svg)
 */
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const markSvg = readFileSync(resolve(root, 'public/site-mark.svg'));

const png = (svg, size) =>
  sharp(svg, { density: 512 }).resize(size, size, { fit: 'contain' }).png().toBuffer();

writeFileSync(resolve(root, 'public/apple-touch-icon.png'), await png(markSvg, 180));

const ico = await pngToIco([
  await png(markSvg, 16),
  await png(markSvg, 32),
  await png(markSvg, 48),
]);
writeFileSync(resolve(root, 'public/favicon.ico'), ico);

/**
 * Social share card — 1200x630 is the size Open Graph consumers (LinkedIn,
 * Slack, X, …) crop to; a square favicon gets letterboxed or rejected. The mark
 * sits on the site's dark canvas (--bg in tokens.css) so the card matches the
 * site it links to. Deliberately text-free: no font dependency at build time.
 */
const CARD = { w: 1200, h: 630, mark: 320, bg: { r: 0x0d, g: 0x11, b: 0x17, alpha: 1 } };
const socialCard = await sharp({
  create: { width: CARD.w, height: CARD.h, channels: 4, background: CARD.bg },
})
  .composite([{ input: await png(markSvg, CARD.mark), gravity: 'centre' }])
  .png()
  .toBuffer();
writeFileSync(resolve(root, 'public/assets/images/social-card.png'), socialCard);

console.log(
  'Generated public/favicon.ico, public/apple-touch-icon.png and ' +
    'public/assets/images/social-card.png from public/site-mark.svg',
);
