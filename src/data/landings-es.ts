/**
 * Spanish landing-page card data — mirrors landings.ts with translated copy.
 * Cert reviews and resources point to /es/ translations (pages in this site).
 * Study notes and deep dives live in separate, English-only spoke repos served
 * under the production domain — keep their absolute URLs (same as the EN site)
 * so they resolve to the real pages instead of 404-ing against this build.
 */
import type { LandingCard } from './landings';

// Cert reviews are pages in THIS site → strip the production origin so links
// stay root-relative (works in dev + prod). Study notes / deep dives keep their
// absolute spoke URLs (see note()/dive()).
const toLocalHref = (href: string): string => href.replace('https://marcogrimaldi29.com', '');

// La etiqueta muestra el área principal de la tarjeta en lugar del nombre redundante de la sección.
const focus = (title: string): string => {
  if (/ITIL/i.test(title)) return 'ITIL';
  if (/engage center/i.test(title)) return 'Soporte';
  if (/\bMS-/i.test(title)) return 'M365';
  if (/\bDP-/i.test(title)) return 'Fabric';
  if (/\bGH-/i.test(title)) return 'GitHub';
  if (/\bAI-/i.test(title)) return 'Foundry';
  if (/\bSC-/i.test(title)) return 'Seguridad';
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
  ctaLabel: 'Ver apuntes →',
  ...(altHref && { altHref, altLabel: 'apuntes v2' }),
});

const dive = (title: string, description: string, href: string, meta: string[]): LandingCard => ({
  icon: '🥽',
  tag: focus(title),
  tagType: 'tool',
  title,
  description,
  meta,
  href,
  ctaLabel: 'Profundizar →',
});

// La etiqueta resalta el área de la reseña en lugar del redundante "Reseña".
const reviewFocus = (title: string): string => {
  if (/python/i.test(title)) return 'Python';
  if (/data analytics/i.test(title)) return 'Análisis de datos';
  if (/project management/i.test(title)) return 'Gestión de proyectos';
  if (/it support/i.test(title)) return 'Soporte IT';
  if (/teams/i.test(title)) return 'Teams';
  if (/power platform/i.test(title)) return 'Power Platform';
  if (/security/i.test(title)) return 'Seguridad';
  if (/\bAI\b/.test(title)) return 'IA';
  if (/data/i.test(title)) return 'Datos';
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
  ctaLabel: 'Leer reseña →',
});

