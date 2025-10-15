import React from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const LastVerifiedBadge = () => {
  return (
    <Badge variant="outline" className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300">
      <CheckCircle className="h-3 w-3 mr-1" />
      Rates Last Verified: Sept 23, 2025
    </Badge>
  );
};

export default LastVerifiedBadge;
