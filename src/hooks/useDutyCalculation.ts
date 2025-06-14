
import { useState, useEffect } from "react";
import { calculateDuties } from "@/lib/calculation";

export function useDutyCalculation(
  crspRecord: any,
  crspError: any,
  selectedMake: string,
  selectedModel: string,
  selectedYear: string,
  shippingCostInput: number | undefined
) {
  const [breakdown, setBreakdown] = useState<ReturnType<typeof calculateDuties> | null>(null);

  useEffect(() => {
    if (
      crspRecord &&
      !crspError &&
      selectedMake &&
      selectedModel &&
      selectedYear
    ) {
      const shippingNumber =
        shippingCostInput === undefined || shippingCostInput === null
          ? 0
          : Number(shippingCostInput);
      const res = calculateDuties({
        crsp: crspRecord.crsp,
        year: Number(selectedYear),
        engineCapacity: crspRecord.engine_capacity,
        fuelType: crspRecord.fuel_type,
        shipping: shippingNumber,
      });
      setBreakdown(res);
    } else {
      setBreakdown(null);
    }
  }, [
    crspRecord,
    crspError,
    selectedMake,
    selectedModel,
    selectedYear,
    shippingCostInput,
  ]);

  return { breakdown, setBreakdown };
}
