import { z } from 'zod';

export const createPostSchema = z.object({
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

export type CreatePostDto = z.infer<typeof createPostSchema>;
