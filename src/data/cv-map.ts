/**
 * Career-map data — links CV entries to the cities where they happened and
 * carries the geographic projection used by the `CareerMap` component.
 *
 * Locale-neutral by design: it does NOT import the CV arrays. Instead it maps
 * each entry to one or more city ids BY ARRAY INDEX, mirroring the same
 * positional invariant the localized CV files already rely on (an entry's
 * translation lives at the same index in cv.ts / cv-it.ts / cv-es.ts / cv-de.ts).
 *
 * ⚠️ Index coupling: `experienceCities[i]` describes `experience[i]` (and its
 * localized twins), `educationCities[i]` describes `education[i]`. If you add,
 * remove or reorder a CV entry in cv.ts, update the matching array here too —
 * CareerMap.astro asserts the lengths match and the build fails loudly otherwise.
 */
import type { Locale } from '@i18n/ui';

/** Equirectangular bbox + canvas for the Western/Central Europe view. */
export const MAP = { lonMin: -12, lonMax: 18, latMin: 34, latMax: 54, w: 760, h: 460 } as const;

/** Project geographic (lon, lat) → SVG (x, y) in the MAP viewBox (plate carrée). */
export const project = (lon: number, lat: number) => ({
  x: +(((lon - MAP.lonMin) / (MAP.lonMax - MAP.lonMin)) * MAP.w).toFixed(1),
  y: +(((MAP.latMax - lat) / (MAP.latMax - MAP.latMin)) * MAP.h).toFixed(1),
});

export type CityId = 'coruna' | 'madrid' | 'seville' | 'rome' | 'heidelberg' | 'mainz';

export interface CityMeta {
  lat: number;
  lon: number;
}

export const cities: Record<CityId, CityMeta> = {
  coruna: { lat: 43.36, lon: -8.41 },
  madrid: { lat: 40.42, lon: -3.7 },
  seville: { lat: 37.39, lon: -5.99 },
  rome: { lat: 41.9, lon: 12.5 },
  heidelberg: { lat: 49.41, lon: 8.69 },
  mainz: { lat: 50.0, lon: 8.27 },
};

/** Stable iteration order (heaviest first) for the per-city detail views. */
export const cityOrder: CityId[] = ['rome', 'seville', 'heidelberg', 'coruna', 'madrid', 'mainz'];

/** City names per locale (Rome→Roma→Rom, Seville→Siviglia/Sevilla, Mainz→Magonza/Maguncia). */
export const cityNames: Record<Locale, Record<CityId, string>> = {
  en: {
    coruna: 'A Coruña',
    madrid: 'Madrid',
    seville: 'Seville',
    rome: 'Rome',
    heidelberg: 'Heidelberg',
    mainz: 'Mainz',
  },
  it: {
    coruna: 'A Coruña',
    madrid: 'Madrid',
    seville: 'Siviglia',
    rome: 'Roma',
    heidelberg: 'Heidelberg',
    mainz: 'Magonza',
  },
  es: {
    coruna: 'A Coruña',
    madrid: 'Madrid',
    seville: 'Sevilla',
    rome: 'Roma',
    heidelberg: 'Heidelberg',
    mainz: 'Maguncia',
  },
  de: {
    coruna: 'A Coruña',
    madrid: 'Madrid',
    seville: 'Sevilla',
    rome: 'Rom',
    heidelberg: 'Heidelberg',
    mainz: 'Mainz',
  },
};

// City ids per CV entry, aligned to the `experience` / `education` array order
// in cv.ts. An entry may belong to more than one city (Erasmus exchanges).
export const experienceCities: CityId[][] = [
  ['coruna'], // Cloud Solution Architect — Concentrix
  ['madrid'], // L2 Managed Services — NTT DATA
  ['seville'], // App/Cloud Support — Accenture
  ['seville'], // German Teacher — Idiomas Carlos V
  ['rome'], // Foreign Language Teacher — Studiamo Insieme
  ['rome'], // Front Desk, Erasmus+ Office — Tor Vergata
  ['rome'], // Audio Engineer — Freelance
];

export const educationCities: CityId[][] = [
  ['rome', 'mainz'], // Master’s — Tor Vergata (Erasmus at Mainz)
  ['seville'], // MAES — Pablo de Olavide
  ['heidelberg'], // German course — Heidelberg
  ['rome', 'heidelberg'], // Bachelor’s — Tor Vergata (Erasmus at Heidelberg)
  ['rome'], // Baccalaureate — I.T.I. Lattanzio
];
