
/**
 * Calculate KRA duties & costs using CRSP and user input.
 * Depreciation: 1 year = 10%, 2 = 20%, ..., 8+ = 70%
 * Import Duty: 35% for diesel/petrol, 25% for electric cars and commercial trucks
 * Excise Duty: 20% of (CRSP + Import Duty)
 * VAT: 16% of (CRSP + Import Duty + Excise Duty)
 * IDF: 2.25% of CRSP or min KES 5,000
 * RDL: 2% of depreciated CRSP
 */

export function calculateDepreciationRate(vehicleYear: number) {
  const currentYear = new Date().getFullYear();
  const age = Math.max(0, currentYear - vehicleYear);
  const table = [0, 10, 20, 30, 40, 50, 60, 70, 70];
  return table[Math.min(age, 8)] / 100;
}

export function calculateImportDuty(fuelType: string, base: number): number {
  if (String(fuelType).toLowerCase() === "electric") {
    return base * 0.25; // 25% for electric cars
  }
  // 35% for diesel/petrol cars (default)
  return base * 0.35;
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

  // 2. Import Duty: 35% for petrol/diesel, 25% for electric
  const importDuty = Math.round(
    calculateImportDuty(fuelType, depreciatedCrsp)
  );

  // 3. Excise Duty: 20% of (CRSP + Import Duty)
  const excise = Math.round((depreciatedCrsp + importDuty) * 0.20);

  // 4. VAT: 16% of (CRSP + Import Duty + Excise)
  const vat = Math.round((depreciatedCrsp + importDuty + excise) * 0.16);

  // 5. IDF: 2.25% of CRSP or min 5000
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
