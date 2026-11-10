import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const theses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/theses' }),
  schema: z.object({
    topicId: z.string().regex(/^(ST|LT)\d+$/), title: z.string(),
    levels: z.array(z.enum(['Bachelor', 'Master'])).min(1), levelNote: z.string(),
    area: z.string(), category: z.string(),
    status: z.enum(['Open', 'Open by discussion']), availabilityNote: z.string(), summary: z.string()
  })
});
export const collections = { theses };