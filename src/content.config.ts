import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { locales } from '@i18n/ui';

const localeEnum = z.enum(locales);

/** Jekyll frontmatter often has empty (null) list fields — coerce to []. */
const stringList = z.preprocess((v) => v ?? [], z.array(z.string()));

/** Shared SEO frontmatter — validated at build time (fixes audit SEO-1 drift). */
const seoSchema = z
  .object({
    type: z.string().optional(),
    keywords: stringList.optional(),
  })
  .optional();

/** Cert reviews + resource posts. Per-locale folders: content/posts/{en,it,es,de}/ */
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    last_modified_at: z.coerce.date().optional(),
    excerpt: z.string().optional(),
    description: z.string().optional(),
    categories: stringList,
    tags: stringList,
    permalink: z.string(),
    canonical_url: z.string().url().optional(),
    locale: localeEnum.default('en'),
    /** Shared key linking the same article across locales. */
    translationKey: z.string().optional(),
    draft: z.boolean().default(false),
    seo: seoSchema,
  }),
});

/** Landing/hub pages (study-notes, cert-reviews, resources). */
// Landing pages (study-notes, cert-reviews, resources) live in the `posts`
// collection — they are posts with fixed permalinks — so no separate collection.

export const collections = { posts };
