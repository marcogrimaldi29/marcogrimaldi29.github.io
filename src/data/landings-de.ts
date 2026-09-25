/**
 * German landing-page card data — mirrors landings.ts with translated copy.
 * Cert reviews and resources point to /de/ translations (pages in this site).
 * Study notes and deep dives live in separate, English-only spoke repos served
 * under the production domain — keep their absolute URLs (same as the EN site)
 * so they resolve to the real pages instead of 404-ing against this build.
 */
import type { LandingCard } from './landings';

// Cert reviews are pages in THIS site → strip the production origin so links
// stay root-relative (works in dev + prod). Study notes / deep dives keep their
// absolute spoke URLs (see note()/dive()).
const toLocalHref = (href: string): string => href.replace('https://marcogrimaldi29.com', '');

// Das Badge zeigt den Schwerpunkt der Karte statt des redundanten Abschnittsnamens.
const focus = (title: string): string => {
  if (/ITIL/i.test(title)) return 'ITIL';
  if (/engage center/i.test(title)) return 'Support';
  if (/\bMS-/i.test(title)) return 'M365';
  if (/\bDP-/i.test(title)) return 'Fabric';
  if (/\bGH-/i.test(title)) return 'GitHub';
  if (/\bAI-/i.test(title)) return 'Foundry';
  if (/\bSC-/i.test(title)) return 'Sicherheit';
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
  ctaLabel: 'Notizen ansehen →',
  ...(altHref && { altHref, altLabel: 'Notizen v2' }),
});

const dive = (title: string, description: string, href: string, meta: string[]): LandingCard => ({
  icon: '🥽',
  tag: focus(title),
  tagType: 'tool',
  title,
  description,
  meta,
  href,
  ctaLabel: 'Tiefer eintauchen →',
});

// Das Badge hebt den Schwerpunkt der Review hervor statt des redundanten "Review".
const reviewFocus = (title: string): string => {
  if (/python/i.test(title)) return 'Python';
  if (/data analytics/i.test(title)) return 'Datenanalyse';
  if (/project management/i.test(title)) return 'Projektmanagement';
  if (/it support/i.test(title)) return 'IT-Support';
  if (/teams/i.test(title)) return 'Teams';
  if (/power platform/i.test(title)) return 'Power Platform';
  if (/security/i.test(title)) return 'Sicherheit';
  if (/\bAI\b/.test(title)) return 'KI';
  if (/data/i.test(title)) return 'Daten';
  return 'Azure';
};

const review = (title: string, description: string, href: string, meta: string[]): LandingCard => ({
  icon: '🏅',
  tag: reviewFocus(title),
  tagType: 'certification',
  title,
  description,
  meta,
  href: toLocalHref(href),
  ctaLabel: 'Review lesen →',
});

