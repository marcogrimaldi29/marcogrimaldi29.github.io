import type { UIKey } from '@i18n/ui';

/** Primary navigation. `labelKey` resolves per-locale via useTranslations(). */
export interface NavItem {
  labelKey: UIKey;
  path: string;
}

export const mainNav: NavItem[] = [
  { labelKey: 'nav.about', path: '/about/' },
  { labelKey: 'nav.certReviews', path: '/cert-reviews/' },
  { labelKey: 'nav.contact', path: '/contact/' },
  { labelKey: 'nav.cv', path: '/cv/' },
  { labelKey: 'nav.projects', path: '/projects/' },
  { labelKey: 'nav.studyNotes', path: '/study-notes/' },
];
