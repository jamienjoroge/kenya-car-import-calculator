
import VehicleImportCalculator from "@/components/VehicleImportCalculator";
import AdSpace from "@/components/AdSpace";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import SEOContent from "@/components/SEOContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOPermalinks from "@/components/SEOPermalinks";
import RecentCalculations from "@/components/RecentCalculations";
import TrustIndicators from "@/components/TrustIndicators";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQSchema from "@/components/FAQSchema";
import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";

const Index = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      <SEOPermalinks 
        title="Import Duty Calculator Kenya – Official KRA CRSP Calculator 2025"
        description="FREE car import duty calculator Kenya using official KRA CRSP rates. Calculate exact import costs instantly. Updated Sept 2025 with latest rates."
        keywords="import duty calculator kenya, kra crsp calculator, kenya car import duty, kra duty calculator 2025, car import cost kenya"
        canonicalUrl="https://garimoto.co.ke/"
        type="website"
      />

      {/* Top Banner Ad Space */}
      <div className="w-full py-2 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <AdSpace slot="top-banner" format="horizontal" style={{ height: "90px" }} />
        </div>
      </div>

      {/* Enhanced Schema Markup */}
      <FAQSchema faqs={[
        {
          question: "How is car import duty calculated in Kenya?",
          answer: "Car import duty in Kenya is calculated using CRSP (Current Retail Selling Price) with age-based depreciation, then applying Import Duty (25%), Excise Duty (varies by engine size), IDF (2.25%), RDL (2%), and VAT (16%)."
        },
        {
          question: "Do I use year of manufacture or registration?",
          answer: "KRA uses the year of first registration for calculating age-based depreciation on CRSP values. The 8-year rule also applies to first registration year for import eligibility."
        },
        {
          question: "What taxes are included in KRA duty?",
          answer: "Total KRA taxes include Import Duty (25%), Excise Duty (varies), Import Declaration Fee (2.25%), Railway Development Levy (2%), and VAT (16%) calculated in sequence."
        },
        {
          question: "Is depreciation applied manually?",
          answer: "No, KRA applies automatic age-based depreciation to CRSP: 5% per year for first 8 years, then 10% per year thereafter, with maximum 70% depreciation."
        }
      ]} />
      
      {/* Software Application Schema */}
      <SoftwareApplicationSchema
        name="Kenya Import Duty Calculator"
        description="Free calculator to estimate car import duty in Kenya using official KRA CRSP values. Calculate import duty, VAT, excise tax and total landing costs instantly."
        url="https://garimoto.co.ke/calculator"
        applicationCategory="FinanceApplication"
      />

      {/* Navigation Header */}
      <Navigation />

      {/* Ultra Compact Hero Section */}
      <div className="pt-2 pb-2">
        <HeroSection />
      </div>

      {/* Main Content Grid - Calculator Takes Center Stage */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Calculator - Prominently Featured */}
          <div className="lg:col-span-3 order-1">
            <div id="calculator" className="-mt-8">
              <VehicleImportCalculator />
            </div>
          </div>

            {/* Enhanced Sidebar with Better Internal Linking */}
          <div className="lg:col-span-1 order-2 space-y-4">
            <AdSpace slot="sidebar-ad" format="rectangle" style={{ width: "100%", height: "250px" }} />
            
            {/* Trust Indicators */}
            <TrustIndicators />
            
            {/* Recent Calculations Widget */}
            {/* Internal Link to New Blog Article */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Learn How We Calculate
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Understand the exact steps behind our calculations with CRSP, depreciation, and all KRA taxes.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/blog/calculate-car-import-duty-kenya-2025">
                  Read Our Complete Guide
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </div>
            
            {/* Enhanced Quick Tools with SEO-optimized internal links */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-lg mb-3 text-primary">Vehicle Import Tools</h3>
              <div className="space-y-2">
                <Link to="/compare" className="block p-3 bg-blue-50 rounded hover:bg-blue-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔄</span>
                    <div>
                      <div className="font-medium text-sm">Compare Import Costs</div>
                      <div className="text-xs text-gray-600">Compare multiple vehicles</div>
                    </div>
                  </div>
                </Link>
                <Link to="/afford" className="block p-3 bg-green-50 rounded hover:bg-green-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💰</span>
                    <div>
                      <div className="font-medium text-sm">Budget Calculator</div>
                      <div className="text-xs text-gray-600">Find cars in your budget</div>
                    </div>
                  </div>
                </Link>
                <Link to="/popular" className="block p-3 bg-purple-50 rounded hover:bg-purple-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📊</span>
                    <div>
                      <div className="font-medium text-sm">Popular Cars 2025</div>
                      <div className="text-xs text-gray-600">Trending vehicle imports</div>
                    </div>
                  </div>
                </Link>
                <Link to="/blog" className="block p-3 bg-orange-50 rounded hover:bg-orange-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📰</span>
                    <div>
                      <div className="font-medium text-sm">Import News & Guides</div>
                      <div className="text-xs text-gray-600">Latest CRSP updates</div>
                    </div>
                  </div>
                </Link>
                <Link to="/vehicle-inspection" className="block p-3 bg-yellow-50 rounded hover:bg-yellow-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔍</span>
                    <div>
                      <div className="font-medium text-sm">Vehicle Inspection</div>
                      <div className="text-xs text-gray-600">Pre-purchase checklist</div>
                    </div>
                  </div>
                </Link>
                <Link to="/maintenance-schedule" className="block p-3 bg-indigo-50 rounded hover:bg-indigo-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🔧</span>
                    <div>
                      <div className="font-medium text-sm">Maintenance Tracker</div>
                      <div className="text-xs text-gray-600">Service schedules</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Enhanced Featured Content */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-4">
              <h4 className="font-bold mb-2">🆕 September 2025 Update!</h4>
              <p className="text-sm mb-3">Latest KRA CRSP updates & what it means for importers</p>
              <Link to="/blog/kra-crsp-september-2025-update" className="bg-white text-blue-600 px-3 py-1 rounded text-sm font-semibold hover:bg-blue-50 transition-colors">
                Read Latest Update →
              </Link>
            </div>

            {/* Internal Link Navigation */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h4 className="font-semibold mb-3 text-gray-800">Quick Navigation</h4>
              <div className="space-y-2 text-sm">
                <Link to="/about" className="block text-blue-600 hover:underline">About GariMoto</Link>
                <Link to="/contact" className="block text-blue-600 hover:underline">Contact Support</Link>
                <Link to="/sitemap" className="block text-blue-600 hover:underline">Site Map</Link>
                <Link to="/privacy" className="block text-blue-600 hover:underline">Privacy Policy</Link>
                <Link to="/terms" className="block text-blue-600 hover:underline">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mid-content Ad Space */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <AdSpace slot="mid-content" format="horizontal" style={{ height: "90px" }} />
      </div>

      {/* Feature Cards with Enhanced Internal Linking */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <FeatureCards />
        
        {/* Additional Internal Linking Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4 text-center text-primary">Explore More Car Import Tools</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog/how-to-import-car-kenya" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-green-600 mb-2">📖 Import Guide 2025</h4>
              <p className="text-sm text-gray-600">Complete step-by-step process for importing cars to Kenya</p>
            </Link>
            <Link to="/blog/toyota-prius-import-cost-kenya" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-blue-600 mb-2">🚗 Toyota Prius Guide</h4>
              <p className="text-sm text-gray-600">Detailed cost breakdown and money-saving tips</p>
            </Link>
            <Link to="/blog/what-is-crsp" className="block p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-purple-600 mb-2">🎯 Understanding CRSP</h4>
              <p className="text-sm text-gray-600">Learn how KRA values your imported vehicle</p>
            </Link>
          </div>
        </div>
      </div>
      
      {/* SEO Content Section */}
      <SEOContent />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
