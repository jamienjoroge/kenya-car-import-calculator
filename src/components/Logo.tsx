
import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6 w-auto",
    md: "h-8 w-auto", 
    lg: "h-12 w-auto"
  };

  return (
    <img 
      src="/lovable-uploads/899d1529-b7aa-4c00-813d-01f1976ff0e6.png" 
      alt="Gari Moto - Kenya Car Import Calculator"
      className={`${sizeClasses[size]} ${className}`}
    />
  );
};

export default Logo;