// ── Lernnotizen ──────────────────────────────────────────────
export const studyNotesDe: LandingCard[] = [
  note(
    'SC-500 Lernnotizen',
    'Cloud and AI Security Engineer Associate — Prüfungsnotizen zu allen SC-500-Domänen.',
    'https://marcogrimaldi29.com/sc-500-study-notes/',
    ['🛡️ Associate-Niveau', '📄 4 Kompetenzen'],
  ),
  note(
    'AI-103 Lernnotizen',
    'Azure AI Apps and Agents Developer — Prüfungsnotizen zu allen AI-103-Domänen.',
    'https://marcogrimaldi29.com/ai-103-study-notes/',
    ['🛡️ Associate-Niveau', '📄 5 Kompetenzen'],
  ),
  note(
    'GH-300 Lernnotizen',
    'GitHub Copilot — Prüfungsnotizen zu allen GH-300-Domänen.',
    'https://marcogrimaldi29.com/gh-300-study-notes/',
    ['🎖️ Specialty-Niveau', '📄 6 Kompetenzen'],
  ),
  note(
    'GH-900 Lernnotizen',
    'GitHub Foundations — Prüfungsnotizen zu allen GH-900-Domänen.',
    'https://marcogrimaldi29.com/gh-900-study-notes/',
    ['🎖️ Specialty-Niveau', '📄 7 Kompetenzen'],
  ),
  note(
    'MS-721 Lernnotizen',
    'Collaboration Communications Systems Engineer Associate — Prüfungsnotizen zu allen MS-721-Domänen.',
    'https://marcogrimaldi29.com/ms-721-study-notes/',
    ['🛡️ Associate-Niveau', '📄 4 Kompetenzen', '✅ Bestanden'],
  ),
  note(
    'MS-700 Lernnotizen',
    'Microsoft Teams Administrator Associate — Prüfungsnotizen zu allen MS-700-Domänen.',
    'https://marcogrimaldi29.com/ms-700-study-notes/',
    ['🛡️ Associate-Niveau', '📄 4 Kompetenzen', '✅ Bestanden'],
  ),
  note(
    'MS-102 Lernnotizen',
    'Microsoft 365 Administrator Expert — Prüfungsnotizen zu allen MS-102-Domänen.',
    'https://marcogrimaldi29.com/ms-102-study-notes/',
    ['🏆 Expert-Niveau', '📄 4 Kompetenzen'],
  ),
  note(
    'DP-700 Lernnotizen',
    'Fabric Data Engineer Associate — Prüfungsnotizen zu allen DP-700-Domänen.',
    'https://marcogrimaldi29.com/dp-700-study-notes/',
    ['🛡️ Associate-Niveau', '📄 3 Kompetenzen', '✅ Bestanden'],
    'https://marcogrimaldi29.com/dp-700-study-notes-v2/',
  ),
  note(
    'DP-600 Lernnotizen',
    'Fabric Analytics Engineer Associate — Prüfungsnotizen zu allen DP-600-Domänen.',
    'https://marcogrimaldi29.com/dp-600-study-notes/',
    ['🛡️ Associate-Niveau', '📄 3 Kompetenzen', '✅ Bestanden'],
  ),
  note(
    'ITIL® 4 Foundation Lernnotizen',
    'ITIL® 4 Foundation — Prüfungsnotizen zu allen Foundation-Domänen.',
    'https://marcogrimaldi29.com/itil-4-foundation/',
    ['🔤 Foundation-Niveau', '✅ Bestanden'],
  ),
  note(
    'AZ-400 Lernnotizen',
    'Azure DevOps Engineer Expert — Prüfungsnotizen zu allen AZ-400-Domänen.',
    'https://marcogrimaldi29.com/az-400-study-notes/',
    ['🏆 Expert-Niveau', '📄 5 Kompetenzen'],
    'https://marcogrimaldi29.com/az-400-study-notes-v2/',
  ),
  note(
    'AZ-305 Lernnotizen',
    'Azure Solutions Architect Expert — Prüfungsnotizen zu allen AZ-305-Domänen.',
    'https://marcogrimaldi29.com/az-305-study-notes/',
    ['🏆 Expert-Niveau', '📄 4 Kompetenzen', '✅ Bestanden'],
  ),
  note(
    'AZ-500 Lernnotizen',
    'Azure Security Engineer Associate — Prüfungsnotizen zu allen AZ-500-Domänen.',
    'https://marcogrimaldi29.com/az-500-study-notes/',
    ['🛡️ Associate-Niveau', '📄 4 Kompetenzen', '🚧 Wird eingestellt'],
  ),
  note(
    'AZ-104 Lernnotizen',
    'Azure Administrator Associate — Prüfungsnotizen zu allen AZ-104-Domänen.',
    'https://marcogrimaldi29.com/az-104-study-notes/',
    ['🛡️ Associate-Niveau', '📄 5 Kompetenzen', '✅ Bestanden'],
  ),
];

// ── Deep Dives ───────────────────────────────────────────────
export const deepDivesDe: LandingCard[] = [
  dive(
    'Azure WAF: Kostenoptimierung',
    'Microsoft Well-Architected Framework — Strategien und Best Practices zur Kostenoptimierung.',
    'https://marcogrimaldi29.com/waf-cost-opt/',
    ['🪙 Kostenoptimierung', '📋 CSA-Referenz'],
  ),
  dive(
    'Microsoft Engage Center',
    'Begleitnotizen zum Engage-Center-Portal, Unified- & Premier-Support, digitalem MIRP und einem Services-Hub-Vergleich.',
    'https://marcogrimaldi29.com/engage-center-notes/',
    ['🎫 Unified Support', '📋 CSA-Referenz'],
  ),
  dive(
    'AZ-305: Migration, HA & BCDR',
    'Deep Dive zu Azure-Migration, Hochverfügbarkeit sowie Business Continuity & Disaster Recovery.',
    'https://marcogrimaldi29.com/az-305-bcdr/',
    ['🌋 BCDR', '🤿 Deep Dive'],
  ),
  dive(
    'AZ-305: Compute-Dienste',
    'Deep Dive zu Azure Compute — VMs und VMSS, App Service, Serverless und Container.',
    'https://marcogrimaldi29.com/az-305-compute/',
    ['🖥️ Compute', '🤿 Deep Dive'],
  ),
  dive(
    'AZ-305: Daten- & Analytics-Dienste',
    'Deep Dive zu Synapse Analytics, Data Factory, Databricks und Data Lake Storage.',
    'https://marcogrimaldi29.com/az-305-data-analytics/',
    ['📈 Datenanalyse', '🤿 Deep Dive'],
  ),
  dive(
    'AZ-305: Messaging-Dienste',
    'Deep Dive zu Service Bus, Event Hubs, Event Grid und Queue Storage.',
    'https://marcogrimaldi29.com/az-305-messaging/',
    ['📨 Messaging', '🤿 Deep Dive'],
  ),
];

