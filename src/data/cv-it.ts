/**
 * Italian CV data — mirrors cv.ts. Experience/education bullets, group titles,
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

export const experienceIt: CvEntry[] = [
  {
    role: 'Cloud Solution Architect',
    org: 'Concentrix',
    meta: ['A Coruña (Remoto)', '2025 – Presente'],
    points: [
      'Consulenza ai clienti in qualità di Cloud Solution Architect (CSA) su Resilienza, Affidabilità, Ottimizzazione dei costi e Governance.',
      'Conduzione di workshop sulla resilienza per aiutare i clienti a costruire architetture cloud affidabili e ad alta disponibilità.',
      'Svolgimento di valutazioni formali del rischio e progettazione di piani di Disaster Recovery, Business Continuity e Major Incident Response per ridurre al minimo l’impatto delle interruzioni.',
      'Erogazione di workshop su Ottimizzazione dei costi, FinOps e Governance, a supporto dei clienti nel controllo della spesa cloud e nel mantenimento della conformità.',
      'Collaborazione con i team dei clienti per comprenderne le esigenze architetturali e fornire soluzioni su misura.',
      'Formazione dei clienti sulle best practice per costruire ambienti resilienti, efficienti in termini di costi e ben governati, in linea con l’Azure Well-Architected Framework e il Cloud Adoption Framework.',
    ],
  },
  {
    role: 'L2 Managed Services Engineer & Technical Knowledge Manager',
    org: 'NTT DATA',
    meta: ['Madrid (Remoto)', '2023 – 2025'],
    points: [
      'Supporto tecnico di Livello 2 per Microsoft Teams, M365 e ambienti Azure, oltre all’infrastruttura Cloud Voice.',
      'Risoluzione di problemi complessi su riunioni Teams, chiamate, integrazioni, rete e infrastruttura cloud, con escalation a L3 o vendor quando necessario.',
      'Monitoraggio di stato e performance dei sistemi, con individuazione e risoluzione proattiva di potenziali problemi.',
      'Collaborazione con team IT e vendor per implementare modifiche o risolvere problemi complessi in Teams e Cloud Voice.',
      'Gestione del ciclo di vita della knowledge base: scrittura, revisione e manutenzione di documentazione, articoli e guide di troubleshooting.',
    ],
  },
  {
    role: 'App/Cloud Support Associate',
    org: 'Accenture',
    meta: ['Siviglia (Remoto)', '2021 – 2023'],
    points: [
      'Supporto IT in tedesco, inglese e spagnolo tramite telefono, email e web.',
      'Risoluzione di incident e richieste di servizio con strumenti ITSM secondo i processi ITIL.',
      'Competente in Azure, Azure AD, Active Directory, Exchange, IaaS, Identity and Access Management, Intune, MFA, Microsoft 365, networking, PaaS, PowerShell, SaaS, SAP, SCCM, sicurezza e compliance, Windows 10/11.',
    ],
  },
  {
    role: 'Insegnante di Tedesco & Contributor progetto Erasmus+ KA2',
    org: 'Idiomas Carlos V',
    meta: ['Siviglia (In sede)', '2021'],
    points: [
      'Insegnamento del tedesco per il programma di Educatore per l’infanzia del Ministero del Lavoro della Bassa Sassonia.',
      'Contributo alla gestione del progetto Erasmus+ KA2.',
    ],
  },
  {
    role: 'Insegnante di Lingue Straniere',
    org: 'Studiamo Insieme',
    meta: ['Roma (Ibrido)', '2019 – 2021'],
    points: [
      'Insegnamento e tutoraggio di studenti in tedesco, italiano, inglese e spagnolo, in presenza e da remoto.',
      'Specializzazione in studenti con Bisogni Educativi Speciali.',
    ],
  },
  {
    role: 'Addetto Front Office, Ufficio Erasmus+',
    org: 'Università di Roma "Tor Vergata"',
    meta: ['Roma (In sede)', '2016'],
    points: [
      'Supporto a studenti internazionali in entrata e in uscita, online e di persona.',
      'Gestione di comunicazioni, candidature e rapporti con le università partner.',
    ],
  },
  {
    role: 'Tecnico del Suono & Musicista',
    org: 'Freelance',
    meta: ['Roma (In sede)', '2010 – 2018'],
    points: [
      'Preparazione, organizzazione e gestione degli aspetti tecnici e organizzativi di eventi musicali dal vivo, dall’inizio alla fine.',
      'Esibizioni in spettacoli artistici e multi-strumentali in eventi di intrattenimento.',
      'Registrazione, missaggio e mastering di tracce audio in studio.',
    ],
  },
];

export const educationIt: CvEntry[] = [
  {
    role: 'Laurea Magistrale in Letteratura Italiana, Filologia Moderna e Linguistica',
    org: 'Università di Roma "Tor Vergata"',
    meta: ['Roma & Magonza', '2018 – 2022'],
    points: [
      'Voto finale: 110/110 e lode.',
      'Programma di scambio Erasmus+ KA1 di 1 anno, Università JGU di Magonza (Germania).',
    ],
  },
  {
    role: 'Master in Formazione degli Insegnanti (MAES)',
    org: 'Università Pablo de Olavide',
    meta: ['Siviglia', '2020 – 2021'],
    points: ['Tirocinio presso l’IES San Isidoro, Siviglia.'],
  },
  {
    role: 'Corso Internazionale di Lingua e Cultura Tedesca',
    org: 'Università di Heidelberg',
    meta: ['Heidelberg', '2018'],
    points: [
      'Corso estivo intensivo di 1 mese, livello C1 (QCER), presso l’Università di Heidelberg.',
    ],
  },
  {
    role: 'Laurea Triennale in Lingue nella Società dell’Informazione',
    org: 'Università di Roma "Tor Vergata"',
    meta: ['Roma & Heidelberg', '2014 – 2018'],
    points: [
      'Voto finale: 110/110.',
      'Programma di scambio Erasmus+ KA1 di 1 anno, Università di Heidelberg (Germania).',
      'Rappresentante degli studenti (anni accademici 2016/2017, 2017/2018).',
      'Linguaggi di programmazione e lingue straniere: HTML, CSS, JavaScript, SQL, tedesco, inglese, spagnolo.',
    ],
  },
  {
    role: 'Diploma — Istituto Tecnico Industriale, Specializzazione Informatica',
    org: 'I.T.I. Lattanzio',
    meta: ['Roma', '2005 – 2010'],
    points: [
      'Linguaggi di programmazione: C++, Java, HTML, PHP.',
      'Materie di specializzazione: infrastruttura IT; amministrazione di sistema (Windows e Linux); reti; cybersecurity; hardware e software; elettronica.',
    ],
  },
];

const certTitleIt: Record<string, string> = {
  'Microsoft Certifications': 'Certificazioni Microsoft',
  'Microsoft Applied Skills': 'Microsoft Applied Skills',
  'Google Professional Certificates': 'Certificati Professionali Google',
  'Other IT Certifications': 'Altre Certificazioni IT',
  'Language Certifications': 'Certificazioni Linguistiche',
};
export const certificationsIt: CertCategory[] = certifications.map((g) => ({
  ...g,
  title: certTitleIt[g.title] ?? g.title,
}));

const skillTitleIt: Record<string, string> = {
  'Cloud Architecture & Advisory': 'Architettura Cloud & Advisory',
  'Cloud & Infrastructure': 'Cloud & Infrastruttura',
  'Security & Compliance': 'Sicurezza & Compliance',
  'AI & Automation': 'IA & Automazione',
  'Data & Analytics': 'Dati & Analytics',
  'Unified Communications': 'Unified Communications',
  'IT Operations & Support': 'IT Operations & Supporto',
  'Development & Tools': 'Sviluppo & Strumenti',
  'Teaching & Training': 'Insegnamento & Formazione',
};
const levelIt: Record<string, string> = {
  Fluent: 'Fluente',
  Advanced: 'Avanzato',
  Intermediate: 'Intermedio',
};
export const technicalSkillsIt: SkillCategory[] = technicalSkills
  .map((g) => ({
    ...g,
    title: skillTitleIt[g.title] ?? g.title,
    skills: g.skills.map((s) => ({ ...s, level: levelIt[s.level] ?? s.level })),
  }))
  // Re-sort by the translated title so categories read alphabetically in each locale.
  .sort((a, b) => a.title.localeCompare(b.title, 'it'));

export const languagesIt: SkillItem[] = [
  { name: 'Italiano', level: 'Nativo' },
  { name: 'Inglese', level: 'C2' },
  { name: 'Spagnolo', level: 'C2' },
  { name: 'Tedesco', level: 'C1' },
];

export const softSkillsIt: string[] = [
  'Adattabile',
  'Mentalità client-first',
  'Attento ai dettagli',
  'Apprendimento rapido',
  'Multitasking',
  'Organizzato',
  'Proattivo',
  'Problem solver',
  'Gioco di squadra',
];
