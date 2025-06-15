
import { z } from "zod";

const currentYear = new Date().getFullYear();
const minAllowedYear = currentYear - 8;

export const vehicleFormSchema = z.object({
  make: z.string().min(1, "Select a make"),
  model: z.string().min(1, "Select a model"),
  year: z.string()
    .min(1, "Select a year")
    .refine((yearStr) => {
      const year = parseInt(yearStr);
      return year >= minAllowedYear && year <= currentYear;
    }, {
      message: `Year must be between ${minAllowedYear} and ${currentYear}`,
    }),
  shipping: z
    .string()
    .optional()
    .transform((v) => (v === "" ? undefined : Number(v)))
    .refine((v) => v === undefined || (!isNaN(v) && v >= 0), {
      message: "Shipping must be a positive number",
    }),
});

export type VehicleFormValues = z.infer<typeof vehicleFormSchema>;
