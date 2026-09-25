/**
 * CV data — extracted from the legacy _pages/cv.md (810 lines, 154 inline
 * styles). Data now lives here; presentation lives in cv.astro + CvCard +
 * SkillBar (audit CQ-1, CQ-2, CQ-6).
 */
import { lastCommitDate } from '@data/gitDate';

export interface CvEntry {
  role: string;
  org: string;
  meta: string[];
  points: string[];
}

export interface CertItem {
  name: string;
  url?: string;
  /** Optional institution logo (local path or URL); overrides the group brand/🏅 bullet. */
  logo?: string;
}

export interface CertCategory {
  icon: string;
  title: string;
  /** Optional vendor — when set, cert items use the brand logo instead of the 🏅 bullet. */
  brand?: 'Microsoft' | 'Google';
  items: CertItem[];
}

export interface CertBadge {
  /** PNG filename stem — resolves to /public/badges/<code>-badge.png. */
  code: string;
  /** Credential name — used for the image alt text and the verify tooltip. */
  name: string;
  /** Public verification page; omitted when a credential has none. */
  url?: string;
}

export interface SkillItem {
  name: string;
  /** One of: Native, C2, C1 (languages) / Fluent, Advanced, Intermediate (skills). */
  level: string;
}

export interface SkillCategory {
  icon: string;
  title: string;
  skills: SkillItem[];
}

/**
 * When the CV was last revised — shown as an "updated" pill under the title.
 * Resolved at build time from the last Git commit that touched the CV files,
 * falling back to the latest commit overall, then to a fixed date when Git is
 * unavailable. (CI needs full history — actions/checkout `fetch-depth: 0`.)
 */
export const cvUpdated =
  lastCommitDate(
    'src/data/cv.ts',
    'src/data/cv-it.ts',
    'src/data/cv-es.ts',
    'src/data/cv-de.ts',
    'src/pages/cv.astro',
    'src/pages/it/cv.astro',
    'src/pages/es/cv.astro',
    'src/pages/de/cv.astro',
  ) ??
  lastCommitDate() ??
  new Date('2026-06-16T12:00:00');

export const experience: CvEntry[] = [
  {
    role: 'Cloud Solution Architect',
    org: 'Concentrix',
    meta: ['A Coruña (Remote)', '2025 – Present'],
    points: [
      'Serve as a Cloud Solution Architect (CSA) in an advisory role, guiding clients on Resiliency, Reliability, Cost Optimization, and Governance.',
      'Lead resiliency workshops to help clients build reliable, highly available cloud architectures.',
      'Conduct formal risk assessments and design Disaster Recovery, Business Continuity, and Major Incident Response Plans to minimize the impact of disruptions.',
      'Deliver Cost Optimization, FinOps, and Governance workshops, helping clients control cloud spend and stay compliant.',
      'Collaborate with client teams to understand their architectural needs and provide tailored solutions.',
      'Educate clients on best practices for building resilient, cost-efficient, and well-governed environments, aligned with the Azure Well-Architected and Cloud Adoption Frameworks.',
    ],
  },
  {
    role: 'L2 Managed Services Engineer & Technical Knowledge Manager',
    org: 'NTT DATA',
    meta: ['Madrid (Remote)', '2023 – 2025'],
    points: [
      'Provide Level 2 technical support for Microsoft Teams, M365 and Azure environment, along with Cloud Voice infrastructure.',
      'Troubleshoot complex issues related to Teams meetings, calling, integrations, network and cloud infrastructure, escalating to L3 or vendors when needed.',
      'Monitor system health and performance, proactively identifying and addressing potential issues.',
      'Collaborate with IT teams and vendors to implement changes or troubleshoot complex issues in Teams and Cloud Voice.',
      'Manage knowledge base lifecycle: writing, reviewing and maintaining documentation, knowledge articles and troubleshooting guides.',
    ],
  },
  {
    role: 'App/Cloud Support Associate',
    org: 'Accenture',
    meta: ['Seville (Remote)', '2021 – 2023'],
    points: [
      'Provide IT support in German, English, and Spanish via phone, email, and web.',
      'Resolve incidents and service requests using ITSM tools following ITIL processes.',
      'Skilled in Azure, Azure AD, Active Directory, Exchange, IaaS, Identity and Access Management, Intune, MFA, Microsoft 365, Networking, PaaS, PowerShell, SaaS, SAP, SCCM, Security & Compliance, Windows 10/11.',
    ],
  },
  {
    role: 'German Teacher & Erasmus+ KA2 Project Contributor',
    org: 'Idiomas Carlos V',
    meta: ['Seville (On Site)', '2021'],
    points: [
      'Teach German for the Childcare Educator Program of the Lower Saxony Ministry of Labor.',
      'Contribute to Erasmus+ KA2 project management.',
    ],
  },
  {
    role: 'Foreign Language Teacher',
    org: 'Studiamo Insieme',
    meta: ['Rome (Hybrid)', '2019 – 2021'],
    points: [
      'Teach and tutor in German, Italian, English, and Spanish in remote and on site settings.',
      'Specialized in learners with Special Educational Needs.',
    ],
  },
  {
    role: 'Front Desk Assistant, Erasmus+ Office',
    org: 'University of Rome "Tor Vergata"',
    meta: ['Rome (On Site)', '2016'],
    points: [
      'Support incoming and outgoing international students both online and in person.',
      'Manage communication, applications and liaise with partner universities.',
    ],
  },
  {
    role: 'Audio Engineer & Musician',
    org: 'Freelance',
    meta: ['Rome (On Site)', '2010 – 2018'],
    points: [
      'Prepare, organize and manage the technical and organizational aspects of musical live events from onset to completion.',
      'Perform artistic and multi-instrumental shows at entertainment events.',
      'Record, mix and master audio tracks in studio settings.',
    ],
  },
];

