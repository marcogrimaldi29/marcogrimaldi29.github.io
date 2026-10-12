/** Author / site identity — replaces the scattered author/footer blocks in _config.yml. */

export const profile = {
  name: 'Marco Grimaldi',
  domain: 'marcogrimaldi29.com',
  title: 'marcogrimaldi29.com',
  subtitle: 'Personal Hub of Marco Grimaldi',
  // Job title alone — shown on the home hero status line and the sidebar card.
  role: 'Cloud Solution Architect',
  // Default og:image / twitter:image. Generated from public/site-mark.svg by
  // `npm run favicons`, at the 1200x630 Open Graph aspect ratio.
  // (The old `avatar` field pointed at a deleted file and was unused — the real
  // avatar is imported as a bundled asset in BrandCard.astro.)
  logo: '/assets/images/social-card.png',
  description:
    "Marco Grimaldi's personal and learning hub for IT, cloud computing, certifications, and language teaching.",
  social: {
    linkedin: 'marco-grimaldi29',
    github: 'marcogrimaldi29',
  },
  links: [
    { label: 'Duolingo', icon: 'language', url: 'https://www.duolingo.com/profile/MarcoGrimm' },
    { label: 'GitHub', icon: 'github', url: 'https://github.com/marcogrimaldi29' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/marco-grimaldi29/' },
    {
      label: 'Microsoft',
      icon: 'microsoft',
      url: 'https://learn.microsoft.com/en-us/users/marcogrimaldi-0029/',
    },
  ],
} as const;
