import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sorted = posts
    .filter(p => !p.data.hidden)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Dr. Kalonji A. Tshisekedi',
    description: 'Genomics, computational biology, and reflections on life — from the desk of Dr. Kalonji A. Tshisekedi.',
    site: context.site!.href,
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || post.data.title,
      link: `/blog/${post.id}/`,
      categories: [...(post.data.categories || []), ...(post.data.tags || [])],
    })),
  });
}
