/**
 * Landing-page card data (study notes, deep dives, cert reviews, resources).
 * Replaces the broken inline-HTML card grids in the legacy landing Markdown —
 * these now render through the LinkCard component on real .astro pages.
 */

export interface LandingCard {
  icon: string;
  /** Optional logo path shown in the chip instead of the emoji (e.g. a project's own brand mark). */
  iconSrc?: string;
  tag: string;
  tagType: 'certification' | 'guide' | 'tool';
  title: string;
  description: string;
  meta?: string[];
  href: string;
  ctaLabel: string;
  /** Renders the CTA as a non-interactive label (no link) — for projects not yet published. */
  comingSoon?: boolean;
  /** Optional secondary link (e.g. a v2 edition of the notes) — rendered by LinkCard as an animated pill. */
  altHref?: string;
  altLabel?: string;
}

// The pill shows each card's main focus area instead of the redundant section name.
const focus = (title: string): string => {
  if (/ITIL/i.test(title)) return 'ITIL';
  if (/engage center/i.test(title)) return 'Support';
  if (/\bMS-/i.test(title)) return 'M365';
  if (/\bDP-/i.test(title)) return 'Fabric';
  if (/\bGH-/i.test(title)) return 'GitHub';
  if (/\bAI-/i.test(title)) return 'Foundry';
  if (/\bSC-/i.test(title)) return 'Security';
  return 'Azure';
};

const note = (
  title: string,
  description: string,
  href: string,
  meta: string[],
  altHref?: string,
): LandingCard => ({
  icon: '📘',
  tag: focus(title),
  tagType: 'guide',
  title,
  description,
  meta,
  href,
  ctaLabel: 'View notes →',
  ...(altHref && { altHref, altLabel: 'v2 notes' }),
});

const dive = (title: string, description: string, href: string, meta: string[]): LandingCard => ({
  icon: '🥽',
  tag: focus(title),
  tagType: 'tool',
  title,
  description,
  meta,
  href,
  ctaLabel: 'Deep dive →',
});

// Pill highlights each review's focus area rather than the redundant "Review".
const reviewFocus = (title: string): string => {
  if (/python/i.test(title)) return 'Python';
  if (/data analytics/i.test(title)) return 'Data Analytics';
  if (/project management/i.test(title)) return 'Project Mgmt';
  if (/it support/i.test(title)) return 'IT Support';
  if (/teams/i.test(title)) return 'Teams';
  if (/power platform/i.test(title)) return 'Power Platform';
  if (/security/i.test(title)) return 'Security';
  if (/\bAI\b/.test(title)) return 'AI';
  if (/data/i.test(title)) return 'Data';
  return 'Azure';
};

const review = (title: string, description: string, href: string, meta: string[]): LandingCard => ({
  icon: '🏅',
  tag: reviewFocus(title),
  tagType: 'certification',
  title,
  description,
  meta,
  // Cert reviews are pages in THIS site → root-relative (works in dev + prod).
  href: href.replace('https://marcogrimaldi29.com', ''),
  ctaLabel: 'Read review →',
});

// ── Graph drill-down children ────────────────────────────────
// Transforms landing cards into compact nodes for the home SiteGraph: a short,
// de-duplicated label for the chip (`label`) plus the untouched title for the
// hover caption / tooltip / aria-label (`full`). Language-neutral exam codes
// drive the short label; topic words are appended only when a code repeats in
// the same set (e.g. the four AZ-305 deep dives).
export interface GraphChild {
  label: string;
  full: string;
  href: string;
  icon: string;
}

