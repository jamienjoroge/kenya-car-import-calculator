
import { z } from "zod";

const currentYear = new Date().getFullYear();
const minValidYear = currentYear - 8;

export const vehicleFormSchema = z.object({
  make: z.string().min(1, "Select a make"),
  model: z.string().min(1, "Select a model"),
  year: z
    .string()
    .min(1, "Select a year")
    .refine((val) => {
      const yearNum = parseInt(val);
      return yearNum >= minValidYear && yearNum <= currentYear;
    }, {
      message: `Year must be between ${minValidYear} and ${currentYear}`,
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
