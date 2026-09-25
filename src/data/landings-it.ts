/**
 * Italian landing-page card data — mirrors landings.ts with translated copy.
 * Cert reviews and resources point to /it/ translations (pages in this site).
 * Study notes and deep dives live in separate, English-only spoke repos served
 * under the production domain — keep their absolute URLs (same as the EN site)
 * so they resolve to the real pages instead of 404-ing against this build.
 */
import type { LandingCard } from './landings';

// Cert reviews are pages in THIS site → strip the production origin so links
// stay root-relative (works in dev + prod). Study notes / deep dives keep their
// absolute spoke URLs (see note()/dive()).
const toLocalHref = (href: string): string => href.replace('https://marcogrimaldi29.com', '');

// Il badge mostra l'area principale della scheda invece del nome ridondante della sezione.
const focus = (title: string): string => {
  if (/ITIL/i.test(title)) return 'ITIL';
  if (/engage center/i.test(title)) return 'Supporto';
  if (/\bMS-/i.test(title)) return 'M365';
  if (/\bDP-/i.test(title)) return 'Fabric';
  if (/\bGH-/i.test(title)) return 'GitHub';
  if (/\bAI-/i.test(title)) return 'Foundry';
  if (/\bSC-/i.test(title)) return 'Sicurezza';
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
  ctaLabel: 'Vedi appunti →',
  ...(altHref && { altHref, altLabel: 'appunti v2' }),
});

const dive = (title: string, description: string, href: string, meta: string[]): LandingCard => ({
  icon: '🥽',
  tag: focus(title),
  tagType: 'tool',
  title,
  description,
  meta,
  href,
  ctaLabel: 'Approfondisci →',
});

// Il badge evidenzia l'area della recensione invece del ridondante "Recensione".
const reviewFocus = (title: string): string => {
  if (/python/i.test(title)) return 'Python';
  if (/data analytics/i.test(title)) return 'Analisi dati';
  if (/project management/i.test(title)) return 'Gestione progetti';
  if (/it support/i.test(title)) return 'Supporto IT';
  if (/teams/i.test(title)) return 'Teams';
  if (/power platform/i.test(title)) return 'Power Platform';
  if (/security/i.test(title)) return 'Sicurezza';
  if (/\bAI\b/.test(title)) return 'IA';
  if (/data/i.test(title)) return 'Dati';
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
  ctaLabel: 'Leggi recensione →',
});

