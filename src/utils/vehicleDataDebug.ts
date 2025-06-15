
export const logMakesData = (makes: string[], makesError: any) => {
  if (makes.length > 0) {
    console.log('🔍 Makes loaded in component:', makes.length, 'total makes');
    console.log('🔍 All makes in component:', makes);
    const toyotaInMakes = makes.filter(make => 
      make.toLowerCase().includes('toyota')
    );
    console.log('🔍 Toyota makes available in component:', toyotaInMakes);
    
    // Additional debugging - check exact strings
    console.log('🔍 Looking for exact Toyota matches:');
    makes.forEach((make, index) => {
      if (make.toLowerCase().includes('toyota')) {
        console.log(`Found Toyota variant at index ${index}: "${make}" (length: ${make.length})`);
      }
    });
  }
  if (makesError) {
    console.error('❌ Makes loading error:', makesError);
  }
};