export const education: CvEntry[] = [
  {
    role: 'Master’s Degree in Italian Literature, Modern Philology & Linguistics',
    org: 'University of Rome "Tor Vergata"',
    meta: ['Rome & Mainz', '2018 – 2022'],
    points: [
      'Final grade: 110/110 Summa Cum Laude.',
      '1-year Erasmus+ KA1 Exchange Program, University JGU Mainz (Germany).',
    ],
  },
  {
    role: 'Master’s Degree in Teacher Training (MAES)',
    org: 'University Pablo de Olavide',
    meta: ['Seville', '2020 – 2021'],
    points: ['Internship at IES San Isidoro, Seville.'],
  },
  {
    role: 'International Course of German Language and Culture',
    org: 'University of Heidelberg',
    meta: ['Heidelberg', '2018'],
    points: ['Intensive 1-month C1-level summer course (CEFR) at the University of Heidelberg.'],
  },
  {
    role: 'Bachelor’s Degree in Languages in the Information Society',
    org: 'University of Rome "Tor Vergata"',
    meta: ['Rome & Heidelberg', '2014 – 2018'],
    points: [
      'Final grade: 110/110.',
      '1-year Erasmus+ KA1 Exchange Program, University of Heidelberg (Germany).',
      'Student representative (academic year: 2016/2017, 2017/2018).',
      'Programming languages and foreign languages: HTML, CSS, JavaScript, SQL, German, English, Spanish.',
    ],
  },
  {
    role: 'Baccalaureate — Institute of Technology, Computer Science Specialization',
    org: 'I.T.I. Lattanzio',
    meta: ['Rome', '2005 – 2010'],
    points: [
      'Programming languages: C++, Java, HTML, PHP.',
      'Specialization topics: IT infrastructure; System administration (Windows & Linux); Networking; Cybersecurity; Hardware & Software; Electronics.',
    ],
  },
];

const ms = 'https://learn.microsoft.com/api/credentials/share';
const SHARING_ID = '910D3083CD18E3A4';
const msVerify = (credId: string, locale = 'en-us') =>
  `${ms}/${locale}/MarcoGrimaldi-0029/${credId}?sharingId=${SHARING_ID}`;

/**
 * Canonical Microsoft exam-certification list — the single source that feeds
 * both the CV "Microsoft Certifications" group below and the home/CV badge row
 * (`certBadges`). `badge` is the 1-based slot in the badge row (most → least
 * advanced); omit it when there is no /public/badges/<code>-badge.png. To add a
 * cert, add one entry here — it flows to the CV list and (with `badge`) the row.
 */
interface MicrosoftCert {
  code: string;
  title: string;
  year: number;
  /** MS Learn share id → verification URL. Omit when not yet available (badge/list entry renders unlinked). */
  credId?: string;
  badge?: number;
}

