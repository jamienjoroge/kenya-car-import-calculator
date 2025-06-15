
/**
 * Calculate KRA duties & costs using CRSP and user input.
 * Depreciation: 0-6 months = 5%, >6 months = 10%, >1<=2 years = 15%, >2<=3 years = 20%, >3<=4 years = 30%, >4<=5 years = 40%, >5<=6 years = 50%, >6<=7 years = 60%, >7<=8 years = 65%
 * Import Duty: 35% for diesel/petrol, 25% for electric cars and commercial trucks
 * Excise Duty: 20% of (CRSP + Import Duty)
 * VAT: 16% of (CRSP + Import Duty + Excise Duty)
 * IDF: 2.25% of CRSP or min KES 5,000
 * RDL: 2% of depreciated CRSP
 */

export function calculateDepreciationRate(vehicleYear: number) {
  const currentYear = new Date().getFullYear();
  const ageInYears = currentYear - vehicleYear;
  
  console.log(`Vehicle year: ${vehicleYear}, Current year: ${currentYear}, Age in years: ${ageInYears}`);
  
  // Simplified age-based depreciation (no overlapping ranges)
  if (ageInYears < 0.5) {
    console.log('Applying 5% depreciation (0-6 months)');
    return 0.05; // 5% for 0-6 months
  } else if (ageInYears <= 1) {
    console.log('Applying 10% depreciation (>6 months to 1 year)');
    return 0.10; // 10% for over 6 months to 1 year
  } else if (ageInYears <= 2) {
    console.log('Applying 15% depreciation (>1 to 2 years)');
    return 0.15; // 15% for >1 <=2 years
  } else if (ageInYears <= 3) {
    console.log('Applying 20% depreciation (>2 to 3 years)');
    return 0.20; // 20% for >2 <=3 years
  } else if (ageInYears <= 4) {
    console.log('Applying 30% depreciation (>3 to 4 years)');
    return 0.30; // 30% for >3 <=4 years
  } else if (ageInYears <= 5) {
    console.log('Applying 40% depreciation (>4 to 5 years)');
    return 0.40; // 40% for >4 <=5 years
  } else if (ageInYears <= 6) {
    console.log('Applying 50% depreciation (>5 to 6 years)');
    return 0.50; // 50% for >5 <=6 years
  } else if (ageInYears <= 7) {
    console.log('Applying 60% depreciation (>6 to 7 years)');
    return 0.60; // 60% for >6 <=7 years
  } else {
    console.log('Applying 65% depreciation (>7 years)');
    return 0.65; // 65% for vehicles older than 7 years
  }
}

export function calculateImportDuty(fuelType: string, base: number): number {
  const fuelTypeLower = String(fuelType).toLowerCase();
  console.log(`Calculating import duty for fuel type: ${fuelType} (normalized: ${fuelTypeLower})`);
  
  if (fuelTypeLower === "electric") {
    console.log('Applying 25% import duty for electric vehicle');
    return base * 0.25; // 25% for electric cars
  }
  // 35% for diesel/petrol cars (default)
  console.log('Applying 35% import duty for petrol/diesel vehicle');
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
    depreciationRate: depRate,
    importDuty,
    excise,
    vat,
    idf,
    rdl,
    total,
  };
}
