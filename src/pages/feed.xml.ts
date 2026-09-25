import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { profile } from '@data/profile';

/**
 * `/feed.xml` — the RSS feed the Jekyll site published via jekyll-feed. The URL
 * was live (and is what any existing reader is subscribed to), so it is
 * reproduced here rather than dropped.
 *
 * English only, matching the old feed: the locale-prefixed articles are new in
 * this build, and a single mixed-language feed would be worse than none.
 */
export const GET: APIRoute = async (context) => {
  const site = context.site ?? new URL('https://marcogrimaldi29.com');

  const posts = (await getCollection('posts', ({ data }) => !data.draft && data.locale === 'en'))
    .slice()
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: profile.title,
    description: profile.description,
    site,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      // `permalink` is the article's real (section-nested) path, e.g.
      // /cert-reviews/microsoft-az-900/ — the same URL the sitemap lists.
      link: post.data.permalink,
      pubDate: post.data.date,
      description: post.data.description ?? post.data.excerpt,
      categories: post.data.categories,
    })),
    customData: '<language>en</language>',
  });
};