const microsoftCerts: MicrosoftCert[] = [
  {
    code: 'DP-700',
    title: 'Microsoft Certified: Fabric Data Engineer Associate',
    year: 2026,
    credId: 'C920E77F6327FF1F',
    badge: 3,
  },
  {
    code: 'DP-600',
    title: 'Microsoft Certified: Fabric Analytics Engineer Associate',
    year: 2026,
    credId: '38B17BA0808706AA',
    badge: 4,
  },
  {
    code: 'AZ-305',
    title: 'Microsoft Certified: Azure Solutions Architect Expert',
    year: 2026,
    credId: '3A7124C273B93B9A',
    badge: 1,
  },
  {
    code: 'MS-721',
    title: 'Microsoft 365 Certified: Collaboration Communications Systems Engineer Associate',
    year: 2024,
    credId: '87F3712A1939D1EB',
    badge: 6,
  },
  {
    code: 'AI-102',
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    year: 2024,
    credId: 'ED8D5449484E0E49',
    badge: 5,
  },
  {
    code: 'AZ-104',
    title: 'Microsoft Certified: Azure Administrator Associate',
    year: 2023,
    credId: '22FAAC5CE067B849',
    badge: 2,
  },
  {
    code: 'MS-700',
    title: 'Microsoft 365 Certified: Teams Administrator Associate',
    year: 2023,
    credId: 'ACD012742AAC1C77',
    badge: 7,
  },
  {
    code: 'MS-900',
    title: 'Microsoft 365 Certified: Fundamentals',
    year: 2023,
    credId: '74BA22913AF0D37C',
    badge: 8,
  },
  {
    code: 'DP-900',
    title: 'Microsoft Certified: Azure Data Fundamentals',
    year: 2023,
    credId: '96F556DAB850B8CE',
    badge: 11,
  },
  {
    code: 'AI-900',
    title: 'Microsoft Certified: Azure AI Fundamentals',
    year: 2022,
    credId: '1CDBB6A39F288836',
    badge: 9,
  },
  {
    code: 'AZ-900',
    title: 'Microsoft Certified: Azure Fundamentals',
    year: 2022,
    credId: '5F20CC63EF49A780',
    badge: 10,
  },
  {
    code: 'PL-900',
    title: 'Microsoft Certified: Power Platform Fundamentals',
    year: 2022,
    credId: '589C8B87C28BCDF4',
    badge: 12,
  },
  {
    code: 'SC-900',
    title: 'Microsoft Certified: Security, Compliance & Identity Fundamentals',
    year: 2022,
    credId: '3AC5BFB19E06BE2A',
    badge: 13,
  },
];

/**
 * Badge row shown on the home hero and the CV Certifications panel. Microsoft
 * entries derive from `microsoftCerts` (ordered by their `badge` slot); ITIL is
 * appended — its badge links to its PeopleCert verification page.
 */
export const certBadges: CertBadge[] = [
  ...microsoftCerts
    .filter((c): c is MicrosoftCert & { badge: number } => c.badge != null)
    .sort((a, b) => a.badge - b.badge)
    .map((c) => ({ code: c.code, name: c.title, ...(c.credId && { url: msVerify(c.credId) }) })),
  {
    code: 'ITIL-4-Foundation',
    name: 'ITIL 4 Foundation',
    url: 'https://badges.peoplecert.org/Badge/en/B93726C5-8B49-4E6E-B17C-8421A7727D55',
  },
];