// ── Apuntes de estudio ───────────────────────────────────────
export const studyNotesEs: LandingCard[] = [
  note(
    'SC-500 Apuntes',
    'Cloud and AI Security Engineer Associate — apuntes sobre todos los dominios del examen SC-500.',
    'https://marcogrimaldi29.com/sc-500-study-notes/',
    ['🛡️ Nivel Associate', '📄 4 Competencias'],
  ),
  note(
    'AI-103 Apuntes',
    'Azure AI Apps and Agents Developer — apuntes sobre todos los dominios del examen AI-103.',
    'https://marcogrimaldi29.com/ai-103-study-notes/',
    ['🛡️ Nivel Associate', '📄 5 Competencias'],
  ),
  note(
    'GH-300 Apuntes',
    'GitHub Copilot — apuntes sobre todos los dominios del examen GH-300.',
    'https://marcogrimaldi29.com/gh-300-study-notes/',
    ['🎖️ Nivel Specialty', '📄 6 Competencias'],
  ),
  note(
    'GH-900 Apuntes',
    'GitHub Foundations — apuntes sobre todos los dominios del examen GH-900.',
    'https://marcogrimaldi29.com/gh-900-study-notes/',
    ['🎖️ Nivel Specialty', '📄 7 Competencias'],
  ),
  note(
    'MS-721 Apuntes',
    'Collaboration Communications Systems Engineer Associate — apuntes sobre todos los dominios del examen MS-721.',
    'https://marcogrimaldi29.com/ms-721-study-notes/',
    ['🛡️ Nivel Associate', '📄 4 Competencias', '✅ Aprobado'],
  ),
  note(
    'MS-700 Apuntes',
    'Microsoft Teams Administrator Associate — apuntes sobre todos los dominios del examen MS-700.',
    'https://marcogrimaldi29.com/ms-700-study-notes/',
    ['🛡️ Nivel Associate', '📄 4 Competencias', '✅ Aprobado'],
  ),
  note(
    'MS-102 Apuntes',
    'Microsoft 365 Administrator Expert — apuntes sobre todos los dominios del examen MS-102.',
    'https://marcogrimaldi29.com/ms-102-study-notes/',
    ['🏆 Nivel Expert', '📄 4 Competencias'],
  ),
  note(
    'DP-700 Apuntes',
    'Fabric Data Engineer Associate — apuntes sobre todos los dominios del examen DP-700.',
    'https://marcogrimaldi29.com/dp-700-study-notes/',
    ['🛡️ Nivel Associate', '📄 3 Competencias', '✅ Aprobado'],
    'https://marcogrimaldi29.com/dp-700-study-notes-v2/',
  ),
  note(
    'DP-600 Apuntes',
    'Fabric Analytics Engineer Associate — apuntes sobre todos los dominios del examen DP-600.',
    'https://marcogrimaldi29.com/dp-600-study-notes/',
    ['🛡️ Nivel Associate', '📄 3 Competencias', '✅ Aprobado'],
  ),
  note(
    'ITIL® 4 Foundation Apuntes',
    'ITIL® 4 Foundation — apuntes sobre todos los dominios del nivel Foundation.',
    'https://marcogrimaldi29.com/itil-4-foundation/',
    ['🔤 Nivel Foundation', '✅ Aprobado'],
  ),
  note(
    'AZ-400 Apuntes',
    'Azure DevOps Engineer Expert — apuntes sobre todos los dominios del examen AZ-400.',
    'https://marcogrimaldi29.com/az-400-study-notes/',
    ['🏆 Nivel Expert', '📄 5 Competencias'],
    'https://marcogrimaldi29.com/az-400-study-notes-v2/',
  ),
  note(
    'AZ-305 Apuntes',
    'Azure Solutions Architect Expert — apuntes sobre todos los dominios del examen AZ-305.',
    'https://marcogrimaldi29.com/az-305-study-notes/',
    ['🏆 Nivel Expert', '📄 4 Competencias', '✅ Aprobado'],
  ),
  note(
    'AZ-500 Apuntes',
    'Azure Security Engineer Associate — apuntes sobre todos los dominios del examen AZ-500.',
    'https://marcogrimaldi29.com/az-500-study-notes/',
    ['🛡️ Nivel Associate', '📄 4 Competencias', '🚧 En retirada'],
  ),
  note(
    'AZ-104 Apuntes',
    'Azure Administrator Associate — apuntes sobre todos los dominios del examen AZ-104.',
    'https://marcogrimaldi29.com/az-104-study-notes/',
    ['🛡️ Nivel Associate', '📄 5 Competencias', '✅ Aprobado'],
  ),
];

// ── Análisis en profundidad ──────────────────────────────────
export const deepDivesEs: LandingCard[] = [
  dive(
    'Azure WAF: Optimización de costes',
    'Microsoft Well-Architected Framework — estrategias y mejores prácticas para la optimización de costes.',
    'https://marcogrimaldi29.com/waf-cost-opt/',
    ['🪙 Optimización de costes', '📋 Referencia CSA'],
  ),
  dive(
    'Microsoft Engage Center',
    'Notas complementarias sobre el portal Engage Center, soporte Unified y Premier, MIRP digital y comparación con Services Hub.',
    'https://marcogrimaldi29.com/engage-center-notes/',
    ['🎫 Soporte Unified', '📋 Referencia CSA'],
  ),
  dive(
    'AZ-305: Migración, HA y BCDR',
    'Análisis en profundidad sobre migración a Azure, alta disponibilidad y continuidad del negocio y recuperación ante desastres.',
    'https://marcogrimaldi29.com/az-305-bcdr/',
    ['🌋 BCDR', '🤿 Análisis'],
  ),
  dive(
    'AZ-305: Servicios de cómputo',
    'Análisis en profundidad de Azure Compute — VM y VMSS, App Service, serverless y contenedores.',
    'https://marcogrimaldi29.com/az-305-compute/',
    ['🖥️ Cómputo', '🤿 Análisis'],
  ),
  dive(
    'AZ-305: Servicios de datos y analítica',
    'Análisis en profundidad de Synapse Analytics, Data Factory, Databricks y Data Lake Storage.',
    'https://marcogrimaldi29.com/az-305-data-analytics/',
    ['📈 Analítica de datos', '🤿 Análisis'],
  ),
  dive(
    'AZ-305: Servicios de mensajería',
    'Análisis en profundidad de Service Bus, Event Hubs, Event Grid y Queue Storage.',
    'https://marcogrimaldi29.com/az-305-messaging/',
    ['📨 Mensajería', '🤿 Análisis'],
  ),
];

