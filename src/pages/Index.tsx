
import VehicleImportCalculator from "@/components/VehicleImportCalculator";
import AdSpace from "@/components/AdSpace";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import SEOContent from "@/components/SEOContent";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-50 to-slate-50 min-h-screen">
      {/* Top Banner Ad Space */}
      <div className="w-full py-2 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <AdSpace slot="top-banner" format="horizontal" style={{ height: "90px" }} />
        </div>
      </div>

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

          {/* Sidebar with Ads and Quick Links */}
          <div className="lg:col-span-1 order-2 space-y-4">
            <AdSpace slot="sidebar-ad" format="rectangle" style={{ width: "100%", height: "250px" }} />
            
            {/* Quick Feature Cards - Compact Version */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-lg mb-3 text-primary">Quick Tools</h3>
              <div className="space-y-2">
                <a href="/compare" className="block p-2 bg-blue-50 rounded hover:bg-blue-100 transition-colors text-sm">
                  🔄 Compare Cars
                </a>
                <a href="/afford" className="block p-2 bg-green-50 rounded hover:bg-green-100 transition-colors text-sm">
                  💰 What Can I Afford?
                </a>
                <a href="/popular" className="block p-2 bg-purple-50 rounded hover:bg-purple-100 transition-colors text-sm">
                  📊 Popular Cars by Year
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mid-content Ad Space */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <AdSpace slot="mid-content" format="horizontal" style={{ height: "90px" }} />
      </div>

      {/* Feature Cards - Now Below Calculator */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <FeatureCards />
      </div>
      
      {/* SEO Content Section */}
      <SEOContent />
      
      <Footer />
    </div>
  );
};

export default Index;