// ── Zertifizierungs-Reviews ──────────────────────────────────
export const certReviewsGoogleDe: LandingCard[] = [
  review(
    'Google IT Automation with Python',
    'Eine Review des Google IT Automation with Python-Pfads.',
    '/de/cert-reviews/google-automation-python/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 7 Kurse', '✅ Bestanden'],
  ),
  review(
    'Google Data Analytics',
    'Eine Review des Google Data Analytics-Pfads.',
    '/de/cert-reviews/google-data-analytics/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 9 Kurse', '✅ Bestanden'],
  ),
  review(
    'Google Project Management',
    'Eine Review des Google Project Management-Pfads.',
    '/de/cert-reviews/google-project-management/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 6 Kurse', '✅ Bestanden'],
  ),
  review(
    'Google IT Support',
    'Eine Review des Google IT Support-Pfads.',
    '/de/cert-reviews/google-it-support/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 6 Kurse', '✅ Bestanden'],
  ),
];

export const certReviewsMicrosoftDe: LandingCard[] = [
  review(
    'MS-700: Teams Administrator Associate',
    'Eine Review der MS-700-Prüfung — Vorbereitung, Lernressourcen und Prüfungserfahrung.',
    '/de/cert-reviews/microsoft-ms-700/',
    ['🛡️ Associate-Niveau', '📄 4 Kompetenzen', '✅ Bestanden'],
  ),
  review(
    'DP-900: Azure Data Fundamentals',
    'Eine Review der DP-900-Prüfung — Vorbereitung, Lernressourcen und Prüfungserfahrung.',
    '/de/cert-reviews/microsoft-dp-900/',
    ['🔤 Fundamentals-Niveau', '📄 4 Kompetenzen', '✅ Bestanden'],
  ),
  review(
    'AI-900: Azure AI Fundamentals',
    'Eine Review der AI-900-Prüfung — Vorbereitung, Lernressourcen und Prüfungserfahrung.',
    '/de/cert-reviews/microsoft-ai-900/',
    ['🔤 Fundamentals-Niveau', '📄 5 Kompetenzen', '✅ Bestanden'],
  ),
  review(
    'AZ-900: Azure Fundamentals',
    'Eine Review der AZ-900-Prüfung — Vorbereitung, Lernressourcen und Prüfungserfahrung.',
    '/de/cert-reviews/microsoft-az-900/',
    ['🔤 Fundamentals-Niveau', '📄 3 Kompetenzen', '✅ Bestanden'],
  ),
  review(
    'PL-900: Power Platform Fundamentals',
    'Eine Review der PL-900-Prüfung — Vorbereitung, Lernressourcen und Prüfungserfahrung.',
    '/de/cert-reviews/microsoft-pl-900/',
    ['🔤 Fundamentals-Niveau', '📄 5 Kompetenzen', '✅ Bestanden'],
  ),
  review(
    'SC-900: Security, Compliance & Identity',
    'Eine Review der SC-900-Prüfung — Vorbereitung, Lernressourcen und Prüfungserfahrung.',
    '/de/cert-reviews/microsoft-sc-900/',
    ['🔤 Fundamentals-Niveau', '📄 4 Kompetenzen', '✅ Bestanden'],
  ),
];

