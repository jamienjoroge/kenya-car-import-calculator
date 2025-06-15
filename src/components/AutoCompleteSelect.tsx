
import * as React from "react";
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";

interface AutoCompleteSelectProps {
  value: string | undefined;
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  label?: string;
}

export function AutoCompleteSelect({
  value,
  options = [], // Default to empty array
  placeholder,
  onChange,
  disabled,
  label
}: AutoCompleteSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  
  // Ensure options is always an array
  const safeOptions = Array.isArray(options) ? options : [];
  
  const filtered = React.useMemo(
    () =>
      !query
        ? safeOptions
        : safeOptions.filter((option) =>
            option.toLowerCase().includes(query.toLowerCase())
          ),
    [safeOptions, query]
  );

  // Show selected value or query in the input
  const displayValue = value || query;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <div className="relative">
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            value={displayValue}
            onValueChange={(val) => {
              setQuery(val);
              setOpen(true);
              // If the value exactly matches an option, select it
              if (safeOptions.includes(val)) {
                onChange(val);
                setOpen(false);
              } else if (val === "") {
                onChange("");
              }
            }}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            disabled={disabled}
            className="h-10"
          />
          {open && !disabled && filtered.length > 0 && (
            <CommandList className="absolute top-full left-0 right-0 z-50 bg-white border border-t-0 rounded-b-lg shadow-lg max-h-60 overflow-auto">
              {filtered.slice(0, 10).map((option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={() => {
                    onChange(option);
                    setQuery("");
                    setOpen(false);
                  }}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {option}
                </CommandItem>
              ))}
            </CommandList>
          )}
        </Command>
        {open && !disabled && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
