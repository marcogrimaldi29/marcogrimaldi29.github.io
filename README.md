# marcogrimaldi29.com

[![Deploy to GitHub Pages](https://github.com/marcogrimaldi29/marcogrimaldi29.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/marcogrimaldi29/marcogrimaldi29.github.io/actions/workflows/deploy.yml)
[![CI](https://github.com/marcogrimaldi29/marcogrimaldi29.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/marcogrimaldi29/marcogrimaldi29.github.io/actions/workflows/ci.yml)

Source of **[marcogrimaldi29.com](https://marcogrimaldi29.com)**, the personal hub of Marco
Grimaldi: a Cloud Solution Architect and IT Consultant with a parallel life in languages and
teaching. The site gathers certification reviews, study notes and practical resources on cloud
architecture, Microsoft Azure and IT learning.

## What's on the site

| Section                                                   | What you'll find                                                                                                                      |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [About](https://marcogrimaldi29.com/about/)               | Background, professional identity and values                                                                                          |
| [CV](https://marcogrimaldi29.com/cv/)                     | Work experience, education, certifications, languages and technical skills                                                            |
| [Projects](https://marcogrimaldi29.com/projects/)         | Hands-on cloud, data and IT projects, each in its own repository                                                                      |
| [Cert Reviews](https://marcogrimaldi29.com/cert-reviews/) | First-hand reviews of earned certifications: prep strategy, study resources and exam experience                                       |
| [Study Notes](https://marcogrimaldi29.com/study-notes/)   | Structured notes for IT exams (Microsoft, GitHub, ITIL and more) and cloud-architecture deep dives, each published as a separate site |
| [Resources](https://marcogrimaldi29.com/resources/)       | Curated collections for learning German, Microsoft technologies, AI and developer tooling                                             |
| [Contact](https://marcogrimaldi29.com/contact/)           | The best ways to get in touch                                                                                                         |

The whole site is available in **English, Italian, Spanish and German**, and every page can be
searched from the header.

## How it's built

- **[Astro](https://astro.build/)**: a fully static site built from a custom component library,
  with no client-side framework.
- **Internationalization**: English at the root, with Italian (`/it/`), Spanish (`/es/`) and
  German (`/de/`) versions linked through `hreflang` alternates.
- **Search**: [Pagefind](https://pagefind.app/) builds a static full-text index at build time.
- **Discovery**: an XML sitemap index that also covers the study-note sites served under the
  same domain, plus an [RSS feed](https://marcogrimaldi29.com/feed.xml) of reviews and resources.
- **Hosting**: [GitHub Pages](https://pages.github.com/) with a custom domain, deployed by
  GitHub Actions on every change to `master`.
- **Quality checks**: type checking, ESLint, Stylelint, Prettier and a full build on every pull
  request, plus advisory Lighthouse, pa11y accessibility and link audits.

## Privacy

The site sets no cookies and builds no tracking profiles. Visits are counted with
[Umami](https://umami.is/), a privacy-friendly analytics tool that uses no cookies. The
[privacy page](https://marcogrimaldi29.com/privacy/) explains what is and isn't collected.

## Contact

Please use the [contact page](https://marcogrimaldi29.com/contact/) on the site.

## Copyright

© Marco Grimaldi. All rights reserved. The site's content, design and code are published here for
transparency and are not licensed for reuse. Third-party logos and trademarks belong to their
respective owners and are credited on the pages where they appear.
