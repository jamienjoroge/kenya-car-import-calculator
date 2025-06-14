
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
  options,
  placeholder,
  onChange,
  disabled,
  label
}: AutoCompleteSelectProps) {
  const [query, setQuery] = React.useState("");
  const filtered = React.useMemo(
    () =>
      !query
        ? options
        : options.filter((o) =>
            o.toLowerCase().includes(query.toLowerCase())
          ),
    [options, query]
  );

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <Command>
        <CommandInput
          value={query || value || ""}
          onValueChange={setQuery}
          placeholder={placeholder}
          disabled={disabled}
        />
        <CommandList>
          {filtered.length === 0 && (
            <CommandItem disabled>No results</CommandItem>
          )}
          {filtered.map((option) => (
            <CommandItem
              key={option}
              value={option}
              onSelect={() => {
                onChange(option);
                setQuery("");
              }}
            >
              {option}
            </CommandItem>
          ))}
        </CommandList>
      </Command>
    </div>
  );
}