export function toGraphChildren(cards: LandingCard[]): GraphChild[] {
  const codeRe = /^([A-Za-z]{2,4}-\d{3})/;
  const slugOf = (href: string) => href.replace(/\/+$/, '').split('/').pop() ?? '';

  // Curated, language-neutral labels for deep dives — their titles vary across
  // locales and the topic isn't reliably the first word, so key off the slug.
  const labelBySlug: Record<string, string> = {
    'waf-cost-opt': 'WAF: Cost Opt',
    'engage-center-notes': 'Engage Center',
    'az-305-bcdr': 'AZ-305: BCDR',
    'az-305-compute': 'AZ-305: Compute',
    'az-305-data-analytics': 'AZ-305: Data',
    'az-305-messaging': 'AZ-305: Messaging',
  };

  const stripSuffix = (t: string) =>
    t
      .replace(/\s*Study Notes$/i, '')
      .replace(/\s*Resources$/i, '')
      .replace(/®/g, '')
      .trim();

  const short = (title: string): string => {
    // A leading exam code is the cleanest chip label in every locale, e.g.
    // "AZ-305 Study Notes" / "AZ-305 Lernnotizen" → "AZ-305".
    const code = title.match(codeRe)?.[1];
    if (code) return code;
    const base = stripSuffix(title);
    if (base.includes(':')) return base.split(':')[0].trim();
    const words = base.split(/\s+/);
    return (words.length > 3 ? words.slice(0, 3).join(' ') : base).replace(/[\s,&]+$/, '');
  };

  return cards.map((c) => ({
    label: labelBySlug[slugOf(c.href)] ?? short(c.title),
    full: c.title,
    href: c.href,
    icon: c.icon,
  }));
}

// ── Side-nav series folding ──────────────────────────────────
// Groups landing-card links into collapsible exam-code series (MS-, DP-, AZ-)
// so the left rail stays short as notes accumulate; titles without a series
// code (ITIL, WAF, Engage Center) stay standalone links. v2 editions (altHref)
// get their own "<code> v2" link inside the same series fold. Everything —
// entries and each fold's contents — is sorted alphabetically.
export interface StudyNavItem {
  label: string;
  href: string;
}
export type StudyNavEntry = StudyNavItem | { label: string; items: StudyNavItem[] };

const SERIES = ['AZ', 'DP', 'GH', 'MS'] as const;

export function toStudyNav(
  cards: LandingCard[],
  stripRe?: RegExp,
  seriesLabel: (series: string) => string = (s) => `${s}-series`,
): StudyNavEntry[] {
  const folds = new Map<string, { label: string; items: StudyNavItem[] }>();
  const standalone: StudyNavItem[] = [];
  for (const c of cards) {
    const label = stripRe ? c.title.replace(stripRe, '') : c.title;
    const code = c.title.match(/^([A-Za-z]{2,4}-\d{3})/)?.[1];
    const links = [{ label, href: c.href }];
    if (c.altHref) links.push({ label: `${code ?? label} v2`, href: c.altHref });
    const series = SERIES.find((s) => code?.startsWith(`${s}-`));
    if (series) {
      let fold = folds.get(series);
      if (!fold) folds.set(series, (fold = { label: seriesLabel(series), items: [] }));
      fold.items.push(...links);
    } else {
      standalone.push(...links);
    }
  }
  const byLabel = (a: { label: string }, b: { label: string }) => a.label.localeCompare(b.label);
  for (const fold of folds.values()) fold.items.sort(byLabel);
  return [...folds.values(), ...standalone].sort(byLabel);
}

