/**
 * Org / institution logo matching for CV entries — shared by `TimelineCard`
 * (full cards) and `CareerMap` (the per-city detail list). Logos come from
 * Wikimedia Commons (credited in `LogoDisclaimer`); the freelance role uses the
 * personal site mark. Matching is on proper nouns stable across locales (Mainz
 * also localizes to Magonza/Maguncia).
 */
export interface LogoRule {
  re: RegExp;
  src: string;
}

// Primary logo matched from the org name.
export const orgLogos: LogoRule[] = [
  {
    re: /concentrix/i,
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Concentrix_logo.svg',
  },
  { re: /\bntt\b/i, src: 'https://upload.wikimedia.org/wikipedia/commons/5/59/NTT_logo.svg' },
  {
    re: /accenture/i,
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg',
  },
  {
    re: /tor vergata/i,
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Tor_Vergata_University_logo.svg',
  },
  {
    re: /olavide/i,
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Marca-UPO-Horizontal.png',
  },
  {
    re: /heidelberg/i,
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ruprecht-Karls-Universit%C3%A4t_Heidelberg_Logo.svg',
  },
  // Freelance / self-employed → personal site mark.
  { re: /freelance|freiberuf/i, src: '/logos/site-mark.svg' },
];

// Secondary logos for Erasmus exchanges mentioned in an entry's meta/points
// (e.g. a Tor Vergata degree with an exchange at Mainz).
export const exchangeLogos: LogoRule[] = [
  {
    re: /heidelberg/i,
    src: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ruprecht-Karls-Universit%C3%A4t_Heidelberg_Logo.svg',
  },
  {
    re: /mainz|magonza|maguncia/i,
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Johannes_Gutenberg-Universit%C3%A4t_Mainz_logo.svg',
  },
];

/** Primary org/institution logo matched from the org name (or undefined). */
export const primaryLogo = (org: string): string | undefined =>
  orgLogos.find((o) => o.re.test(org))?.src;

/**
 * All logos for a CV entry: the primary org logo plus any Erasmus-exchange
 * institutions named in `haystack` (org + meta + points joined). Entries with
 * no match return an empty array (callers show a placeholder tile).
 */
export const resolveLogos = (org: string, haystack: string): string[] => {
  const primary = primaryLogo(org);
  return [
    primary,
    ...exchangeLogos.filter((e) => e.re.test(haystack) && e.src !== primary).map((e) => e.src),
  ].filter((s): s is string => Boolean(s));
};
