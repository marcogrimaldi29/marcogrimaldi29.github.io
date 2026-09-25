/**
 * Generate the CareerMap land paths from Natural Earth 50m land (public domain):
 *
 *  - `landPath`   — the mainland Western/Central Europe coastline, clipped to the
 *    CareerMap bbox (lon −12…18, lat 34…54) and projected through the SAME
 *    equirectangular transform as src/data/cv-map.ts, so it aligns with the city
 *    nodes. Used as the dotted-map clip path.
 *  - `canaryPath` — the Canary Islands, fitted into a small inset box in the
 *    lower-left of the same viewBox (they're ~1000 km off the mainland bbox, so
 *    they get a relocated inset like the About-page LocationMap). `canaryMark`
 *    is Gran Canaria's spot for the "based here" pin; `canaryFrame` is the panel.
 *
 * Re-run after changing the bbox/viewBox/inset:
 *   1) download the source (URL below) to scripts/.cache/ne_50m_land.geojson
 *   2) node scripts/generate-map-land.mjs
 *
 * Source: https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_land.geojson
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const gj = JSON.parse(readFileSync(resolve(root, 'scripts/.cache/ne_50m_land.geojson'), 'utf8'));

const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

// Sutherland–Hodgman clip of a ring against one bbox edge (in lon/lat).
function clipEdge(poly, e) {
  const out = [];
  const n = poly.length;
  for (let i = 0; i < n; i++) {
    const cur = poly[i];
    const prev = poly[(i + n - 1) % n];
    const ci = e.inside(cur);
    const pi = e.inside(prev);
    if (ci) {
      if (!pi) out.push(lerp(prev, cur, e.t(prev, cur)));
      out.push(cur);
    } else if (pi) {
      out.push(lerp(prev, cur, e.t(prev, cur)));
    }
  }
  return out;
}

/** Build one combined SVG path for the land inside `geo` (lon/lat bbox),
 *  projected with `proj`, simplified to `tol` px, dropping rings under `areaMin`. */
function buildRegion(geo, proj, tol, areaMin) {
  const edges = [
    { inside: (p) => p[0] >= geo.lonMin, t: (a, b) => (geo.lonMin - a[0]) / (b[0] - a[0]) },
    { inside: (p) => p[0] <= geo.lonMax, t: (a, b) => (geo.lonMax - a[0]) / (b[0] - a[0]) },
    { inside: (p) => p[1] >= geo.latMin, t: (a, b) => (geo.latMin - a[1]) / (b[1] - a[1]) },
    { inside: (p) => p[1] <= geo.latMax, t: (a, b) => (geo.latMax - a[1]) / (b[1] - a[1]) },
  ];
  const clip = (poly) => {
    let p = poly;
    for (const e of edges) {
      p = clipEdge(p, e);
      if (p.length === 0) return [];
    }
    return p;
  };
  const simplify = (pts) => {
    const out = [];
    let last = null;
    for (const [lon, lat] of pts) {
      const [x, y] = proj(lon, lat);
      if (!last || Math.hypot(x - last[0], y - last[1]) >= tol) {
        out.push([+x.toFixed(1), +y.toFixed(1)]);
        last = [x, y];
      }
    }
    return out;
  };

  const rings = [];
  for (const f of gj.features) {
    const g = f.geometry;
    if (!g) continue;
    const polys =
      g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
    for (const poly of polys) {
      for (const ring of poly) {
        let minx = 1e9,
          maxx = -1e9,
          miny = 1e9,
          maxy = -1e9;
        for (const [lon, lat] of ring) {
          if (lon < minx) minx = lon;
          if (lon > maxx) maxx = lon;
          if (lat < miny) miny = lat;
          if (lat > maxy) maxy = lat;
        }
        if (maxx < geo.lonMin || minx > geo.lonMax || maxy < geo.latMin || miny > geo.latMax)
          continue;
        const clipped = clip(ring);
        if (clipped.length < 3) continue;
        const sp = simplify(clipped);
        if (sp.length < 3) continue;
        let area = 0;
        for (let i = 0; i < sp.length; i++) {
          const a = sp[i];
          const b = sp[(i + 1) % sp.length];
          area += a[0] * b[1] - b[0] * a[1];
        }
        if (Math.abs(area / 2) < areaMin) continue;
        rings.push(sp);
      }
    }
  }
  return rings.map((r) => 'M' + r.map((p) => p.join(' ')).join('L') + 'Z').join('');
}

// ── Mainland (matches src/data/cv-map.ts) ──────────────────────
const MAP = { lonMin: -12, lonMax: 18, latMin: 34, latMax: 54, w: 760, h: 460 };
const project = (lon, lat) => [
  ((lon - MAP.lonMin) / (MAP.lonMax - MAP.lonMin)) * MAP.w,
  ((MAP.latMax - lat) / (MAP.latMax - MAP.latMin)) * MAP.h,
];
const landPath = buildRegion(MAP, project, 1.6, 4);

// ── Canary Islands inset (relocated panel, lower-left of the board) ──
const CAN = { lonMin: -18.25, lonMax: -13.3, latMin: 27.55, latMax: 29.5 };
const canaryFrame = { x: 8, y: 8, w: 190, h: 142 }; // the panel (top-left, clear of nodes)
const INSET = { x: 16, y: 34, w: 172, h: 100 }; // where the islands are fitted
const latMid = (CAN.latMin + CAN.latMax) / 2;
const lonScale = Math.cos((latMid * Math.PI) / 180); // equirectangular x-correction
const geoW = (CAN.lonMax - CAN.lonMin) * lonScale;
const geoH = CAN.latMax - CAN.latMin;
const s = Math.min(INSET.w / geoW, INSET.h / geoH); // uniform fit
const ox = INSET.x + (INSET.w - geoW * s) / 2;
const oy = INSET.y + (INSET.h - geoH * s) / 2;
const projCan = (lon, lat) => [ox + (lon - CAN.lonMin) * lonScale * s, oy + (CAN.latMax - lat) * s];
const canaryPath = buildRegion(CAN, projCan, 0.5, 0.4);
const [gcx, gcy] = projCan(-15.59, 28.0); // Gran Canaria
const canaryMark = { x: +gcx.toFixed(1), y: +gcy.toFixed(1) };

writeFileSync(
  resolve(root, 'src/data/cv-map-land.ts'),
  `/**\n * Auto-generated by scripts/generate-map-land.mjs from Natural Earth 50m land\n * (public domain), projected to the CareerMap 760x460 viewBox. Mainland is\n * clipped to lon -12..18 / lat 34..54; the Canary Islands are fitted into the\n * lower-left inset panel. Do not edit by hand — re-run the script.\n */\nexport const landPath =\n  '${landPath}';\n\nexport const canaryPath =\n  '${canaryPath}';\n\nexport const canaryFrame = ${JSON.stringify(canaryFrame)};\nexport const canaryMark = ${JSON.stringify(canaryMark)};\n`,
);
console.log(
  `land: ${landPath.length} chars · canary: ${canaryPath.length} chars · mark ${canaryMark.x},${canaryMark.y}`,
);
