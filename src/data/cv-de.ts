/**
 * German CV data — mirrors cv.ts. Experience/education bullets, group titles,
 * levels and soft skills are translated; certification and skill item names
 * (proper nouns / standard tech terms) are reused from the English data.
 */
import {
  certifications,
  technicalSkills,
  type CvEntry,
  type CertCategory,
  type SkillCategory,
  type SkillItem,
} from './cv';

export const experienceDe: CvEntry[] = [
  {
    role: 'Cloud Solution Architect',
    org: 'Concentrix',
    meta: ['A Coruña (Remote)', '2025 – Heute'],
    points: [
      'Beratung von Kunden als Cloud Solution Architect (CSA) in den Bereichen Resilienz, Zuverlässigkeit, Kostenoptimierung und Governance.',
      'Leitung von Resilienz-Workshops, um Kunden beim Aufbau zuverlässiger, hochverfügbarer Cloud-Architekturen zu unterstützen.',
      'Erstellung formaler Risikobewertungen und Entwurf von Notfallwiederherstellungs-, Business-Continuity- und Major-Incident-Response-Plänen, um die Auswirkungen von Ausfällen zu minimieren.',
      'Durchführung von Workshops zu Kostenoptimierung, FinOps und Governance, damit Kunden ihre Cloud-Ausgaben im Griff behalten und Compliance-Vorgaben einhalten.',
      'Zusammenarbeit mit Kundenteams, um deren Architekturanforderungen zu verstehen und maßgeschneiderte Lösungen zu liefern.',
      'Schulung von Kunden in Best Practices für den Aufbau resilienter und kosteneffizienter Umgebungen mit klarer Governance, ausgerichtet am Azure Well-Architected Framework und am Cloud Adoption Framework.',
    ],
  },
  {
    role: 'L2 Managed Services Engineer & Technical Knowledge Manager',
    org: 'NTT DATA',
    meta: ['Madrid (Remote)', '2023 – 2025'],
    points: [
      'Technischer Support der Stufe 2 für Microsoft Teams, M365 und Azure-Umgebungen sowie für die Cloud-Voice-Infrastruktur.',
      'Lösung komplexer Probleme bei Teams-Besprechungen, Anrufen, Integrationen, Netzwerk und Cloud-Infrastruktur, mit Eskalation an L3 oder Hersteller bei Bedarf.',
      'Überwachung von Zustand und Leistung der Systeme sowie proaktive Identifizierung und Behebung potenzieller Probleme.',
      'Zusammenarbeit mit IT-Teams und Herstellern zur Umsetzung von Änderungen oder Lösung komplexer Probleme in Teams und Cloud Voice.',
      'Verwaltung des Lebenszyklus der Wissensdatenbank: Verfassen, Überprüfen und Pflegen von Dokumentation, Artikeln und Troubleshooting-Anleitungen.',
    ],
  },
  {
    role: 'App/Cloud Support Associate',
    org: 'Accenture',
    meta: ['Sevilla (Remote)', '2021 – 2023'],
    points: [
      'IT-Support auf Deutsch, Englisch und Spanisch per Telefon, E-Mail und Web.',
      'Bearbeitung von Incidents und Serviceanfragen mit ITSM-Tools gemäß den ITIL-Prozessen.',
      'Kompetent in Azure, Azure AD, Active Directory, Exchange, IaaS, Identity and Access Management, Intune, MFA, Microsoft 365, Networking, PaaS, PowerShell, SaaS, SAP, SCCM, Security and Compliance, Windows 10/11.',
    ],
  },
  {
    role: 'Deutschlehrer & Mitwirkender am Erasmus+-KA2-Projekt',
    org: 'Idiomas Carlos V',
    meta: ['Sevilla (Vor Ort)', '2021'],
    points: [
      'Deutschunterricht für das Programm zur Erzieherausbildung des Arbeitsministeriums von Niedersachsen.',
      'Mitwirkung am Management des Erasmus+-KA2-Projekts.',
    ],
  },
  {
    role: 'Fremdsprachenlehrer',
    org: 'Studiamo Insieme',
    meta: ['Rom (Hybrid)', '2019 – 2021'],
    points: [
      'Unterricht und Betreuung von Schülern in Deutsch, Italienisch, Englisch und Spanisch, vor Ort und remote.',
      'Spezialisierung auf Schüler mit sonderpädagogischem Förderbedarf.',
    ],
  },
  {
    role: 'Empfangsmitarbeiter, Erasmus+-Büro',
    org: 'Universität Rom „Tor Vergata“',
    meta: ['Rom (Vor Ort)', '2016'],
    points: [
      'Unterstützung ein- und ausgehender internationaler Studierender, online und persönlich.',
      'Verwaltung von Kommunikation, Bewerbungen und Beziehungen zu Partneruniversitäten.',
    ],
  },
  {
    role: 'Tontechniker & Musiker',
    org: 'Freiberuflich',
    meta: ['Rom (Vor Ort)', '2010 – 2018'],
    points: [
      'Vorbereitung, Organisation und Steuerung der technischen und organisatorischen Aspekte von Live-Musikveranstaltungen von Anfang bis Ende.',
      'Auftritte bei künstlerischen und Multi-Instrumentalshows bei Unterhaltungsveranstaltungen.',
      'Aufnahme, Mischung und Mastering von Audiotracks im Studio.',
    ],
  },
];

