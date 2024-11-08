import { optional, z } from "zod";

const productValidationSchema = z.object({
  name: z.string().min(1, "product name is required"),
  description: z.string().optional(),
  price: z.number().min(1, "product price is required"),
  category: z.string().min(1, "product category is required"),
});

export const productValidation = {
  productValidationSchema,
};
