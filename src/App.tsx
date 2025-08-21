
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import LandingPage from "./pages/LandingPage";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Admin from "./pages/Admin";
import BlogEditor from "./pages/BlogEditor";
import BlogList from "./pages/BlogList";
import CompareCars from "./pages/CompareCars";
import WhatCanIAfford from "./pages/WhatCanIAfford";
import PopularCarsByYear from "./pages/PopularCarsByYear";
import VehicleInspection from "./pages/VehicleInspection";
import MaintenanceSchedule from "./pages/MaintenanceSchedule";
import FuelCalculator from "./pages/FuelCalculator";
import NotFound from "./pages/NotFound";
import DynamicBlogPost from "./pages/DynamicBlogPost";
import CompareCarImportCosts from "./pages/blog/CompareCarImportCosts";
import FuelCalculatorGuide from "./pages/blog/FuelCalculatorGuide";
import VehicleMaintenanceGuide from "./pages/blog/VehicleMaintenanceGuide";
import VehicleInspectionGuide from "./pages/blog/VehicleInspectionGuide";
import BudgetCarFinderGuide from "./pages/blog/BudgetCarFinderGuide";
import PopularCarsAnalysisGuide from "./pages/blog/PopularCarsAnalysisGuide";
import CRSPScheduleHaltedByCourt2025 from "./pages/blog/CRSPScheduleHaltedByCourt2025";
import KenyaCarImportProcess2025 from "./pages/blog/KenyaCarImportProcess2025";
import BestCarsImportKenya1Million from "./pages/blog/BestCarsImportKenya1Million";
import AugustCRSPCourtRulingImpact from "./pages/blog/AugustCRSPCourtRulingImpact";
import KRACRSPChaosImportNow from "./pages/blog/KRACRSPChaosImportNow";
import ImportDutyCalculatorKenya2025 from "./pages/blog/ImportDutyCalculatorKenya2025";
import JapaneseCarImportKenyaVsUAE from "./pages/blog/JapaneseCarImportKenyaVsUAE";
import CarClearanceCostsMombasaPort2025 from "./pages/blog/CarClearanceCostsMombasaPort2025";
import BuyingLocallyVsImportingKenya2025 from "./pages/blog/BuyingLocallyVsImportingKenya2025";
import NairobiCarImport from "./pages/locations/NairobiCarImport";
import MombasaCarImport from "./pages/locations/MombasaCarImport";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <ExitIntentPopup />
        <BrowserRouter>
          <AnalyticsTracker measurementId="G-7FP92NE2JL" />
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculator" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/blog-editor" element={<BlogEditor />} />
          <Route path="/admin/blog-list" element={<BlogList />} />
          <Route path="/compare-cars" element={<CompareCars />} />
          <Route path="/compare" element={<CompareCars />} />
          <Route path="/afford" element={<WhatCanIAfford />} />
          <Route path="/popular" element={<PopularCarsByYear />} />
          <Route path="/vehicle-inspection" element={<VehicleInspection />} />
          <Route path="/maintenance-schedule" element={<MaintenanceSchedule />} />
          <Route path="/fuel-calculator" element={<FuelCalculator />} />
          <Route path="/blog/:slug" element={<DynamicBlogPost />} />
          <Route path="/blog/compare-car-import-costs" element={<CompareCarImportCosts />} />
          <Route path="/blog/fuel-calculator-guide" element={<FuelCalculatorGuide />} />
          <Route path="/blog/vehicle-maintenance-guide" element={<VehicleMaintenanceGuide />} />
          <Route path="/blog/vehicle-inspection-guide" element={<VehicleInspectionGuide />} />
          <Route path="/blog/budget-car-finder-guide" element={<BudgetCarFinderGuide />} />
          <Route path="/blog/popular-cars-analysis-guide" element={<PopularCarsAnalysisGuide />} />
          <Route path="/blog/crsp-schedule-halted-by-court-2025" element={<CRSPScheduleHaltedByCourt2025 />} />
          <Route path="/blog/kenya-car-import-process-2025" element={<KenyaCarImportProcess2025 />} />
          <Route path="/blog/best-cars-import-kenya-1-million" element={<BestCarsImportKenya1Million />} />
          <Route path="/blog/august-crsp-court-ruling-impact" element={<AugustCRSPCourtRulingImpact />} />
          <Route path="/blog/kra-crsp-chaos-import-now" element={<KRACRSPChaosImportNow />} />
          <Route path="/blog/import-duty-calculator-kenya-2025" element={<ImportDutyCalculatorKenya2025 />} />
          <Route path="/blog/japanese-car-import-kenya-vs-uae" element={<JapaneseCarImportKenyaVsUAE />} />
          <Route path="/blog/car-clearance-costs-mombasa-port-2025" element={<CarClearanceCostsMombasaPort2025 />} />
          <Route path="/blog/buying-locally-vs-importing-kenya-2025" element={<BuyingLocallyVsImportingKenya2025 />} />
          <Route path="/locations/nairobi-car-import" element={<NairobiCarImport />} />
          <Route path="/locations/mombasa-car-import" element={<MombasaCarImport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
