
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CurrencyToggleProps {
  value: "KES" | "USD";
  onToggle: (value: "KES" | "USD") => void;
  disabled?: boolean;
}

export default function CurrencyToggle({ value, onToggle, disabled }: CurrencyToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          "text-sm font-semibold",
          value === "KES" ? "text-primary" : "text-muted-foreground"
        )}
      >
        KES
      </span>
      <Switch
        checked={value === "USD"}
        onCheckedChange={checked => onToggle(checked ? "USD" : "KES")}
        disabled={disabled}
      />
      <span
        className={cn(
          "text-sm font-semibold",
          value === "USD" ? "text-primary" : "text-muted-foreground"
        )}
      >
        USD
      </span>
    </div>
  );
}
