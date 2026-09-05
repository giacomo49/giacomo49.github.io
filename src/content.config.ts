import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog: ogni file .md in src/content/blog/ diventa automaticamente
 * una pagina /blog/<nome-file> e compare nella lista degli articoli.
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
 * Progetti: stessa logica, per il portfolio.
 */
const progetti = defineCollection({
  loader: glob({ base: './src/content/progetti', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, progetti };