// ── Projekte ─────────────────────────────────────────────────
export const projectsDe: LandingCard[] = [
  {
    icon: '🧪',
    iconSrc: '/logos/fluentia-lab.svg',
    tag: 'Daten & Cloud',
    tagType: 'guide',
    title: 'Fluentia Lab',
    description:
      'Ein End-to-End-Datenplattform-Lab rund um Fluentia, ein fiktives spanisches EdTech-Unternehmen, das als realistische Identität zum kostenlosen Testen von Cloud-Architekturen dient. Synthetische Daten fließen durch ein Medaillon-Lakehouse (bronze → silver → gold) in ein semantisches Modell und einen Bericht — derselbe Vertrag auf zwei Engines (DuckDB lokal, Spark auf Fabric).',
    meta: ['Python', 'Microsoft Fabric', 'Power BI', '🚧 In Entwicklung'],
    href: 'https://marcogrimaldi29.com/fluentia-lab/',
    ctaLabel: 'Demnächst →',
    comingSoon: true,
  },
  {
    icon: '☁️',
    iconSrc: '/logos/cloud-corpora.svg',
    tag: 'Cloud & IT',
    tagType: 'guide',
    title: 'Cloud Corpora',
    description:
      'Ein mehrsprachiges (EN·ES·DE·IT) Terminologie-Korpus zu Cloud und IT, das vereinheitlicht, wie dasselbe Konzept über Anbieter und Sprachen hinweg benannt wird. Jeder Begriff verbindet eine gemeinsame Referenzdefinition für Microsoft + AWS + Google mit einer bidirektionalen anbieterübergreifenden Begriffszuordnung — so lässt sich ein Begriff von einer Cloud zu ihrem Äquivalent bei einer anderen übersetzen, in jeder der vier Sprachen.',
    meta: ['Azure', 'AWS', 'GCP', '🚧 In Entwicklung'],
    href: 'https://marcogrimaldi29.com/cloud-corpora/',
    ctaLabel: 'Demnächst →',
    comingSoon: true,
  },
  {
    icon: '⚖️',
    iconSrc: '/logos/lex-loci.svg',
    tag: 'Recht & Compliance',
    tagType: 'guide',
    title: 'Lex Loci',
    description:
      'Ein juristischer Referenz-Hub für IT-Fachleute in der EU und der EMEA-Region, der eine Frage deterministisch beantwortet: Welche EU- und nationalen Vorschriften muss eine Organisation tatsächlich einhalten – und warum. Wähle eine Jurisdiktion und eine Branche, beschreibe die Organisation und erhalte die anwendbaren Instrumente — jeweils mit Begründung, Aufsichtsbehörde, datierter Zeitleiste und den Microsoft/Azure-Kontrollen, die sie adressieren.',
    meta: ['Vorschriften', 'EMEA', '🚧 In Entwicklung'],
    href: 'https://marcogrimaldi29.com/lex-loci/',
    ctaLabel: 'Demnächst →',
    comingSoon: true,
  },
].sort((a, b) => a.title.localeCompare(b.title)) as LandingCard[];

// ── Ressourcen ───────────────────────────────────────────────
export const resourceCollectionsDe: LandingCard[] = [
  {
    icon: '🇩🇪',
    tag: 'Ressourcen',
    tagType: 'tool',
    title: 'Deutsch-Ressourcen',
    description: 'Kuratierte Sammlung von Ressourcen zum Deutschlernen.',
    href: '/de/resources/resources-german/',
    ctaLabel: 'Ressourcen ansehen →',
  },
  {
    icon: '🪟',
    tag: 'Ressourcen',
    tagType: 'tool',
    title: 'Microsoft-Ressourcen',
    description: 'Kuratierte Ressourcen und Dokumentation zu Microsoft-Technologien.',
    href: '/de/resources/resources-microsoft/',
    ctaLabel: 'Ressourcen ansehen →',
  },
  {
    icon: '🤖',
    tag: 'Ressourcen',
    tagType: 'tool',
    title: 'KI-Ressourcen',
    description: 'Kuratierte Sammlung von Ressourcen zu KI und Prompt Engineering.',
    href: '/de/resources/resources-ai/',
    ctaLabel: 'Ressourcen ansehen →',
  },
  {
    icon: '🐙',
    tag: 'Ressourcen',
    tagType: 'tool',
    title: 'GitHub, Jekyll & Markdown',
    description: 'Kuratierte Ressourcen zu GitHub, Jekyll und Markdown.',
    href: '/de/resources/resources-github-jekyll-markdown/',
    ctaLabel: 'Ressourcen ansehen →',
  },
];
