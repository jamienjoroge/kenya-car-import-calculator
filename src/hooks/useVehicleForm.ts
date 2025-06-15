
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { vehicleFormSchema, type VehicleFormValues } from "@/lib/vehicleFormSchema";
import { useEffect } from "react";

export function useVehicleForm() {
  const form = useForm<VehicleFormValues>({
    resolver: zodResolver(vehicleFormSchema),
    defaultValues: {
      make: "",
      model: "",
      year: "",
      shipping: undefined,
    },
    mode: "onChange", // Enable real-time validation
  });

  const selectedMake = form.watch("make");
  const selectedModel = form.watch("model");
  const selectedYear = form.watch("year");
  const shippingCostInput = form.watch("shipping");

  // Trigger validation when year changes
  useEffect(() => {
    if (selectedYear) {
      form.trigger("year");
    }
  }, [selectedYear, form]);

  return {
    form,
    selectedMake,
    selectedModel,
    selectedYear,
    shippingCostInput,
  };
}
