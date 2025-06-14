
/**
 * Calculate KRA duties & costs using CRSP and user input.
 * Depreciation: 1 year = 10%, 2 = 20%, ..., 8+ = 70%
 * Excise: <=1500cc: 25%, >1500cc: 35%, electric: 10%
 * Import Duty: 25% of depreciated CRSP
 * VAT: 16% of (depreciated CRSP + Import Duty + Excise)
 * IDF: 2.25% of depreciated CRSP or min KES 5,000
 * RDL: 2% of depreciated CRSP
 */

export function calculateDepreciationRate(vehicleYear: number) {
  const currentYear = new Date().getFullYear();
  const age = Math.max(0, currentYear - vehicleYear);
  const table = [0, 10, 20, 30, 40, 50, 60, 70, 70];
  return table[Math.min(age, 8)] / 100;
}

export function calculateExcise(engineCapacity: number, fuelType: string, base: number): number {
  if (String(fuelType).toLowerCase() === "electric") {
    return base * 0.10;
  }
  return base * (engineCapacity <= 1500 ? 0.25 : 0.35);
}

export function calculateDuties({
  crsp,
  year,
  engineCapacity,
  fuelType,
  shipping = 0,
}: {
  crsp: number;
  year: number;
  engineCapacity: number;
  fuelType: string;
  shipping?: number;
}) {
  // 1. Depreciation
  const depRate = calculateDepreciationRate(year);
  const depreciatedCrsp = Math.round(crsp * (1 - depRate));

  // 2. Import Duty: 25%
  const importDuty = Math.round(depreciatedCrsp * 0.25);

  // 3. Excise Duty: (engine-based)
  const excise = Math.round(
    calculateExcise(engineCapacity, fuelType, depreciatedCrsp + importDuty)
  );

  // 4. VAT: 16% of (depreciatedCrsp + importDuty + excise)
  const vat = Math.round((depreciatedCrsp + importDuty + excise) * 0.16);

  // 5. IDF: 2.25% or min 5000
  const idf = Math.max(Math.round(depreciatedCrsp * 0.0225), 5000);

  // 6. RDL: 2%
  const rdl = Math.round(depreciatedCrsp * 0.02);

  // 7. Total
  const total =
    importDuty + excise + vat + idf + rdl + depreciatedCrsp + (shipping || 0);

  return {
    crsp,
    depreciatedCrsp,
    importDuty,
    excise,
    vat,
    idf,
    rdl,
    total,
  };
}
