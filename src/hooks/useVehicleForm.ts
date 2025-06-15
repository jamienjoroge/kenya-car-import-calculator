
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

  const handleMakeChange = (value: string) => {
    console.log('Make changing to:', value);
    form.setValue("make", value);
    // Clear dependent fields when make changes
    form.setValue("model", "");
    form.setValue("year", "");
  };

  const handleModelChange = (value: string) => {
    console.log('Model changing to:', value);
    form.setValue("model", value);
    // Clear year when model changes
    form.setValue("year", "");
  };

  const handleYearChange = (value: string) => {
    console.log('Year changing to:', value);
    form.setValue("year", value);
  };

  return {
    form,
    selectedMake,
    selectedModel,
    selectedYear,
    shippingCostInput,
    handleMakeChange,
    handleModelChange,
    handleYearChange,
  };
}