// ── Reseñas de certificaciones ───────────────────────────────
export const certReviewsGoogleEs: LandingCard[] = [
  review(
    'Google IT Automation with Python',
    'Reseña del itinerario Google IT Automation with Python.',
    '/es/cert-reviews/google-automation-python/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 7 Cursos', '✅ Aprobado'],
  ),
  review(
    'Google Data Analytics',
    'Reseña del itinerario Google Data Analytics.',
    '/es/cert-reviews/google-data-analytics/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 9 Cursos', '✅ Aprobado'],
  ),
  review(
    'Google Project Management',
    'Reseña del itinerario Google Project Management.',
    '/es/cert-reviews/google-project-management/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 6 Cursos', '✅ Aprobado'],
  ),
  review(
    'Google IT Support',
    'Reseña del itinerario Google IT Support.',
    '/es/cert-reviews/google-it-support/',
    ['🎓 Professional Certificate', '👨🏻‍🏫 6 Cursos', '✅ Aprobado'],
  ),
];

export const certReviewsMicrosoftEs: LandingCard[] = [
  review(
    'MS-700: Teams Administrator Associate',
    'Reseña del examen MS-700 — preparación, recursos de estudio y experiencia del examen.',
    '/es/cert-reviews/microsoft-ms-700/',
    ['🛡️ Nivel Associate', '📄 4 Competencias', '✅ Aprobado'],
  ),
  review(
    'DP-900: Azure Data Fundamentals',
    'Reseña del examen DP-900 — preparación, recursos de estudio y experiencia del examen.',
    '/es/cert-reviews/microsoft-dp-900/',
    ['🔤 Nivel Fundamentals', '📄 4 Competencias', '✅ Aprobado'],
  ),
  review(
    'AI-900: Azure AI Fundamentals',
    'Reseña del examen AI-900 — preparación, recursos de estudio y experiencia del examen.',
    '/es/cert-reviews/microsoft-ai-900/',
    ['🔤 Nivel Fundamentals', '📄 5 Competencias', '✅ Aprobado'],
  ),
  review(
    'AZ-900: Azure Fundamentals',
    'Reseña del examen AZ-900 — preparación, recursos de estudio y experiencia del examen.',
    '/es/cert-reviews/microsoft-az-900/',
    ['🔤 Nivel Fundamentals', '📄 3 Competencias', '✅ Aprobado'],
  ),
  review(
    'PL-900: Power Platform Fundamentals',
    'Reseña del examen PL-900 — preparación, recursos de estudio y experiencia del examen.',
    '/es/cert-reviews/microsoft-pl-900/',
    ['🔤 Nivel Fundamentals', '📄 5 Competencias', '✅ Aprobado'],
  ),
  review(
    'SC-900: Security, Compliance & Identity',
    'Reseña del examen SC-900 — preparación, recursos de estudio y experiencia del examen.',
    '/es/cert-reviews/microsoft-sc-900/',
    ['🔤 Nivel Fundamentals', '📄 4 Competencias', '✅ Aprobado'],
  ),
];

