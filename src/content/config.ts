import { defineCollection, z } from 'astro:content';

const entriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    sourceType: z.enum(['book', 'article', 'video', 'conversation', 'other']),
    sourceTitle: z.string(),
    sourceURL: z.string().url().optional(),
    tags: z.array(z.string()),
    impactLevel: z.enum(['small', 'medium', 'large']),
  }),
});

export const collections = {
  entries: entriesCollection,
};