// ── Appunti di studio ────────────────────────────────────────
export const studyNotesIt: LandingCard[] = [
  note(
    'SC-500 Appunti',
    'Cloud and AI Security Engineer Associate — appunti su tutti i domini dell’esame SC-500.',
    'https://marcogrimaldi29.com/sc-500-study-notes/',
    ['🛡️ Livello Associate', '📄 4 Competenze'],
  ),
  note(
    'AI-103 Appunti',
    'Azure AI Apps and Agents Developer — appunti su tutti i domini dell’esame AI-103.',
    'https://marcogrimaldi29.com/ai-103-study-notes/',
    ['🛡️ Livello Associate', '📄 5 Competenze'],
  ),
  note(
    'GH-300 Appunti',
    'GitHub Copilot — appunti su tutti i domini dell’esame GH-300.',
    'https://marcogrimaldi29.com/gh-300-study-notes/',
    ['🎖️ Livello Specialty', '📄 6 Competenze'],
  ),
  note(
    'GH-900 Appunti',
    'GitHub Foundations — appunti su tutti i domini dell’esame GH-900.',
    'https://marcogrimaldi29.com/gh-900-study-notes/',
    ['🎖️ Livello Specialty', '📄 7 Competenze'],
  ),
  note(
    'MS-721 Appunti',
    'Collaboration Communications Systems Engineer Associate — appunti su tutti i domini dell’esame MS-721.',
    'https://marcogrimaldi29.com/ms-721-study-notes/',
    ['🛡️ Livello Associate', '📄 4 Competenze', '✅ Superato'],
  ),
  note(
    'MS-700 Appunti',
    'Microsoft Teams Administrator Associate — appunti su tutti i domini dell’esame MS-700.',
    'https://marcogrimaldi29.com/ms-700-study-notes/',
    ['🛡️ Livello Associate', '📄 4 Competenze', '✅ Superato'],
  ),
  note(
    'MS-102 Appunti',
    'Microsoft 365 Administrator Expert — appunti su tutti i domini dell’esame MS-102.',
    'https://marcogrimaldi29.com/ms-102-study-notes/',
    ['🏆 Livello Expert', '📄 4 Competenze'],
  ),
  note(
    'DP-700 Appunti',
    'Fabric Data Engineer Associate — appunti su tutti i domini dell’esame DP-700.',
    'https://marcogrimaldi29.com/dp-700-study-notes/',
    ['🛡️ Livello Associate', '📄 3 Competenze', '✅ Superato'],
    'https://marcogrimaldi29.com/dp-700-study-notes-v2/',
  ),
  note(
    'DP-600 Appunti',
    'Fabric Analytics Engineer Associate — appunti su tutti i domini dell’esame DP-600.',
    'https://marcogrimaldi29.com/dp-600-study-notes/',
    ['🛡️ Livello Associate', '📄 3 Competenze', '✅ Superato'],
  ),
  note(
    'ITIL® 4 Foundation Appunti',
    'ITIL® 4 Foundation — appunti su tutti i domini del livello Foundation.',
    'https://marcogrimaldi29.com/itil-4-foundation/',
    ['🔤 Livello Foundation', '✅ Superato'],
  ),
  note(
    'AZ-400 Appunti',
    'Azure DevOps Engineer Expert — appunti su tutti i domini dell’esame AZ-400.',
    'https://marcogrimaldi29.com/az-400-study-notes/',
    ['🏆 Livello Expert', '📄 5 Competenze'],
    'https://marcogrimaldi29.com/az-400-study-notes-v2/',
  ),
  note(
    'AZ-305 Appunti',
    'Azure Solutions Architect Expert — appunti su tutti i domini dell’esame AZ-305.',
    'https://marcogrimaldi29.com/az-305-study-notes/',
    ['🏆 Livello Expert', '📄 4 Competenze', '✅ Superato'],
  ),
  note(
    'AZ-500 Appunti',
    'Azure Security Engineer Associate — appunti su tutti i domini dell’esame AZ-500.',
    'https://marcogrimaldi29.com/az-500-study-notes/',
    ['🛡️ Livello Associate', '📄 4 Competenze', '🚧 In ritiro'],
  ),
  note(
    'AZ-104 Appunti',
    'Azure Administrator Associate — appunti su tutti i domini dell’esame AZ-104.',
    'https://marcogrimaldi29.com/az-104-study-notes/',
    ['🛡️ Livello Associate', '📄 5 Competenze', '✅ Superato'],
  ),
];

// ── Approfondimenti ──────────────────────────────────────────
export const deepDivesIt: LandingCard[] = [
  dive(
    'Azure WAF: Ottimizzazione dei costi',
    'Microsoft Well-Architected Framework — strategie e best practice per l’ottimizzazione dei costi.',
    'https://marcogrimaldi29.com/waf-cost-opt/',
    ['🪙 Ottimizzazione costi', '📋 Riferimento CSA'],
  ),
  dive(
    'Microsoft Engage Center',
    'Note di accompagnamento su portale Engage Center, supporto Unified & Premier, MIRP digitale e confronto con Services Hub.',
    'https://marcogrimaldi29.com/engage-center-notes/',
    ['🎫 Supporto Unified', '📋 Riferimento CSA'],
  ),
  dive(
    'AZ-305: Migrazione, HA & BCDR',
    'Approfondimento su migrazione Azure, alta disponibilità e continuità operativa & disaster recovery.',
    'https://marcogrimaldi29.com/az-305-bcdr/',
    ['🌋 BCDR', '🤿 Approfondimento'],
  ),
  dive(
    'AZ-305: Servizi di calcolo',
    'Approfondimento su Azure Compute — VM e VMSS, App Service, serverless e container.',
    'https://marcogrimaldi29.com/az-305-compute/',
    ['🖥️ Calcolo', '🤿 Approfondimento'],
  ),
  dive(
    'AZ-305: Servizi dati & analytics',
    'Approfondimento su Synapse Analytics, Data Factory, Databricks e Data Lake Storage.',
    'https://marcogrimaldi29.com/az-305-data-analytics/',
    ['📈 Analisi dati', '🤿 Approfondimento'],
  ),
  dive(
    'AZ-305: Servizi di messaggistica',
    'Approfondimento su Service Bus, Event Hubs, Event Grid e Queue Storage.',
    'https://marcogrimaldi29.com/az-305-messaging/',
    ['📨 Messaggistica', '🤿 Approfondimento'],
  ),
];

