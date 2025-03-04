import { z } from 'zod';

export const createAddressSchema = z.object({
  street: z.string(),
  state: z.string(),
  country: z.string(),
  userId: z.number(),
});
export type CreateAddressDto = z.infer<typeof createAddressSchema>;