export const certifications: CertCategory[] = [
  {
    icon: '🪟',
    title: 'Microsoft Certifications',
    brand: 'Microsoft',
    items: microsoftCerts.map((c) => ({
      name: `${c.code} – ${c.title} (${c.year})`,
      ...(c.credId && { url: msVerify(c.credId) }),
    })),
  },
  {
    icon: '⚙️',
    title: 'Microsoft Applied Skills',
    brand: 'Microsoft',
    items: [
      {
        name: 'Implement a Real-Time Intelligence solution with Microsoft Fabric (2026)',
        url: msVerify('4192AF310DC399CC'),
      },
      {
        name: 'Streamline business workflows with AI chat (2026)',
        url: msVerify('5DD7FEC497ACA2D1'),
      },
      {
        name: 'Get started with Azure management tasks (2026)',
        url: msVerify('ED7684D7E86D2EEC'),
      },
      {
        name: 'Deploy cloud-native apps using Azure Container Apps (2026)',
        url: msVerify('334B98F06ECE2E39'),
      },
      {
        name: 'Defend against cyberthreats with Microsoft Defender XDR (2026)',
        url: msVerify('37681EA077397999'),
      },
      {
        name: 'Migrate SQL Server workloads to Azure SQL Database (2026)',
        url: msVerify('A6956A066FE7A131', 'en-gb'),
      },
      {
        name: 'Secure storage for Azure Files and Azure Blob Storage (2025)',
        url: msVerify('43A169C60BF93CE2'),
      },
      {
        name: 'Configure secure access to your workloads using Azure networking (2025)',
        url: msVerify('2D626F59872CEE72', 'en-gb'),
      },
      {
        name: 'Implement retention, eDiscovery, and Communication Compliance in Microsoft Purview (2025)',
        url: msVerify('E584DFFBBF564647'),
      },
      {
        name: 'Get started with identities and access using Microsoft Entra (2025)',
        url: msVerify('4D6B11F896F57408'),
      },
      {
        name: 'Deploy and configure Azure Monitor (2025)',
        url: msVerify('B1A48535B1D53364'),
      },
    ],
  },
  {
    icon: '🔤',
    title: 'Google Professional Certificates',
    brand: 'Google',
    items: [
      {
        name: 'Cybersecurity Specialization (2024)',
        url: 'https://www.coursera.org/account/accomplishments/specialization/IJR8VBC9PFIK',
      },
      {
        name: 'Automation with Python (2021)',
        url: 'https://www.coursera.org/account/accomplishments/professional-cert/4YCD4YBD73HB',
      },
      {
        name: 'Data Analytics (2021)',
        url: 'https://www.coursera.org/account/accomplishments/professional-cert/WWP79TZL8WRX',
      },
      {
        name: 'Project Management (2021)',
        url: 'https://www.coursera.org/account/accomplishments/professional-cert/RJ856W9X3F9R',
      },
      {
        name: 'IT Support (2021)',
        url: 'https://www.coursera.org/account/accomplishments/professional-cert/NCLR33CHTFKV',
      },
    ],
  },
  {
    icon: '📡',
    title: 'Other IT Certifications',
    items: [
      {
        name: 'ITIL® 4 Foundation - PeopleCert (2026)',
        logo: '/logos/it-practices.svg',
        // Same PeopleCert badge the certifications panel links (see certBadges).
        url: 'https://badges.peoplecert.org/Badge/en/B93726C5-8B49-4E6E-B17C-8421A7727D55',
      },
      { name: 'SSCA® "Elite" SIP Training — SIP School (2025)', logo: '/logos/sip-phone.svg' },
    ],
  },
  {
    icon: '🗣️',
    title: 'Language Certifications',
    items: [
      {
        name: 'EOI Español para Extranjeros C2 — Escuela Oficial de Idiomas, Gobierno de Canarias (2025)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/S%C3%ADmbolo_del_Gobierno_de_Canarias.svg',
      },
      {
        name: 'EOI English C2 — Escuela Oficial de Idiomas, Gobierno de Canarias (2025)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/S%C3%ADmbolo_del_Gobierno_de_Canarias.svg',
      },
      {
        name: 'EOI English C1 — Escuela Oficial de Idiomas, Gobierno de Canarias (2024)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/S%C3%ADmbolo_del_Gobierno_de_Canarias.svg',
      },
      {
        name: 'Goethe-Zertifikat C1 (German) — Goethe Institut (2020)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Logo_Goethe-Institut.png',
      },
      {
        name: 'DELE C1 (Spanish) — Instituto Cervantes (2018)',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Logotipo_del_Instituto_Cervantes.svg',
      },
    ],
  },
];

export const languages: SkillItem[] = [
  { name: 'Italian', level: 'Native' },
  { name: 'English', level: 'C2' },
  { name: 'Spanish', level: 'C2' },
  { name: 'German', level: 'C1' },
];

