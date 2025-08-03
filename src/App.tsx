
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
import CompareCarImportCosts from "./pages/blog/CompareCarImportCosts";

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
          <Route path="/blog/compare-car-import-costs" element={<CompareCarImportCosts />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
