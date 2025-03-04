import { z } from 'zod';

export const updatePostSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export type UpdatePostDto = z.infer<typeof updatePostSchema>;
