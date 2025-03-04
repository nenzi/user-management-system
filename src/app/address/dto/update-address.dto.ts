import { z } from 'zod';

export const updateAddressSchema = z.object({
  street: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
});
export type UpdateAddressDto = z.infer<typeof updateAddressSchema>;
