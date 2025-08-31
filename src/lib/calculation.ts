

/**
 * Calculate KRA duties & costs using CRSP and user input.
 * Updated for 2025 based on official KRA methodology:
 * - Apply age-based depreciation to CRSP value
 * - Import Duty: 25% of depreciated CRSP
 * - Excise Duty: Rate varies by engine size, applied on (depreciated CRSP + Import Duty)
 * - IDF: 3.5% of depreciated CRSP
 * - RDL: 2% of depreciated CRSP
 * - VAT: 16% of (depreciated CRSP + Import Duty + Excise + IDF + RDL)
 */

export function calculateDepreciationRate(year: number): number {
  const currentYear = new Date().getFullYear();
  const vehicleAge = currentYear - year;
  
  // Official KRA depreciation rates based on vehicle age
  if (vehicleAge < 0.5) return 0.05;      // 0-6 months: 5%
  if (vehicleAge < 1) return 0.10;        // 6-12 months: 10%
  if (vehicleAge < 2) return 0.15;        // 1-2 years: 15%
  if (vehicleAge < 3) return 0.20;        // 2-3 years: 20%
  if (vehicleAge < 4) return 0.30;        // 3-4 years: 30%
  if (vehicleAge < 5) return 0.40;        // 4-5 years: 40%
  if (vehicleAge < 6) return 0.50;        // 5-6 years: 50%
  return 0.70;                            // 6+ years: 70%
}

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
  // Apply age-based depreciation to CRSP
  const depreciationRate = calculateDepreciationRate(year);
  const valueForDuty = Math.round(crsp * (1 - depreciationRate));

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
    originalCrsp: crsp,
    vehicleAge: new Date().getFullYear() - year,
    depreciationRate,
    depreciatedCrsp: valueForDuty,
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
    originalCrsp: crsp,
    depreciatedCrsp: valueForDuty,
    depreciationRate,
    importDuty,
    excise,
    vat,
    idf,
    rdl,
    total,
  };
}

