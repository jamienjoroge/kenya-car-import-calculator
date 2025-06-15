
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Info, Mail, FileText, BookOpen } from "lucide-react";
import Logo from "@/components/Logo";

const Navigation = () => {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="font-semibold text-primary">Gari Moto</span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/blog">
                <BookOpen className="h-4 w-4 mr-1" />
                Blog
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/about">
                <Info className="h-4 w-4 mr-1" />
                About
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">
                <Mail className="h-4 w-4 mr-1" />
                Contact
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/sitemap">
                <FileText className="h-4 w-4 mr-1" />
                Sitemap
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
