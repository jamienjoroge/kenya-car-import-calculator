
import * as React from "react";
import { Command, CommandInput, CommandItem, CommandList, CommandEmpty } from "@/components/ui/command";
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
  
  // Debug logging for options
  React.useEffect(() => {
    if (label === "Car Make") {
      console.log('AutoCompleteSelect - Car Make options received:', options.length);
      console.log('Car Make options sample (first 10):', options.slice(0, 10));
      const toyotaOptions = options.filter(option => 
        option.toLowerCase().includes('toyota')
      );
      console.log('Toyota options in AutoComplete:', toyotaOptions);
    }
  }, [options, label]);
  
  // Ensure options is always a safe array
  const safeOptions = React.useMemo(() => {
    if (!Array.isArray(options)) {
      console.warn('AutoCompleteSelect: options is not an array, defaulting to empty array');
      return [];
    }
    const filtered = options.filter(option => 
      typeof option === 'string' && 
      option.trim() !== ''
    );
    
    if (label === "Car Make") {
      console.log('SafeOptions for Car Make:', filtered.length, 'options');
      console.log('SafeOptions sample:', filtered.slice(0, 10));
    }
    
    return filtered;
  }, [options, label]);
  
  // Filter options based on input
  const filteredOptions = React.useMemo(() => {
    if (!inputValue.trim()) {
      const result = safeOptions.slice(0, 50);
      if (label === "Car Make") {
        console.log('No input value, showing first 50 options:', result.slice(0, 5));
      }
      return result;
    }
    
    const searchTerm = inputValue.toLowerCase().trim();
    console.log('Searching for:', searchTerm);
    
    const filtered = safeOptions
      .filter(option => {
        const match = option.toLowerCase().includes(searchTerm);
        if (label === "Car Make" && searchTerm.includes('toyota')) {
          console.log(`Checking "${option}" against "${searchTerm}": ${match}`);
        }
        return match;
      })
      .slice(0, 50);
      
    if (label === "Car Make") {
      console.log(`Filtered results for "${searchTerm}":`, filtered);
    }
    
    return filtered;
  }, [safeOptions, inputValue, label]);

  const handleInputChange = React.useCallback((val: string) => {
    console.log('AutoCompleteSelect: input changing to:', val);
    setInputValue(val);
    setOpen(true);
    
    if (val === "") {
      onChange("");
    }
  }, [onChange]);

  const handleSelect = React.useCallback((option: string) => {
    console.log('AutoCompleteSelect: selecting option:', option);
    onChange(option);
    setInputValue(""); // Clear input after selection
    setOpen(false);
  }, [onChange]);

  const handleFocus = React.useCallback(() => {
    if (!disabled && safeOptions.length > 0) {
      setOpen(true);
    }
  }, [disabled, safeOptions.length]);

  const handleBlur = React.useCallback(() => {
    setTimeout(() => {
      setOpen(false);
      // Don't clear input on blur if we have a selected value
      if (inputValue && !value && !safeOptions.includes(inputValue)) {
        setInputValue("");
      }
    }, 200);
  }, [inputValue, safeOptions, value]);

  // Reset input when value changes externally or when no value is selected
  React.useEffect(() => {
    if (!value) {
      setInputValue("");
    }
  }, [value]);

  // Display value - show the selected value when not typing, or current input when typing
  const displayValue = value || inputValue;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <div className="relative">
        <Command 
          className="rounded-lg border shadow-md" 
          shouldFilter={false}
        >
          <CommandInput
            value={displayValue}
            onValueChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            className="h-10"
          />
          <CommandList className={cn(
            "absolute top-full left-0 right-0 z-50 bg-white border border-t-0 rounded-b-lg shadow-lg max-h-80 overflow-auto",
            (!open || disabled || filteredOptions.length === 0) && "hidden"
          )}>
            {filteredOptions.length === 0 && inputValue.trim() !== "" ? (
              <CommandEmpty>No results found for "{inputValue}"</CommandEmpty>
            ) : filteredOptions.length === 0 ? (
              <CommandEmpty>Start typing to search...</CommandEmpty>
            ) : (
              filteredOptions.map((option, index) => (
                <CommandItem
                  key={`${option}-${index}`}
                  value={option}
                  onSelect={() => handleSelect(option)}
                  className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                >
                  {option}
                </CommandItem>
              ))
            )}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