// ── Recensioni certificazioni ────────────────────────────────
export const certReviewsGoogleIt: LandingCard[] = [
  review(
    'Google IT Automation with Python',
    'Recensione del percorso Google IT Automation with Python.',
    '/it/cert-reviews/google-automation-python/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 7 Corsi', '✅ Superato'],
  ),
  review(
    'Google Data Analytics',
    'Recensione del percorso Google Data Analytics.',
    '/it/cert-reviews/google-data-analytics/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 9 Corsi', '✅ Superato'],
  ),
  review(
    'Google Project Management',
    'Recensione del percorso Google Project Management.',
    '/it/cert-reviews/google-project-management/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 6 Corsi', '✅ Superato'],
  ),
  review(
    'Google IT Support',
    'Recensione del percorso Google IT Support.',
    '/it/cert-reviews/google-it-support/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 6 Corsi', '✅ Superato'],
  ),
];

export const certReviewsMicrosoftIt: LandingCard[] = [
  review(
    'MS-700: Teams Administrator Associate',
    'Recensione dell’esame MS-700 — preparazione, risorse di studio ed esperienza d’esame.',
    '/it/cert-reviews/microsoft-ms-700/',
    ['🛡️ Livello Associate', '📄 4 Competenze', '✅ Superato'],
  ),
  review(
    'DP-900: Azure Data Fundamentals',
    'Recensione dell’esame DP-900 — preparazione, risorse di studio ed esperienza d’esame.',
    '/it/cert-reviews/microsoft-dp-900/',
    ['🔤 Livello Fundamentals', '📄 4 Competenze', '✅ Superato'],
  ),
  review(
    'AI-900: Azure AI Fundamentals',
    'Recensione dell’esame AI-900 — preparazione, risorse di studio ed esperienza d’esame.',
    '/it/cert-reviews/microsoft-ai-900/',
    ['🔤 Livello Fundamentals', '📄 5 Competenze', '✅ Superato'],
  ),
  review(
    'AZ-900: Azure Fundamentals',
    'Recensione dell’esame AZ-900 — preparazione, risorse di studio ed esperienza d’esame.',
    '/it/cert-reviews/microsoft-az-900/',
    ['🔤 Livello Fundamentals', '📄 3 Competenze', '✅ Superato'],
  ),
  review(
    'PL-900: Power Platform Fundamentals',
    'Recensione dell’esame PL-900 — preparazione, risorse di studio ed esperienza d’esame.',
    '/it/cert-reviews/microsoft-pl-900/',
    ['🔤 Livello Fundamentals', '📄 5 Competenze', '✅ Superato'],
  ),
  review(
    'SC-900: Security, Compliance & Identity',
    'Recensione dell’esame SC-900 — preparazione, risorse di studio ed esperienza d’esame.',
    '/it/cert-reviews/microsoft-sc-900/',
    ['🔤 Livello Fundamentals', '📄 4 Competenze', '✅ Superato'],
  ),
];

