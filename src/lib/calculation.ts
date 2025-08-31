

/**
 * Calculate KRA duties & costs using CRSP and user input.
 * Updated for 2025 based on official KRA methodology:
 * - CRSP already includes age adjustments (no manual depreciation)
 * - Import Duty: 25% of CRSP
 * - Excise Duty: Rate varies by engine size, applied on (CRSP + Import Duty)
 * - IDF: 3.5% of CRSP
 * - RDL: 2% of CRSP
 * - VAT: 16% of (CRSP + Import Duty + Excise + IDF + RDL)
 */

export function calculateExciseRate(engineCapacity: number, fuelType: string): number {
  const fuelTypeLower = String(fuelType).toLowerCase();
  
  // Special rates for hybrids and EVs
  if (fuelTypeLower.includes('hybrid')) {
    console.log('Applying 10% excise rate for hybrid vehicle');
    return 0.10;
  }
  
  if (fuelTypeLower.includes('electric') || fuelTypeLower.includes('ev')) {
    console.log('Applying 0% excise rate for electric vehicle');
    return 0.00;
  }
  
  // Engine capacity-based rates for petrol/diesel
  if (engineCapacity <= 1500) {
    console.log('Applying 20% excise rate for ≤1500cc vehicle');
    return 0.20;
  } else {
    console.log('Applying 25% excise rate for >1500cc vehicle');
    return 0.25;
  }
}

export function calculateImportDuty(fuelType: string, base: number): number {
  const fuelTypeLower = String(fuelType).toLowerCase();
  console.log(`Calculating import duty for fuel type: ${fuelType} (normalized: ${fuelTypeLower})`);
  
  // 25% import duty for all vehicles (updated from previous rates)
  console.log('Applying 25% import duty for all vehicles');
  return base * 0.25;
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
  // CRSP is used as-is (no manual depreciation as it's already included)
  const valueForDuty = crsp;

  // 1. Import Duty: 25% of CRSP
  const importDuty = Math.round(calculateImportDuty(fuelType, valueForDuty));

  // 2. Excise Duty: Rate varies by engine size, applied on (CRSP + Import Duty)
  const exciseRate = calculateExciseRate(engineCapacity, fuelType);
  const exciseBase = valueForDuty + importDuty;
  const excise = Math.round(exciseBase * exciseRate);

  // 3. IDF: 3.5% of CRSP
  const idf = Math.round(valueForDuty * 0.035);

  // 4. RDL: 2% of CRSP
  const rdl = Math.round(valueForDuty * 0.02);

  // 5. VAT: 16% of (CRSP + Import Duty + Excise + IDF + RDL)
  const vatBase = valueForDuty + importDuty + excise + idf + rdl;
  const vat = Math.round(vatBase * 0.16);

  // 6. Total taxes
  const totalTaxes = importDuty + excise + vat + idf + rdl;
  
  // 7. Total landed cost
  const total = valueForDuty + totalTaxes + (shipping || 0);

  console.log('Calculation breakdown (2025 methodology):', {
    crsp: valueForDuty,
    importDuty,
    exciseRate,
    exciseBase,
    excise,
    idf,
    rdl,
    vatBase,
    vat,
    totalTaxes,
    total
  });

  return {
    crsp: valueForDuty,
    depreciatedCrsp: valueForDuty, // Keep for backward compatibility
    depreciationRate: 0, // No manual depreciation applied
    importDuty,
    excise,
    vat,
    idf,
    rdl,
    total,
  };
}

