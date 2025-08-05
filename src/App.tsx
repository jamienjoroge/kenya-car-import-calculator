
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
