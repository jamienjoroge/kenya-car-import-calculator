
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { vehicleFormSchema, type VehicleFormValues } from "@/lib/vehicleFormSchema";

export function useVehicleForm() {
  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(vehicleFormSchema),
    defaultValues: {
      make: "",
      model: "",
      year: "",
      shipping: undefined,
    },
  });

  const selectedMake = form.watch("make");
  const selectedModel = form.watch("model");
  const selectedYear = form.watch("year");
  const shippingCostInput = form.watch("shipping");

  return {
    form,
    selectedMake,
    selectedModel,
    selectedYear,
    shippingCostInput,
  };
}
