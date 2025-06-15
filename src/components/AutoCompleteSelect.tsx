
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
  options = [],
  placeholder,
  onChange,
  disabled,
  label
}: AutoCompleteSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  
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
      if (!inputValue || inputValue.trim() === '') {
        return safeOptions.slice(0, 50); // Show more options when no filter
      }
      
      const results = safeOptions.filter((option) => {
        try {
          return option.toLowerCase().includes(inputValue.toLowerCase().trim());
        } catch (error) {
          console.error('Error filtering option:', option, error);
          return false;
        }
      });
      
      return results.slice(0, 50); // Show up to 50 filtered results
    } catch (error) {
      console.error('Error filtering options:', error);
      return safeOptions.slice(0, 50);
    }
  }, [safeOptions, inputValue]);

  // Display the selected value or current input
  const displayValue = value || inputValue;

  const handleInputChange = React.useCallback((val: string) => {
    try {
      console.log('AutoCompleteSelect: input changing to:', val);
      setInputValue(val);
      setOpen(true);
      
      // If input is cleared, clear the selection
      if (val === "") {
        onChange("");
      }
    } catch (error) {
      console.error('Error in handleInputChange:', error);
    }
  }, [onChange]);

  const handleSelect = React.useCallback((option: string) => {
    try {
      console.log('AutoCompleteSelect: selecting option:', option);
      onChange(option);
      setInputValue("");
      setOpen(false);
    } catch (error) {
      console.error('Error in handleSelect:', error);
    }
  }, [onChange]);

  const handleFocus = React.useCallback(() => {
    try {
      if (!disabled && safeOptions.length > 0) {
        setOpen(true);
      }
    } catch (error) {
      console.error('Error in handleFocus:', error);
    }
  }, [disabled, safeOptions.length]);

  const handleBlur = React.useCallback(() => {
    try {
      // Delay closing to allow for option selection
      setTimeout(() => {
        setOpen(false);
        // If no valid option was selected and input doesn't match any option, clear it
        if (inputValue && !safeOptions.includes(inputValue)) {
          setInputValue("");
        }
      }, 200);
    } catch (error) {
      console.error('Error in handleBlur:', error);
    }
  }, [inputValue, safeOptions]);

  // Reset input when value changes externally (like when form is reset)
  React.useEffect(() => {
    if (!value) {
      setInputValue("");
    }
  }, [value]);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <div className="relative">
        <Command className="rounded-lg border shadow-md" shouldFilter={false}>
          <CommandInput
            value={displayValue}
            onValueChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className="h-10"
          />
          {open && !disabled && Array.isArray(filtered) && filtered.length > 0 && (
            <CommandList className="absolute top-full left-0 right-0 z-50 bg-white border border-t-0 rounded-b-lg shadow-lg max-h-80 overflow-auto">
              {filtered.map((option, index) => (
                <CommandItem
                  key={`${option}-${index}`}
                  value={option}
                  onSelect={() => handleSelect(option)}
                  className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                >
                  {option}
                </CommandItem>
              ))}
            </CommandList>
          )}
        </Command>
      </div>
    </div>
  );
}
