

/**
 * Calculate KRA duties & costs using CRSP and user input.
 * Updated depreciation: 7+ years = 70% depreciation
 * Import Duty: 25% for all vehicles
 * Excise Duty: 25% of depreciated CRSP
 * VAT: 16% of depreciated CRSP  
 * IDF: 2.25% of depreciated CRSP
 * RDL: 2% of depreciated CRSP
 */

export function calculateDepreciationRate(vehicleYear: number) {
  const currentYear = new Date().getFullYear();
  const ageInYears = currentYear - vehicleYear;
  
  console.log(`Vehicle year: ${vehicleYear}, Current year: ${currentYear}, Age in years: ${ageInYears}`);
  
  // Updated depreciation schedule based on accurate KRA rules
  if (ageInYears < 0.5) {
    console.log('Applying 5% depreciation (0-6 months)');
    return 0.05;
  } else if (ageInYears <= 1) {
    console.log('Applying 10% depreciation (>6 months to 1 year)');
    return 0.10;
  } else if (ageInYears <= 2) {
    console.log('Applying 15% depreciation (>1 to 2 years)');
    return 0.15;
  } else if (ageInYears <= 3) {
    console.log('Applying 20% depreciation (>2 to 3 years)');
    return 0.20;
  } else if (ageInYears <= 4) {
    console.log('Applying 30% depreciation (>3 to 4 years)');
    return 0.30;
  } else if (ageInYears <= 5) {
    console.log('Applying 40% depreciation (>4 to 5 years)');
    return 0.40;
  } else if (ageInYears <= 6) {
    console.log('Applying 50% depreciation (>5 to 6 years)');
    return 0.50;
  } else {
    console.log('Applying 70% depreciation (7+ years)');
    return 0.70; // 70% for vehicles 7+ years old
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
  // 1. Depreciation
  const depRate = calculateDepreciationRate(year);
  const depreciatedCrsp = Math.round(crsp * (1 - depRate));

  // 2. Import Duty: 25% of depreciated CRSP
  const importDuty = Math.round(calculateImportDuty(fuelType, depreciatedCrsp));

  // 3. Excise Duty: 25% of depreciated CRSP (updated from 20%)
  const excise = Math.round(depreciatedCrsp * 0.25);

  // 4. VAT: 16% of depreciated CRSP (updated calculation base)
  const vat = Math.round(depreciatedCrsp * 0.16);

  // 5. IDF: 2.25% of depreciated CRSP
  const idf = Math.round(depreciatedCrsp * 0.0225);

  // 6. RDL: 2% of depreciated CRSP
  const rdl = Math.round(depreciatedCrsp * 0.02);

  // 7. Total
  const total = importDuty + excise + vat + idf + rdl + depreciatedCrsp + (shipping || 0);

  console.log('Calculation breakdown:', {
    originalCrsp: crsp,
    depreciationRate: depRate,
    depreciatedCrsp,
    importDuty,
    excise,
    vat,
    idf,
    rdl,
    total
  });

  return {
    crsp,
    depreciatedCrsp,
    depreciationRate: depRate,
    importDuty,
    excise,
    vat,
    idf,
    rdl,
    total,
  };
}

