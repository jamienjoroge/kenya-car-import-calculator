
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CompareCars from "./pages/CompareCars";
import WhatCanIAfford from "./pages/WhatCanIAfford";
import PopularCarsByYear from "./pages/PopularCarsByYear";
import VehicleInspection from "./pages/VehicleInspection";
import MaintenanceSchedule from "./pages/MaintenanceSchedule";
import FuelCalculator from "./pages/FuelCalculator";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import BlogList from "./pages/BlogList";
import BlogEditor from "./pages/BlogEditor";
import Admin from "./pages/Admin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import DynamicBlogPost from "./pages/DynamicBlogPost";

// Import specific blog posts
import HowToImportCarKenya from "./pages/blog/HowToImportCarKenya";
import ToyotaPriusImportCostKenya from "./pages/blog/ToyotaPriusImportCostKenya";
import WhatIsCRSP from "./pages/blog/WhatIsCRSP";
import WhatDeterminesDuty from "./pages/blog/WhatDeterminesDuty";
import CRSPSchedule2025Changes from "./pages/blog/CRSPSchedule2025Changes";
import CRSPScheduleHaltedByCourt2025 from "./pages/blog/CRSPScheduleHaltedByCourt2025";
import CIAKvsKRALawsuit2025 from "./pages/blog/CIAKvsKRALawsuit2025";
import MostImportedCars2025 from "./pages/blog/MostImportedCars2025";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compare" element={<CompareCars />} />
            <Route path="/afford" element={<WhatCanIAfford />} />
            <Route path="/popular" element={<PopularCarsByYear />} />
            <Route path="/vehicle-inspection" element={<VehicleInspection />} />
            <Route path="/maintenance-schedule" element={<MaintenanceSchedule />} />
            <Route path="/fuel-calculator" element={<FuelCalculator />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-list" element={<BlogList />} />
            <Route path="/blog-editor" element={<BlogEditor />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />

            {/* Static blog routes */}
            <Route path="/blog/how-to-import-car-kenya" element={<HowToImportCarKenya />} />
            <Route path="/blog/toyota-prius-import-cost-kenya" element={<ToyotaPriusImportCostKenya />} />
            <Route path="/blog/what-is-crsp" element={<WhatIsCRSP />} />
            <Route path="/blog/what-determines-duty" element={<WhatDeterminesDuty />} />
            <Route path="/blog/crsp-schedule-2025-changes" element={<CRSPSchedule2025Changes />} />
            <Route path="/blog/crsp-schedule-halted-by-court-2025" element={<CRSPScheduleHaltedByCourt2025 />} />
            <Route path="/blog/ciak-vs-kra-lawsuit-2025" element={<CIAKvsKRALawsuit2025 />} />
            <Route path="/blog/most-imported-cars-kenya-2025" element={<MostImportedCars2025 />} />
            
            {/* Dynamic blog route */}
            <Route path="/blog/:slug" element={<DynamicBlogPost />} />
            
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
