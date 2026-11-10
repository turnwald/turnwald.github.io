import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const theses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/theses' }),
  schema: z.object({ title: z.string(), level: z.enum(['Bachelor', 'Master']), area: z.string(), status: z.enum(['Available', 'Closed']), summary: z.string() })
});
export const collections = { theses };
