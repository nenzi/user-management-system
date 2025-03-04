import { z } from 'zod';

export const paginationSchema = z.object({
  pageNumber: z.coerce.number().int().min(0).optional().default(1),
  pageSize: z.coerce.number().int().min(0).optional().default(10),
});

export type PaginationData = z.infer<typeof paginationSchema>;
