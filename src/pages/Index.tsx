
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

      <HeroSection />

      {/* Feature Navigation Cards */}
      <FeatureCards />

      {/* Sidebar Ad Space */}
      <div className="max-w-6xl mx-auto px-4 mb-6">
        <div className="flex justify-end">
          <AdSpace slot="sidebar-ad" format="rectangle" style={{ width: "300px", height: "250px" }} />
        </div>
      </div>
      
      <div id="calculator">
        <VehicleImportCalculator />
      </div>

      {/* Mid-content Ad Space */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <AdSpace slot="mid-content" format="horizontal" style={{ height: "90px" }} />
      </div>
      
      {/* SEO Content Section */}
      <SEOContent />
      
      <Footer />
    </div>
  );
};

export default Index;
