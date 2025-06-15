
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
  
  // Ensure options is always an array and contains only strings
  const safeOptions = React.useMemo(() => {
    try {
      if (!Array.isArray(options)) {
        console.warn('AutoCompleteSelect: options is not an array, defaulting to empty array');
        return [];
      }
      return options.filter(option => 
        option !== null && 
        option !== undefined && 
        typeof option === 'string' && 
        option.trim() !== ''
      );
    } catch (error) {
      console.error('Error processing options:', error);
      return [];
    }
  }, [options]);
  
  const filtered = React.useMemo(() => {
    try {
      if (!query || query.trim() === '') {
        return safeOptions;
      }
      
      return safeOptions.filter((option) => {
        try {
          return option.toLowerCase().includes(query.toLowerCase().trim());
        } catch (error) {
          console.error('Error filtering option:', option, error);
          return false;
        }
      });
    } catch (error) {
      console.error('Error filtering options:', error);
      return safeOptions;
    }
  }, [safeOptions, query]);

  // Show selected value or query in the input
  const displayValue = value || query;

  const handleValueChange = React.useCallback((val: string) => {
    try {
      console.log('AutoCompleteSelect: value changing to:', val);
      setQuery(val);
      setOpen(true);
      
      // If the value exactly matches an option, select it
      if (safeOptions.includes(val)) {
        onChange(val);
        setOpen(false);
      } else if (val === "") {
        onChange("");
      }
    } catch (error) {
      console.error('Error in handleValueChange:', error);
    }
  }, [safeOptions, onChange]);

  const handleSelect = React.useCallback((option: string) => {
    try {
      console.log('AutoCompleteSelect: selecting option:', option);
      onChange(option);
      setQuery("");
      setOpen(false);
    } catch (error) {
      console.error('Error in handleSelect:', error);
    }
  }, [onChange]);

  const handleFocus = React.useCallback(() => {
    try {
      if (!disabled) {
        setOpen(true);
      }
    } catch (error) {
      console.error('Error in handleFocus:', error);
    }
  }, [disabled]);

  const handleClickOutside = React.useCallback(() => {
    try {
      setOpen(false);
    } catch (error) {
      console.error('Error in handleClickOutside:', error);
    }
  }, []);

  // Reset query when value changes externally
  React.useEffect(() => {
    if (value !== query) {
      setQuery("");
    }
  }, [value, query]);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <div className="relative">
        <Command className="rounded-lg border shadow-md" shouldFilter={false}>
          <CommandInput
            value={displayValue}
            onValueChange={handleValueChange}
            onFocus={handleFocus}
            placeholder={placeholder}
            disabled={disabled}
            className="h-10"
          />
          {open && !disabled && Array.isArray(filtered) && filtered.length > 0 && (
            <CommandList className="absolute top-full left-0 right-0 z-50 bg-white border border-t-0 rounded-b-lg shadow-lg max-h-60 overflow-auto">
              {filtered.slice(0, 10).map((option, index) => (
                <CommandItem
                  key={`${option}-${index}`}
                  value={option}
                  onSelect={() => handleSelect(option)}
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
            onClick={handleClickOutside}
          />
        )}
      </div>
    </div>
  );
}