export const technicalSkills: SkillCategory[] = [
  {
    icon: '🤖',
    title: 'AI & Automation',
    skills: [
      { name: 'AI & Azure AI Services', level: 'Advanced' },
      { name: 'DevOps & CI/CD (GitHub Actions)', level: 'Intermediate' },
      { name: 'Generative AI & Azure AI Foundry', level: 'Intermediate' },
      { name: 'Microsoft 365 & GitHub Copilot', level: 'Advanced' },
      { name: 'Microsoft Power Platform', level: 'Intermediate' },
      { name: 'PowerShell', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'Azure Monitor & Observability', level: 'Advanced' },
      { name: 'Cloud (IaaS, PaaS, SaaS)', level: 'Fluent' },
      { name: 'Computer Networking', level: 'Advanced' },
      { name: 'Containerization & Virtualization', level: 'Intermediate' },
      { name: 'Microsoft 365', level: 'Fluent' },
      { name: 'Microsoft Azure', level: 'Fluent' },
      { name: 'Microsoft Entra ID & Active Directory', level: 'Fluent' },
    ],
  },
  {
    icon: '🏛️',
    title: 'Cloud Architecture & Advisory',
    skills: [
      { name: 'Cloud Governance', level: 'Advanced' },
      { name: 'Cost Optimization & FinOps', level: 'Advanced' },
      { name: 'Resiliency, BC & DR', level: 'Fluent' },
      { name: 'Solution Architecture', level: 'Fluent' },
      { name: 'Technical Workshops & Advisory', level: 'Fluent' },
      { name: 'Well-Architected & Cloud Adoption Frameworks', level: 'Fluent' },
    ],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    skills: [
      { name: 'Data Analytics', level: 'Advanced' },
      { name: 'Data Engineering (Lakehouse & Spark)', level: 'Intermediate' },
      { name: 'KQL & Real-Time Analytics', level: 'Intermediate' },
      { name: 'Microsoft Fabric', level: 'Advanced' },
      { name: 'Microsoft Power BI', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
    ],
  },
  {
    icon: '💻',
    title: 'Development & Tools',
    skills: [
      { name: 'Bash', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'HTML & CSS', level: 'Advanced' },
      { name: 'JavaScript & TypeScript', level: 'Intermediate' },
      { name: 'Wireshark', level: 'Intermediate' },
    ],
  },
  {
    icon: '🛠️',
    title: 'IT Operations & Support',
    skills: [
      { name: 'Agile & Project Management', level: 'Intermediate' },
      { name: 'Incident & Major Incident Management', level: 'Fluent' },
      { name: 'ITSM & ITIL', level: 'Advanced' },
      { name: 'Knowledge Management', level: 'Fluent' },
      { name: 'Service Desk & Technical Support', level: 'Fluent' },
      { name: 'Troubleshooting', level: 'Fluent' },
    ],
  },
  {
    icon: '🔐',
    title: 'Security & Compliance',
    skills: [
      { name: 'Cloud Security', level: 'Advanced' },
      { name: 'Cybersecurity', level: 'Advanced' },
      { name: 'Identity & Access Management (IAM)', level: 'Advanced' },
      { name: 'Microsoft Defender XDR & Purview', level: 'Advanced' },
      { name: 'Risk Assessment & Compliance', level: 'Advanced' },
    ],
  },
  {
    icon: '🎓',
    title: 'Teaching & Training',
    skills: [
      { name: 'Adult & Special Education', level: 'Fluent' },
      { name: 'Applied Linguistics', level: 'Fluent' },
      { name: 'English Language Teaching', level: 'Advanced' },
      { name: 'German Language Teaching', level: 'Advanced' },
      { name: 'Italian Language Teaching', level: 'Fluent' },
      { name: 'Spanish Language Teaching', level: 'Advanced' },
    ],
  },
  {
    icon: '📡',
    title: 'Unified Communications',
    skills: [
      { name: 'Cloud Voice', level: 'Fluent' },
      { name: 'Microsoft Teams', level: 'Fluent' },
      { name: 'Session Border Controller', level: 'Advanced' },
      { name: 'Session Initiation Protocol (SIP)', level: 'Advanced' },
      { name: 'Voice over IP (VoIP)', level: 'Advanced' },
    ],
  },
];

export const softSkills: string[] = [
  'Adaptable',
  'Client-first mentality',
  'Detail-oriented',
  'Fast-paced learner',
  'Multitasker',
  'Organized',
  'Proactive',
  'Problem solver',
  'Team player',
];
