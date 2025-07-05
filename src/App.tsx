
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CompareCars from "./pages/CompareCars";
import WhatCanIAfford from "./pages/WhatCanIAfford";
import PopularCarsByYear from "./pages/PopularCarsByYear";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Blog from "./pages/Blog";
import HowToImportCarKenya from "./pages/blog/HowToImportCarKenya";
import WhatIsCRSP from "./pages/blog/WhatIsCRSP";
import WhatDeterminesDuty from "./pages/blog/WhatDeterminesDuty";
import MostImportedCars2025 from "./pages/blog/MostImportedCars2025";
import CRSPSchedule2025Changes from "./pages/blog/CRSPSchedule2025Changes";
import ToyotaPriusImportCostKenya from "./pages/blog/ToyotaPriusImportCostKenya";
import CIAKvsKRALawsuit2025 from "./pages/blog/CIAKvsKRALawsuit2025";
import CRSPScheduleHaltedByCourt2025 from "./pages/blog/CRSPScheduleHaltedByCourt2025";
import Admin from "./pages/Admin";
import BlogEditor from "./pages/BlogEditor";
import BlogList from "./pages/BlogList";
import DynamicBlogPost from "./pages/DynamicBlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/compare" element={<CompareCars />} />
          <Route path="/afford" element={<WhatCanIAfford />} />
          <Route path="/popular" element={<PopularCarsByYear />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/blog-editor" element={<BlogEditor />} />
          <Route path="/admin/blog-list" element={<BlogList />} />
          
          {/* Static Blog Posts */}
          <Route path="/blog/how-to-import-car-kenya" element={<HowToImportCarKenya />} />
          <Route path="/blog/what-is-crsp" element={<WhatIsCRSP />} />
          <Route path="/blog/what-determines-duty-kenya" element={<WhatDeterminesDuty />} />
          <Route path="/blog/most-imported-cars-2025" element={<MostImportedCars2025 />} />
          <Route path="/blog/crsp-schedule-2025-changes" element={<CRSPSchedule2025Changes />} />
          <Route path="/blog/toyota-prius-import-cost-kenya" element={<ToyotaPriusImportCostKenya />} />
          <Route path="/blog/ciak-vs-kra-lawsuit-2025" element={<CIAKvsKRALawsuit2025 />} />
          <Route path="/blog/crsp-schedule-halted-by-court-2025" element={<CRSPScheduleHaltedByCourt2025 />} />
          
          {/* Dynamic Blog Post Route - this catches any other blog URLs */}
          <Route path="/blog/:slug" element={<DynamicBlogPost />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