// ── Study Notes ──────────────────────────────────────────────
export const studyNotes: LandingCard[] = [
  note(
    'SC-500 Study Notes',
    'Cloud and AI Security Engineer Associate — exam prep notes covering all SC-500 domains.',
    'https://marcogrimaldi29.com/sc-500-study-notes/',
    ['🛡️ Associate Level', '📄 4 Skills'],
  ),
  note(
    'AI-103 Study Notes',
    'Azure AI Apps and Agents Developer — exam prep notes covering all AI-103 domains.',
    'https://marcogrimaldi29.com/ai-103-study-notes/',
    ['🛡️ Associate Level', '📄 5 Skills'],
  ),
  note(
    'GH-300 Study Notes',
    'GitHub Copilot — exam prep notes covering all GH-300 domains.',
    'https://marcogrimaldi29.com/gh-300-study-notes/',
    ['🎖️ Specialty Level', '📄 6 Skills'],
  ),
  note(
    'GH-900 Study Notes',
    'GitHub Foundations — exam prep notes covering all GH-900 domains.',
    'https://marcogrimaldi29.com/gh-900-study-notes/',
    ['🎖️ Specialty Level', '📄 7 Skills'],
  ),
  note(
    'MS-102 Study Notes',
    'Microsoft 365 Administrator Expert — exam prep notes covering all MS-102 domains.',
    'https://marcogrimaldi29.com/ms-102-study-notes/',
    ['🏆 Expert Level', '📄 4 Skills'],
  ),
  note(
    'MS-721 Study Notes',
    'Collaboration Communications Systems Engineer Associate — exam prep notes covering all MS-721 domains.',
    'https://marcogrimaldi29.com/ms-721-study-notes/',
    ['🛡️ Associate Level', '📄 4 Skills', '✅ Passed'],
  ),
  note(
    'MS-700 Study Notes',
    'Microsoft Teams Administrator Associate — exam prep notes covering all MS-700 domains.',
    'https://marcogrimaldi29.com/ms-700-study-notes/',
    ['🛡️ Associate Level', '📄 4 Skills', '✅ Passed'],
  ),
  note(
    'DP-700 Study Notes',
    'Fabric Data Engineer Associate — exam prep notes covering all DP-700 domains.',
    'https://marcogrimaldi29.com/dp-700-study-notes/',
    ['🛡️ Associate Level', '📄 3 Skills', '✅ Passed'],
    'https://marcogrimaldi29.com/dp-700-study-notes-v2/',
  ),
  note(
    'DP-600 Study Notes',
    'Fabric Analytics Engineer Associate — exam prep notes covering all DP-600 domains.',
    'https://marcogrimaldi29.com/dp-600-study-notes/',
    ['🛡️ Associate Level', '📄 3 Skills', '✅ Passed'],
  ),
  note(
    'ITIL® 4 Foundation Study Notes',
    'ITIL® 4 Foundation — exam prep notes covering all Foundation domains.',
    'https://marcogrimaldi29.com/itil-4-foundation/',
    ['🔤 Foundation Level', '✅ Passed'],
  ),
  note(
    'AZ-400 Study Notes',
    'Azure DevOps Engineer Expert — exam prep notes covering all AZ-400 domains.',
    'https://marcogrimaldi29.com/az-400-study-notes/',
    ['🏆 Expert Level', '📄 5 Skills'],
    'https://marcogrimaldi29.com/az-400-study-notes-v2/',
  ),
  note(
    'AZ-305 Study Notes',
    'Azure Solutions Architect Expert — exam prep notes covering all AZ-305 domains.',
    'https://marcogrimaldi29.com/az-305-study-notes/',
    ['🏆 Expert Level', '📄 4 Skills', '✅ Passed'],
  ),
  note(
    'AZ-500 Study Notes',
    'Azure Security Engineer Associate — exam prep notes covering all AZ-500 domains.',
    'https://marcogrimaldi29.com/az-500-study-notes/',
    ['🛡️ Associate Level', '📄 4 Skills', '🚧 Retiring'],
  ),
  note(
    'AZ-104 Study Notes',
    'Azure Administrator Associate — exam prep notes covering all AZ-104 domains.',
    'https://marcogrimaldi29.com/az-104-study-notes/',
    ['🛡️ Associate Level', '📄 5 Skills', '✅ Passed'],
  ),
];

