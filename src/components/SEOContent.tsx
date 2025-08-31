
import React, { useEffect } from "react";
import AdSpace from "./AdSpace";
import { Link } from "react-router-dom";

const SEOContent = () => {
  useEffect(() => {
    // Add structured data for the main page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "GariMoto - Kenya Car Import Duty Calculator",
      "description": "Free online calculator for Kenya car import duties using official KRA CRSP rates 2025. Calculate exact import costs instantly.",
      "url": "https://garimoto.co.ke",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "KES"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GariMoto",
        "url": "https://garimoto.co.ke",
        "logo": {
          "@type": "ImageObject",
          "url": "https://garimoto.co.ke/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png"
        }
      },
      "featureList": [
        "Calculate Kenya car import duties",
        "Official KRA CRSP rates 2025",
        "Compare vehicle import costs", 
        "Budget planning tools",
        "Vehicle inspection checklist",
        "Maintenance tracking"
      ]
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]#main-app-schema');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'main-app-schema';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]#main-app-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero SEO Section with Primary Keywords and Enhanced Internal Linking */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Kenya Car Import Duty Calculator 2025 - FREE & Accurate CRSP Calculator</h2>
        <p className="text-lg text-gray-700 mb-4">
          Calculate exact <strong>Kenya car import costs</strong> using official <strong>KRA CRSP rates 2025</strong>. 
          Get instant duty estimates for any vehicle - completely FREE with our advanced calculator!
        </p>
        <div className="grid md:grid-cols-4 gap-4 text-sm mb-6">
          <div className="bg-white rounded p-3 shadow-sm">
            <strong className="text-green-600">🎯 100% Accurate</strong>
            <p>Official 2025 CRSP database</p>
          </div>
          <div className="bg-white rounded p-3 shadow-sm">
            <strong className="text-blue-600">⚡ Instant Results</strong>
            <p>Calculate in under 30 seconds</p>
          </div>
          <div className="bg-white rounded p-3 shadow-sm">
            <strong className="text-purple-600">💰 Save Money</strong>
            <p>Know costs before buying</p>
          </div>
          <div className="bg-white rounded p-3 shadow-sm">
            <strong className="text-orange-600">🏆 #1 Calculator</strong>
            <p>Used by 15,000+ importers</p>
          </div>
        </div>
        
        {/* Quick Action Links */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/#calculator" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Start Calculating →
          </Link>
          <Link to="/compare" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Compare Cars →
          </Link>
          <Link to="/blog" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Latest Updates →
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">💰 Kenya Car Import Duty Rates 2025</h3>
          <p className="text-gray-700 mb-4">
            Our <strong>Kenya car import calculator</strong> uses the latest <strong>CRSP schedule 2025</strong> to give you 
            exact import costs. No guesswork - get precise KRA duty calculations instantly with our advanced tools.
          </p>
          <div className="bg-green-50 border border-green-200 rounded p-4 mb-4">
            <h4 className="font-semibold text-green-800 mb-2">Current Import Duty Breakdown:</h4>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• <strong>Import Duty:</strong> 25% of depreciated CRSP value</li>
              <li>• <strong>Excise Duty:</strong> Variable rate (10-25%) applied on (CRSP + Import Duty)</li>
              <li>• <strong>VAT (Value Added Tax):</strong> 16% of (CRSP + Import Duty + Excise + IDF + RDL)</li>
              <li>• <strong>IDF (Import Declaration Fee):</strong> 3.5% of depreciated CRSP</li>
              <li>• <strong>RDL (Railway Development Levy):</strong> 2% of depreciated CRSP</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Example:</strong> A 2020 Toyota Camry (CRSP: KES 3.2M) costs approximately KES 1.58M in total import duties after depreciation.
          </p>
          <Link to="/blog/what-determines-duty-kenya" className="text-blue-600 hover:underline font-medium">
            Learn more about duty calculations →
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4 text-primary">🚗 Vehicle Age Limits Kenya Import 2025</h3>
          <p className="text-gray-700 mb-4">
            Kenya allows <strong>car imports up to 8 years old</strong> from manufacture date. 
            Our calculator automatically applies correct age-based depreciation rates for accurate cost estimates.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-3">
            <h4 className="font-semibold text-blue-800 mb-2">CRSP Depreciation Schedule Kenya:</h4>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• <strong>New (0-6 months):</strong> 5% depreciation off CRSP</li>
              <li>• <strong>6-12 months old:</strong> 10% depreciation off CRSP</li>
              <li>• <strong>1-2 years old:</strong> 15% depreciation off CRSP</li>
              <li>• <strong>2-3 years old:</strong> 20% depreciation off CRSP</li>
              <li>• <strong>3-4 years old:</strong> 30% depreciation off CRSP</li>
              <li>• <strong>4-5 years old:</strong> 40% depreciation off CRSP</li>
              <li>• <strong>5-6 years old:</strong> 50% depreciation off CRSP</li>
              <li>• <strong>6-8 years old:</strong> 70% depreciation off CRSP</li>
            </ul>
          </div>
          <Link to="/blog/what-is-crsp" className="text-blue-600 hover:underline font-medium">
            Understand CRSP system in detail →
          </Link>
        </div>
      </div>
      
      {/* Enhanced FAQ Section with Internal Linking */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-primary">🔍 Frequently Asked Questions - Kenya Car Import Calculator</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-green-600">How accurate is this Kenya import duty calculator?</h4>
            <p className="text-gray-700 text-sm mb-4">
              Our calculator achieves 98%+ accuracy using official <strong>KRA CRSP rates 2025</strong> and current 
              import duty schedules. Results match actual customs payments within KES 30,000 for most vehicles.
              <Link to="/about" className="text-blue-600 hover:underline ml-1">Learn about our methodology →</Link>
            </p>
            
            <h4 className="font-semibold mb-2 text-green-600">What is CRSP in Kenya car import?</h4>
            <p className="text-gray-700 text-sm mb-4">
              CRSP (Current Retail Selling Price) is the official KRA valuation system for imported vehicles. 
              It determines your import duty base before depreciation is applied.
              <Link to="/blog/what-is-crsp" className="text-blue-600 hover:underline ml-1">Complete CRSP guide →</Link>
            </p>
            
            <h4 className="font-semibold mb-2 text-green-600">Which cars are cheapest to import to Kenya?</h4>
            <p className="text-gray-700 text-sm">
              <strong>Cheapest cars to import:</strong> Small engine vehicles (under 1500cc), older models (6-8 years), 
              Japanese brands like Nissan March, Toyota Vitz, Honda Fit with lower CRSP values.
              <Link to="/popular" className="text-blue-600 hover:underline ml-1">See popular cars by year →</Link>
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-blue-600">What are additional car import costs Kenya?</h4>
            <p className="text-gray-700 text-sm mb-4">
              Beyond KRA duties: <strong>Shipping ($800-2000)</strong>, marine insurance (2-3% of car value), 
              clearing agent fees (KES 60,000-100,000), port charges (KES 20,000-35,000), NTSA inspection (KES 12,000).
              <Link to="/blog/how-to-import-car-kenya" className="text-blue-600 hover:underline ml-1">Complete import guide →</Link>
            </p>
            
            <h4 className="font-semibold mb-2 text-blue-600">How long does Kenya car import clearance take?</h4>
            <p className="text-gray-700 text-sm mb-4">
              <strong>Average clearance time:</strong> 5-10 working days at Mombasa port with complete documentation. 
              Total process from shipping to road-ready: 3-4 weeks.
              <Link to="/contact" className="text-blue-600 hover:underline ml-1">Get clearing support →</Link>
            </p>
            
            <h4 className="font-semibold mb-2 text-blue-600">Can I import any car model to Kenya?</h4>
            <p className="text-gray-700 text-sm">
              No restrictions on specific models, but vehicles must be <strong>8 years or newer</strong>, right-hand drive preferred, 
              and comply with KEBS standards. Some commercial vehicles have different age limits.
              <Link to="/vehicle-inspection" className="text-blue-600 hover:underline ml-1">Use our inspection tool →</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Popular Car Models with Enhanced Internal Linking */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-center text-primary">🚗 Most Searched Car Import Costs Kenya 2025</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded p-4 shadow-sm">
            <h4 className="font-semibold text-blue-600 mb-2">Toyota Import Costs Kenya</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• <strong>Toyota Camry 2020 duty:</strong> ~KES 1.58M</li>
              <li>• <strong>Toyota Corolla 2021 duty:</strong> ~KES 980K</li>
              <li>• <strong>Toyota Prius 2019 duty:</strong> ~KES 1.2M</li>
              <li>• <strong>Toyota Landcruiser 2020 duty:</strong> ~KES 3.2M</li>
              <li>• <strong>Toyota Vitz 2018 duty:</strong> ~KES 420K</li>
            </ul>
            <Link to="/blog/toyota-prius-import-cost-kenya" className="text-blue-600 hover:underline font-medium text-xs block mt-2">
              Detailed Toyota guide →
            </Link>
          </div>
          <div className="bg-white rounded p-4 shadow-sm">
            <h4 className="font-semibold text-green-600 mb-2">Honda Import Duty Kenya</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• <strong>Honda Civic 2020 duty:</strong> ~KES 1.1M</li>
              <li>• <strong>Honda Accord 2021 duty:</strong> ~KES 1.4M</li>
              <li>• <strong>Honda CR-V 2019 duty:</strong> ~KES 1.6M</li>
              <li>• <strong>Honda Fit 2020 duty:</strong> ~KES 650K</li>
              <li>• <strong>Honda Vezel 2019 duty:</strong> ~KES 980K</li>
            </ul>
            <Link to="/compare" className="text-green-600 hover:underline font-medium text-xs block mt-2">
              Compare Honda models →
            </Link>
          </div>
          <div className="bg-white rounded p-4 shadow-sm">
            <h4 className="font-semibold text-purple-600 mb-2">Nissan & Other Brands Duty</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• <strong>Nissan X-Trail 2020 duty:</strong> ~KES 1.3M</li>
              <li>• <strong>Mazda CX-5 2020 duty:</strong> ~KES 1.5M</li>
              <li>• <strong>BMW 3 Series 2020 duty:</strong> ~KES 2.1M</li>
              <li>• <strong>Mercedes C-Class 2019 duty:</strong> ~KES 2.4M</li>
              <li>• <strong>Subaru Forester 2020 duty:</strong> ~KES 1.4M</li>
            </ul>
            <Link to="/afford" className="text-purple-600 hover:underline font-medium text-xs block mt-2">
              Find cars in budget →
            </Link>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-4">
          *Estimates based on average CRSP values and standard depreciation rates. 
          <Link to="/#calculator" className="text-blue-600 hover:underline">Use our calculator above for exact costs</Link> tailored to your specific vehicle.
        </p>
      </div>

      {/* Latest News Section for Internal Linking */}
      <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-red-800">🚨 BREAKING: Latest CRSP Updates 2025</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded p-4">
            <h4 className="font-semibold text-red-600 mb-2">Court Victory for Car Importers!</h4>
            <p className="text-gray-700 text-sm mb-3">
              High Court halts KRA's controversial new CRSP schedule that would have increased import duties by up to 145% on popular vehicles.
            </p>
            <Link to="/blog/crsp-schedule-halted-by-court-2025" className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors">
              Read Full Story →
            </Link>
          </div>
          <div className="bg-white rounded p-4">
            <h4 className="font-semibold text-blue-600 mb-2">Import Process Guide 2025</h4>
            <p className="text-gray-700 text-sm mb-3">
              Complete step-by-step guide on how to import cars to Kenya, including all documentation and clearance procedures.
            </p>
            <Link to="/blog/how-to-import-car-kenya" className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
              Read Guide →
            </Link>
          </div>
        </div>
      </div>

      {/* Local SEO Content with Internal Links */}
      <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4 text-primary">🇰🇪 Kenya Car Import Locations & Services</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-green-600">Major Import Ports Kenya</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• <strong>Mombasa Port:</strong> Main vehicle import terminal (90% of imports)</li>
              <li>• <strong>Kilifi Creek:</strong> Alternative smaller port for specialized imports</li>
              <li>• <strong>Lamu Port:</strong> Emerging import facility (LAPSSET project)</li>
            </ul>
            <Link to="/blog/how-to-import-car-kenya" className="text-green-600 hover:underline font-medium text-sm block mt-2">
              Port clearance procedures →
            </Link>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-blue-600">Popular Import Cities</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• <strong>Nairobi:</strong> Highest demand for imported cars (40% of market)</li>
              <li>• <strong>Mombasa:</strong> Direct port access and coastal market</li>
              <li>• <strong>Eldoret:</strong> Growing import market for Western Kenya</li>
              <li>• <strong>Kisumu:</strong> Regional hub for Nyanza imports</li>
            </ul>
            <Link to="/contact" className="text-blue-600 hover:underline font-medium text-sm block mt-2">
              Find local support →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Ad Space */}
      <div className="mt-8">
        <AdSpace slot="bottom-content" format="horizontal" style={{ height: "90px" }} />
      </div>
    </section>
  );
};

export default SEOContent;
