import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    status: z.string().default('Active'),
    stack: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
      .default([]),
    order: z.number().default(0),
    draft: z.boolean().default(false)
  })
});

export const collections = { posts, projects };
