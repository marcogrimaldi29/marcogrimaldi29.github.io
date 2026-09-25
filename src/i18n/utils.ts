import { ui, defaultLocale, locales, type Locale, type UIKey } from './ui';

/** Extract the active locale from a URL pathname (default when unprefixed). */
export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if ((locales as readonly string[]).includes(maybeLocale)) {
    return maybeLocale as Locale;
  }
  return defaultLocale;
}

/** Returns a t() function bound to a locale, falling back to English. */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}

/**
 * Prefix a root-relative path with the locale (English stays unprefixed to
 * preserve legacy URLs). e.g. localizePath('/cv/', 'it') -> '/it/cv/'.
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return `/${locale}${clean}`;
}

/**
 * Strip any locale prefix from a pathname, returning the canonical
 * (English) path. e.g. '/de/cv/' -> '/cv/'.
 */
export function unlocalizePath(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  if ((locales as readonly string[]).includes(first) && first !== defaultLocale) {
    return `/${rest.join('/')}`;
  }
  return pathname;
}
