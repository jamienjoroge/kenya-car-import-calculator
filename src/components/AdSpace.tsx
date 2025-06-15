
import React, { useEffect } from "react";

interface AdSpaceProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  style?: React.CSSProperties;
  className?: string;
}

const AdSpace = ({ slot, format = "auto", style, className }: AdSpaceProps) => {
  useEffect(() => {
    try {
      // Push ads to AdSense queue
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`ad-space ${className || ""}`} style={style}>
      <ins 
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client="ca-pub-2226213757222520"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSpace;
