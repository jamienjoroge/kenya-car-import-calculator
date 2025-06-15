
import React from "react";

interface AdSpaceProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
  className?: string;
}

const AdSpace = ({ slot, format = "auto", style, className }: AdSpaceProps) => {
  return (
    <div className={`ad-space ${className || ""}`} style={style}>
      {/* Placeholder for AdSense - replace with actual ad code when ready */}
      <div 
        className="border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 text-sm"
        style={{ minHeight: "90px", ...style }}
      >
        <span>Advertisement Space ({slot})</span>
      </div>
      {/* 
      When ready to implement AdSense, replace above with:
      <ins className="adsbygoogle"
           style={{display: "block", ...style}}
           data-ad-client="ca-pub-XXXXXXXXXX"
           data-ad-slot={slot}
           data-ad-format={format}></ins>
      */}
    </div>
  );
};

export default AdSpace;