// ── Progetti ─────────────────────────────────────────────────
export const projectsIt: LandingCard[] = [
  {
    icon: '🧪',
    iconSrc: '/logos/fluentia-lab.svg',
    tag: 'Dati & Cloud',
    tagType: 'guide',
    title: 'Fluentia Lab',
    description:
      'Un lab di data platform end-to-end costruito attorno a Fluentia, una fittizia azienda EdTech spagnola usata come identità realistica per testare architetture cloud a costo zero. Dati sintetici scorrono in un lakehouse a medaglione (bronze → silver → gold) fino a un modello semantico e un report — lo stesso contratto su due motori (DuckDB in locale, Spark su Fabric).',
    meta: ['Python', 'Microsoft Fabric', 'Power BI', '🚧 In sviluppo'],
    href: 'https://marcogrimaldi29.com/fluentia-lab/',
    ctaLabel: 'Presto disponibile →',
    comingSoon: true,
  },
  {
    icon: '☁️',
    iconSrc: '/logos/cloud-corpora.svg',
    tag: 'Cloud & IT',
    tagType: 'guide',
    title: 'Cloud Corpora',
    description:
      'Un corpus terminologico multilingue (EN·ES·DE·IT) su cloud e IT che normalizza il modo in cui lo stesso concetto viene chiamato tra provider e lingue diverse. Ogni termine unisce una definizione di riferimento condivisa Microsoft + AWS + Google a una mappa di corrispondenze cross-provider bidirezionale — così puoi tradurre un termine da un cloud al suo equivalente su un altro, in una qualsiasi delle quattro lingue.',
    meta: ['Azure', 'AWS', 'GCP', '🚧 In sviluppo'],
    href: 'https://marcogrimaldi29.com/cloud-corpora/',
    ctaLabel: 'Presto disponibile →',
    comingSoon: true,
  },
  {
    icon: '⚖️',
    iconSrc: '/logos/lex-loci.svg',
    tag: 'Legale & Compliance',
    tagType: 'guide',
    title: 'Lex Loci',
    description:
      'Un hub di riferimento legale per professionisti IT nell’UE e nell’area EMEA che risponde in modo deterministico a una domanda: quali normative europee e nazionali deve realmente rispettare un’organizzazione, e perché. Scegli una giurisdizione e un settore, descrivi l’organizzazione e ottieni gli strumenti applicabili — ciascuno con il proprio ragionamento, l’autorità di controllo, una timeline datata e i controlli Microsoft/Azure che li indirizzano.',
    meta: ['Normative', 'EMEA', '🚧 In sviluppo'],
    href: 'https://marcogrimaldi29.com/lex-loci/',
    ctaLabel: 'Presto disponibile →',
    comingSoon: true,
  },
].sort((a, b) => a.title.localeCompare(b.title)) as LandingCard[];

// ── Risorse ──────────────────────────────────────────────────
export const resourceCollectionsIt: LandingCard[] = [
  {
    icon: '🇩🇪',
    tag: 'Risorse',
    tagType: 'tool',
    title: 'Risorse Tedesco',
    description: 'Raccolta curata di risorse per imparare il tedesco.',
    href: '/it/resources/resources-german/',
    ctaLabel: 'Vedi risorse →',
  },
  {
    icon: '🪟',
    tag: 'Risorse',
    tagType: 'tool',
    title: 'Risorse Microsoft',
    description: 'Risorse e documentazione curate sulle tecnologie Microsoft.',
    href: '/it/resources/resources-microsoft/',
    ctaLabel: 'Vedi risorse →',
  },
  {
    icon: '🤖',
    tag: 'Risorse',
    tagType: 'tool',
    title: 'Risorse IA',
    description: 'Raccolta curata di risorse su IA e prompt engineering.',
    href: '/it/resources/resources-ai/',
    ctaLabel: 'Vedi risorse →',
  },
  {
    icon: '🐙',
    tag: 'Risorse',
    tagType: 'tool',
    title: 'GitHub, Jekyll & Markdown',
    description: 'Risorse curate per GitHub, Jekyll e Markdown.',
    href: '/it/resources/resources-github-jekyll-markdown/',
    ctaLabel: 'Vedi risorse →',
  },
];
