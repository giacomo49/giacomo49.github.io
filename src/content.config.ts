import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog: every .md file in src/content/blog/ automatically becomes
 * a /blog/<filename> page and shows up in the article list.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * Projects: same idea, for the portfolio.
 */
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
