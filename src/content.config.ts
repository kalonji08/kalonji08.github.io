import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    toc: z.boolean().optional(),
    pin: z.boolean().optional(),
    hidden: z.boolean().optional(),
  }),
});

export const collections = { blog };
