
import { z } from "zod";

export const vehicleFormSchema = z.object({
  make: z.string().min(1, "Select a make"),
  model: z.string().min(1, "Select a model"),
  year: z.string().min(1, "Select a year"),
  shipping: z
    .string()
    .optional()
    .transform((v) => (v === "" ? undefined : Number(v)))
    .refine((v) => v === undefined || (!isNaN(v) && v >= 0), {
      message: "Shipping must be a positive number",
    }),
});

export type VehicleFormValues = z.infer<typeof vehicleFormSchema>;
