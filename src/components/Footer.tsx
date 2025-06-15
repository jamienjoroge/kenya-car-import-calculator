
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-xs text-muted-foreground mt-16 text-center pb-6 space-y-2">
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <Link to="/about" className="hover:text-primary">About</Link>
        <Link to="/contact" className="hover:text-primary">Contact</Link>
        <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
        <Link to="/sitemap" className="hover:text-primary">Sitemap</Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Kenya Vehicle Import Calculator · Updated for July 2025 CRSP Schedule · Powered by Supabase &amp; Lovable.dev</p>
    </footer>
  );
};

export default Footer;
