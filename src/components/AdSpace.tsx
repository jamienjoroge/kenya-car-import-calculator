
import React from "react";

interface AdSpaceProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
  className?: string;
}

const AdSpace = ({ slot, format = "auto", style, className }: AdSpaceProps) => {
  // Generate unique ID for each ad slot
  const adId = `ezoic-pub-ad-placeholder-${slot.replace(/[^a-zA-Z0-9]/g, '-')}`;
  
  return (
    <div 
      className={`ezoic-ad ${className || ""}`} 
      style={style}
      id={adId}
      data-ezoic-ad-slot={slot}
    >
      {/* Ezoic will replace this content with ads */}
      <div className="ad-placeholder bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
        Advertisement
      </div>
    </div>
  );
};

export default AdSpace;