export const educationDe: CvEntry[] = [
  {
    role: 'Master in Italienischer Literatur, Moderner Philologie und Linguistik',
    org: 'Universität Rom „Tor Vergata“',
    meta: ['Rom & Mainz', '2018 – 2022'],
    points: [
      'Abschlussnote: 110/110 mit Auszeichnung.',
      '1-jähriges Erasmus+-KA1-Austauschprogramm, JGU Mainz (Deutschland).',
    ],
  },
  {
    role: 'Master in Lehrerausbildung (MAES)',
    org: 'Universität Pablo de Olavide',
    meta: ['Sevilla', '2020 – 2021'],
    points: ['Praktikum am IES San Isidoro, Sevilla.'],
  },
  {
    role: 'Internationaler Kurs für deutsche Sprache und Kultur',
    org: 'Universität Heidelberg',
    meta: ['Heidelberg', '2018'],
    points: ['1-monatiger Intensivsommerkurs, Niveau C1 (GER), an der Universität Heidelberg.'],
  },
  {
    role: 'Bachelor in Sprachen in der Informationsgesellschaft',
    org: 'Universität Rom „Tor Vergata“',
    meta: ['Rom & Heidelberg', '2014 – 2018'],
    points: [
      'Abschlussnote: 110/110.',
      '1-jähriges Erasmus+-KA1-Austauschprogramm, Universität Heidelberg (Deutschland).',
      'Studierendenvertreter (Studienjahre 2016/2017, 2017/2018).',
      'Programmier- und Fremdsprachen: HTML, CSS, JavaScript, SQL, Deutsch, Englisch, Spanisch.',
    ],
  },
  {
    role: 'Abschluss — Technisches Industrieinstitut, Fachrichtung Informatik',
    org: 'I.T.I. Lattanzio',
    meta: ['Rom', '2005 – 2010'],
    points: [
      'Programmiersprachen: C++, Java, HTML, PHP.',
      'Fachbezogene Fächer: IT-Infrastruktur; Systemadministration (Windows und Linux); Netzwerke; Cybersicherheit; Hardware und Software; Elektronik.',
    ],
  },
];

const certTitleDe: Record<string, string> = {
  'Microsoft Certifications': 'Microsoft-Zertifizierungen',
  'Microsoft Applied Skills': 'Microsoft Applied Skills',
  'Google Professional Certificates': 'Google Professional Certificates',
  'Other IT Certifications': 'Weitere IT-Zertifizierungen',
  'Language Certifications': 'Sprachzertifizierungen',
};
export const certificationsDe: CertCategory[] = certifications.map((g) => ({
  ...g,
  title: certTitleDe[g.title] ?? g.title,
}));

const skillTitleDe: Record<string, string> = {
  'Cloud Architecture & Advisory': 'Cloud-Architektur & Beratung',
  'Cloud & Infrastructure': 'Cloud & Infrastruktur',
  'Security & Compliance': 'Security & Compliance',
  'AI & Automation': 'KI & Automatisierung',
  'Data & Analytics': 'Daten & Analytics',
  'Unified Communications': 'Unified Communications',
  'IT Operations & Support': 'IT-Betrieb & Support',
  'Development & Tools': 'Entwicklung & Tools',
  'Teaching & Training': 'Lehre & Training',
};
const levelDe: Record<string, string> = {
  Fluent: 'Fließend',
  Advanced: 'Fortgeschritten',
  Intermediate: 'Mittelstufe',
};
export const technicalSkillsDe: SkillCategory[] = technicalSkills
  .map((g) => ({
    ...g,
    title: skillTitleDe[g.title] ?? g.title,
    skills: g.skills.map((s) => ({ ...s, level: levelDe[s.level] ?? s.level })),
  }))
  // Re-sort by the translated title so categories read alphabetically in each locale.
  .sort((a, b) => a.title.localeCompare(b.title, 'de'));

export const languagesDe: SkillItem[] = [
  { name: 'Italienisch', level: 'Muttersprachlich' },
  { name: 'Englisch', level: 'C2' },
  { name: 'Spanisch', level: 'C2' },
  { name: 'Deutsch', level: 'C1' },
];

export const softSkillsDe: string[] = [
  'Anpassungsfähig',
  'Kundenorientierte Denkweise',
  'Detailgenau',
  'Schnelle Auffassungsgabe',
  'Multitasking',
  'Organisiert',
  'Proaktiv',
  'Problemlöser',
  'Teamplayer',
];
