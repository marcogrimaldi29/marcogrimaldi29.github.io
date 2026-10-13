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

/** Home "explore" cards (English) — shared by the home page and the 404. */
export interface ExploreLink {
  icon: string;
  title: string;
  subtitle: string;
  href: string;
}

export const exploreLinks: ExploreLink[] = [
  { icon: '🏗️', title: 'About', subtitle: 'Background & this site', href: '/about/' },
  { icon: '🏅', title: 'Cert Reviews', subtitle: 'Exam experiences', href: '/cert-reviews/' },
  { icon: '📃', title: 'CV', subtitle: 'Experience & skills', href: '/cv/' },
  { icon: '🚀', title: 'Projects', subtitle: 'Hands-on labs', href: '/projects/' },
  { icon: '📘', title: 'Study Notes', subtitle: 'Cert notes', href: '/study-notes/' },
  { icon: '🧰', title: 'Resources', subtitle: 'Curated collections', href: '/resources/' },
  { icon: '📲', title: 'Contact', subtitle: 'Let’s get in touch', href: '/contact/' },
  { icon: '🍪', title: 'Privacy', subtitle: 'GDPR-friendly & cookieless', href: '/privacy/' },
];
