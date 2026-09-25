/**
 * Spanish CV data — mirrors cv.ts. Experience/education bullets, group titles,
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

export const experienceEs: CvEntry[] = [
  {
    role: 'Cloud Solution Architect',
    org: 'Concentrix',
    meta: ['A Coruña (Remoto)', '2025 – Presente'],
    points: [
      'Asesoramiento a los clientes en calidad de Cloud Solution Architect (CSA) sobre Resiliencia, Fiabilidad, Optimización de costes y Gobernanza.',
      'Dirección de talleres de resiliencia para ayudar a los clientes a construir arquitecturas cloud fiables y de alta disponibilidad.',
      'Realización de evaluaciones formales de riesgos y diseño de planes de Recuperación ante Desastres, Continuidad del Negocio y Respuesta a Incidentes Graves para minimizar el impacto de las interrupciones.',
      'Impartición de talleres de Optimización de costes, FinOps y Gobernanza, ayudando a los clientes a controlar el gasto cloud y a garantizar el cumplimiento normativo.',
      'Colaboración con los equipos de los clientes para entender sus necesidades arquitectónicas y ofrecer soluciones a medida.',
      'Formación de los clientes en las mejores prácticas para construir entornos resilientes, eficientes en costes y bien gobernados, en línea con el Azure Well-Architected Framework y el Cloud Adoption Framework.',
    ],
  },
  {
    role: 'L2 Managed Services Engineer & Technical Knowledge Manager',
    org: 'NTT DATA',
    meta: ['Madrid (Remoto)', '2023 – 2025'],
    points: [
      'Soporte técnico de Nivel 2 para Microsoft Teams, M365 y entornos Azure, además de la infraestructura de Cloud Voice.',
      'Resolución de problemas complejos de reuniones de Teams, llamadas, integraciones, red e infraestructura cloud, con escalado a N3 o al proveedor cuando es necesario.',
      'Supervisión del estado y el rendimiento de los sistemas, con identificación y resolución proactiva de posibles incidencias.',
      'Colaboración con equipos de TI y proveedores para implementar cambios o resolver problemas complejos en Teams y Cloud Voice.',
      'Gestión del ciclo de vida de la base de conocimiento: redacción, revisión y mantenimiento de documentación, artículos y guías de resolución de problemas.',
    ],
  },
  {
    role: 'App/Cloud Support Associate',
    org: 'Accenture',
    meta: ['Sevilla (Remoto)', '2021 – 2023'],
    points: [
      'Soporte de TI en alemán, inglés y español por teléfono, correo electrónico y web.',
      'Resolución de incidencias y solicitudes de servicio con herramientas ITSM siguiendo los procesos ITIL.',
      'Competente en Azure, Azure AD, Active Directory, Exchange, IaaS, Identity and Access Management, Intune, MFA, Microsoft 365, redes, PaaS, PowerShell, SaaS, SAP, SCCM, seguridad y cumplimiento, Windows 10/11.',
    ],
  },
  {
    role: 'Profesor de Alemán y Colaborador del proyecto Erasmus+ KA2',
    org: 'Idiomas Carlos V',
    meta: ['Sevilla (Presencial)', '2021'],
    points: [
      'Docencia de alemán para el programa de Educador Infantil del Ministerio de Trabajo de Baja Sajonia.',
      'Contribución a la gestión del proyecto Erasmus+ KA2.',
    ],
  },
  {
    role: 'Profesor de Lenguas Extranjeras',
    org: 'Studiamo Insieme',
    meta: ['Roma (Híbrido)', '2019 – 2021'],
    points: [
      'Enseñanza y tutorización de estudiantes en alemán, italiano, inglés y español, de forma presencial y remota.',
      'Especialización en estudiantes con Necesidades Educativas Especiales.',
    ],
  },
  {
    role: 'Personal de Recepción, Oficina Erasmus+',
    org: 'Universidad de Roma "Tor Vergata"',
    meta: ['Roma (Presencial)', '2016'],
    points: [
      'Apoyo a estudiantes internacionales entrantes y salientes, en línea y en persona.',
      'Gestión de comunicaciones, candidaturas y relaciones con las universidades asociadas.',
    ],
  },
  {
    role: 'Técnico de Sonido y Músico',
    org: 'Freelance',
    meta: ['Roma (Presencial)', '2010 – 2018'],
    points: [
      'Preparación, organización y gestión de los aspectos técnicos y organizativos de eventos musicales en directo, de principio a fin.',
      'Actuación en espectáculos artísticos y multiinstrumentales en eventos de entretenimiento.',
      'Grabación, mezcla y masterización de pistas de audio en estudio.',
    ],
  },
];

export const educationEs: CvEntry[] = [
  {
    role: 'Máster en Literatura Italiana, Filología Moderna y Lingüística',
    org: 'Universidad de Roma "Tor Vergata"',
    meta: ['Roma y Maguncia', '2018 – 2022'],
    points: [
      'Calificación final: 110/110 con matrícula de honor.',
      'Programa de intercambio Erasmus+ KA1 de 1 año, Universidad JGU de Maguncia (Alemania).',
    ],
  },
  {
    role: 'Máster en Formación del Profesorado (MAES)',
    org: 'Universidad Pablo de Olavide',
    meta: ['Sevilla', '2020 – 2021'],
    points: ['Prácticas en el IES San Isidoro, Sevilla.'],
  },
  {
    role: 'Curso Internacional de Lengua y Cultura Alemanas',
    org: 'Universidad de Heidelberg',
    meta: ['Heidelberg', '2018'],
    points: [
      'Curso intensivo de verano de 1 mes, nivel C1 (MCER), en la Universidad de Heidelberg.',
    ],
  },
  {
    role: 'Grado en Lenguas en la Sociedad de la Información',
    org: 'Universidad de Roma "Tor Vergata"',
    meta: ['Roma y Heidelberg', '2014 – 2018'],
    points: [
      'Calificación final: 110/110.',
      'Programa de intercambio Erasmus+ KA1 de 1 año, Universidad de Heidelberg (Alemania).',
      'Representante de estudiantes (cursos 2016/2017, 2017/2018).',
      'Lenguajes de programación e idiomas: HTML, CSS, JavaScript, SQL, alemán, inglés, español.',
    ],
  },
  {
    role: 'Título — Instituto Técnico Industrial, Especialidad en Informática',
    org: 'I.T.I. Lattanzio',
    meta: ['Roma', '2005 – 2010'],
    points: [
      'Lenguajes de programación: C++, Java, HTML, PHP.',
      'Asignaturas de especialidad: infraestructura de TI; administración de sistemas (Windows y Linux); redes; ciberseguridad; hardware y software; electrónica.',
    ],
  },
];

const certTitleEs: Record<string, string> = {
  'Microsoft Certifications': 'Certificaciones Microsoft',
  'Microsoft Applied Skills': 'Microsoft Applied Skills',
  'Google Professional Certificates': 'Certificados Profesionales de Google',
  'Other IT Certifications': 'Otras Certificaciones de TI',
  'Language Certifications': 'Certificaciones de Idiomas',
};
export const certificationsEs: CertCategory[] = certifications.map((g) => ({
  ...g,
  title: certTitleEs[g.title] ?? g.title,
}));

const skillTitleEs: Record<string, string> = {
  'Cloud Architecture & Advisory': 'Arquitectura Cloud y Consultoría',
  'Cloud & Infrastructure': 'Cloud e Infraestructura',
  'Security & Compliance': 'Seguridad y Cumplimiento',
  'AI & Automation': 'IA y Automatización',
  'Data & Analytics': 'Datos y Analítica',
  'Unified Communications': 'Comunicaciones Unificadas',
  'IT Operations & Support': 'Operaciones y Soporte de TI',
  'Development & Tools': 'Desarrollo y Herramientas',
  'Teaching & Training': 'Docencia y Formación',
};
const levelEs: Record<string, string> = {
  Fluent: 'Fluido',
  Advanced: 'Avanzado',
  Intermediate: 'Intermedio',
};
export const technicalSkillsEs: SkillCategory[] = technicalSkills
  .map((g) => ({
    ...g,
    title: skillTitleEs[g.title] ?? g.title,
    skills: g.skills.map((s) => ({ ...s, level: levelEs[s.level] ?? s.level })),
  }))
  // Re-sort by the translated title so categories read alphabetically in each locale.
  .sort((a, b) => a.title.localeCompare(b.title, 'es'));

export const languagesEs: SkillItem[] = [
  { name: 'Italiano', level: 'Nativo' },
  { name: 'Inglés', level: 'C2' },
  { name: 'Español', level: 'C2' },
  { name: 'Alemán', level: 'C1' },
];

export const softSkillsEs: string[] = [
  'Adaptable',
  'Mentalidad orientada al cliente',
  'Atento al detalle',
  'Aprendizaje rápido',
  'Multitarea',
  'Organizado',
  'Proactivo',
  'Resolución de problemas',
  'Trabajo en equipo',
];