// ── Deep Dives ───────────────────────────────────────────────
export const deepDives: LandingCard[] = [
  dive(
    'Azure WAF: Cost Optimization',
    'Microsoft Well-Architected Framework — cost optimization strategies and best practices.',
    'https://marcogrimaldi29.com/waf-cost-opt/',
    ['🪙 Cost Optimization', '📋 CSA Reference'],
  ),
  dive(
    'Microsoft Engage Center',
    'Companion notes on the Engage Center portal, Unified & Premier support, Digital MIRP, and a Services Hub comparison.',
    'https://marcogrimaldi29.com/engage-center-notes/',
    ['🎫 Unified Support', '📋 CSA Reference'],
  ),
  dive(
    'AZ-305: Migration, HA & BCDR',
    'Deep dive into Azure Migration, High Availability, and Business Continuity & Disaster Recovery.',
    'https://marcogrimaldi29.com/az-305-bcdr/',
    ['🌋 BCDR', '🤿 Deep Dive'],
  ),
  dive(
    'AZ-305: Compute Services',
    'Deep dive into Azure Compute — VMs and VMSS, App Service, Serverless and Containers.',
    'https://marcogrimaldi29.com/az-305-compute/',
    ['🖥️ Compute', '🤿 Deep Dive'],
  ),
  dive(
    'AZ-305: Data & Analytics Services',
    'Deep dive into Synapse Analytics, Data Factory, Databricks, and Data Lake Storage.',
    'https://marcogrimaldi29.com/az-305-data-analytics/',
    ['📈 Data Analytics', '🤿 Deep Dive'],
  ),
  dive(
    'AZ-305: Messaging Services',
    'Deep dive into Service Bus, Event Hubs, Event Grid, and Queue Storage.',
    'https://marcogrimaldi29.com/az-305-messaging/',
    ['📨 Messaging', '🤿 Deep Dive'],
  ),
];

// ── Cert Reviews ─────────────────────────────────────────────
export const certReviewsGoogle: LandingCard[] = [
  review(
    'Google IT Automation with Python',
    'A review of the Google IT Automation with Python path.',
    'https://marcogrimaldi29.com/cert-reviews/google-automation-python/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 7 Courses', '✅ Passed'],
  ),
  review(
    'Google Data Analytics',
    'A review of the Google Data Analytics path.',
    'https://marcogrimaldi29.com/cert-reviews/google-data-analytics/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 9 Courses', '✅ Passed'],
  ),
  review(
    'Google Project Management',
    'A review of the Google Project Management path.',
    'https://marcogrimaldi29.com/cert-reviews/google-project-management/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 6 Courses', '✅ Passed'],
  ),
  review(
    'Google IT Support',
    'A review of the Google IT Support path.',
    'https://marcogrimaldi29.com/cert-reviews/google-it-support/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 6 Courses', '✅ Passed'],
  ),
];

export const certReviewsMicrosoft: LandingCard[] = [
  review(
    'MS-700: Teams Administrator Associate',
    'A review of the MS-700 exam — prep journey, study resources, and exam experience.',
    'https://marcogrimaldi29.com/cert-reviews/microsoft-ms-700/',
    ['🛡️ Associate Level', '📄 4 Skills', '✅ Passed'],
  ),
  review(
    'DP-900: Azure Data Fundamentals',
    'A review of the DP-900 exam — prep journey, study resources, and exam experience.',
    'https://marcogrimaldi29.com/cert-reviews/microsoft-dp-900/',
    ['🔤 Fundamentals Level', '📄 4 Skills', '✅ Passed'],
  ),
  review(
    'AI-900: Azure AI Fundamentals',
    'A review of the AI-900 exam — prep journey, study resources, and exam experience.',
    'https://marcogrimaldi29.com/cert-reviews/microsoft-ai-900/',
    ['🔤 Fundamentals Level', '📄 5 Skills', '✅ Passed'],
  ),
  review(
    'AZ-900: Azure Fundamentals',
    'A review of the AZ-900 exam — prep journey, study resources, and exam experience.',
    'https://marcogrimaldi29.com/cert-reviews/microsoft-az-900/',
    ['🔤 Fundamentals Level', '📄 3 Skills', '✅ Passed'],
  ),
  review(
    'PL-900: Power Platform Fundamentals',
    'A review of the PL-900 exam — prep journey, study resources, and exam experience.',
    'https://marcogrimaldi29.com/cert-reviews/microsoft-pl-900/',
    ['🔤 Fundamentals Level', '📄 5 Skills', '✅ Passed'],
  ),
  review(
    'SC-900: Security, Compliance & Identity',
    'A review of the SC-900 exam — prep journey, study resources, and exam experience.',
    'https://marcogrimaldi29.com/cert-reviews/microsoft-sc-900/',
    ['🔤 Fundamentals Level', '📄 4 Skills', '✅ Passed'],
  ),
];