// ── Proyectos ────────────────────────────────────────────────
export const projectsEs: LandingCard[] = [
  {
    icon: '🧪',
    iconSrc: '/logos/fluentia-lab.svg',
    tag: 'Datos & Cloud',
    tagType: 'guide',
    title: 'Fluentia Lab',
    description:
      'Un laboratorio de plataforma de datos de extremo a extremo construido en torno a Fluentia, una empresa EdTech española ficticia usada como identidad realista para probar arquitecturas cloud a coste cero. Los datos sintéticos fluyen por un lakehouse en medallón (bronze → silver → gold) hasta un modelo semántico y un informe — el mismo contrato en dos motores (DuckDB en local, Spark en Fabric).',
    meta: ['Python', 'Microsoft Fabric', 'Power BI', '🚧 En desarrollo'],
    href: 'https://marcogrimaldi29.com/fluentia-lab/',
    ctaLabel: 'Próximamente →',
    comingSoon: true,
  },
  {
    icon: '☁️',
    iconSrc: '/logos/cloud-corpora.svg',
    tag: 'Cloud & IT',
    tagType: 'guide',
    title: 'Cloud Corpora',
    description:
      'Un corpus terminológico multilingüe (EN·ES·DE·IT) sobre cloud e IT que normaliza cómo se nombra un mismo concepto entre proveedores e idiomas. Cada término combina una definición de referencia compartida de Microsoft + AWS + Google con un mapa de correspondencias entre proveedores bidireccional — para traducir un término de una nube a su equivalente en otra, en cualquiera de los cuatro idiomas.',
    meta: ['Azure', 'AWS', 'GCP', '🚧 En desarrollo'],
    href: 'https://marcogrimaldi29.com/cloud-corpora/',
    ctaLabel: 'Próximamente →',
    comingSoon: true,
  },
  {
    icon: '⚖️',
    iconSrc: '/logos/lex-loci.svg',
    tag: 'Legal & Compliance',
    tagType: 'guide',
    title: 'Lex Loci',
    description:
      'Un hub de referencia legal para profesionales de TI en la UE y la región EMEA que responde de forma determinista a una pregunta: qué normativas europeas y nacionales debe cumplir realmente una organización, y por qué. Elige una jurisdicción y un sector, describe la organización y obtén los instrumentos aplicables — cada uno con su razonamiento, la autoridad de control, una cronología fechada y los controles de Microsoft/Azure que los abordan.',
    meta: ['Normativa', 'EMEA', '🚧 En desarrollo'],
    href: 'https://marcogrimaldi29.com/lex-loci/',
    ctaLabel: 'Próximamente →',
    comingSoon: true,
  },
].sort((a, b) => a.title.localeCompare(b.title)) as LandingCard[];

// ── Recursos ─────────────────────────────────────────────────
export const resourceCollectionsEs: LandingCard[] = [
  {
    icon: '🇩🇪',
    tag: 'Recursos',
    tagType: 'tool',
    title: 'Recursos de Alemán',
    description: 'Colección curada de recursos para aprender alemán.',
    href: '/es/resources/resources-german/',
    ctaLabel: 'Ver recursos →',
  },
  {
    icon: '🪟',
    tag: 'Recursos',
    tagType: 'tool',
    title: 'Recursos de Microsoft',
    description: 'Recursos y documentación curados sobre tecnologías de Microsoft.',
    href: '/es/resources/resources-microsoft/',
    ctaLabel: 'Ver recursos →',
  },
  {
    icon: '🤖',
    tag: 'Recursos',
    tagType: 'tool',
    title: 'Recursos de IA',
    description: 'Colección curada de recursos sobre IA e ingeniería de prompts.',
    href: '/es/resources/resources-ai/',
    ctaLabel: 'Ver recursos →',
  },
  {
    icon: '🐙',
    tag: 'Recursos',
    tagType: 'tool',
    title: 'GitHub, Jekyll y Markdown',
    description: 'Recursos curados para GitHub, Jekyll y Markdown.',
    href: '/es/resources/resources-github-jekyll-markdown/',
    ctaLabel: 'Ver recursos →',
  },
];
