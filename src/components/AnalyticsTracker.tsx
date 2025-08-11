import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface AnalyticsTrackerProps {
  measurementId: string;
}

const AnalyticsTracker: React.FC<AnalyticsTrackerProps> = ({ measurementId }) => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;

    // Send a GA4 page_view for SPA route changes
    window.gtag('config', measurementId, {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search, measurementId]);

  return null;
};

export default AnalyticsTracker;