// ── Projects ─────────────────────────────────────────────────
// Hands-on labs. Each project lives in its own repository and is published
// under marcogrimaldi29.com/<project-name>/ (like the study-notes spokes).
// In-development projects carry `comingSoon` and omit `href` until they ship.
export const projects: LandingCard[] = [
  {
    icon: '🧪',
    iconSrc: '/logos/fluentia-lab.svg',
    tag: 'Data & Cloud',
    tagType: 'guide',
    title: 'Fluentia Lab',
    description:
      'An end-to-end data platform lab built around Fluentia, a fictional Spanish EdTech company used as a realistic identity for zero-cost cloud architecture testing. Synthetic data flows through a medallion lakehouse (bronze → silver → gold) into a semantic model and report — the same contract on two engines (DuckDB locally, Spark on Fabric).',
    meta: ['Python', 'Microsoft Fabric', 'Power BI', '🚧 In development'],
    // Future spoke URL — becomes a live link the moment `comingSoon` is dropped.
    href: 'https://marcogrimaldi29.com/fluentia-lab/',
    ctaLabel: 'Coming soon →',
    comingSoon: true,
  },
  {
    icon: '☁️',
    iconSrc: '/logos/cloud-corpora.svg',
    tag: 'Cloud & IT',
    tagType: 'guide',
    title: 'Cloud Corpora',
    description:
      'A multilingual (EN·ES·DE·IT) cloud & IT terminology corpus that normalizes how the same concept is named across providers and languages. Every term pairs a shared Microsoft + AWS + Google definition baseline with a bidirectional cross-provider naming map — so you can translate a term from one cloud to its equivalent on another, in any of the four languages.',
    meta: ['Azure', 'AWS', 'GCP', '🚧 In development'],
    href: 'https://marcogrimaldi29.com/cloud-corpora/',
    ctaLabel: 'Coming soon →',
    comingSoon: true,
  },
  {
    icon: '⚖️',
    iconSrc: '/logos/lex-loci.svg',
    tag: 'Legal & Compliance',
    tagType: 'guide',
    title: 'Lex Loci',
    description:
      'A legal reference hub for IT professionals across the EU and EMEA that answers one question deterministically: which EU and national regulations must an organisation actually comply with, and why. Pick a jurisdiction and industry, describe the organisation, and get the applicable instruments — each with its reasoning, supervisory authority, dated timeline, and the Microsoft/Azure controls that address them.',
    meta: ['Regulations', 'EMEA', '🚧 In development'],
    href: 'https://marcogrimaldi29.com/lex-loci/',
    ctaLabel: 'Coming soon →',
    comingSoon: true,
  },
].sort((a, b) => a.title.localeCompare(b.title)) as LandingCard[];

// ── Resources ────────────────────────────────────────────────
export const resourceCollections: LandingCard[] = [
  {
    icon: '🇩🇪',
    tag: 'Resources',
    tagType: 'tool',
    title: 'German Resources',
    description: 'Curated collection of resources for learning German.',
    href: '/resources/resources-german/',
    ctaLabel: 'View resources →',
  },
  {
    icon: '🪟',
    tag: 'Resources',
    tagType: 'tool',
    title: 'Microsoft Resources',
    description: 'Curated resources and documentation for Microsoft technologies.',
    href: '/resources/resources-microsoft/',
    ctaLabel: 'View resources →',
  },
  {
    icon: '🤖',
    tag: 'Resources',
    tagType: 'tool',
    title: 'AI Resources',
    description: 'Curated collection of AI and prompt-engineering resources.',
    href: '/resources/resources-ai/',
    ctaLabel: 'View resources →',
  },
  {
    icon: '🐙',
    tag: 'Resources',
    tagType: 'tool',
    title: 'GitHub, Jekyll & Markdown',
    description: 'Curated resources for GitHub, Jekyll, and Markdown.',
    href: '/resources/resources-github-jekyll-markdown/',
    ctaLabel: 'View resources →',
  },
];
