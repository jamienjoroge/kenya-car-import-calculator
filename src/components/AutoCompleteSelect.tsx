
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
      console.log('Car Make options:', options);
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
    }
    
    return filtered;
  }, [options, label]);
  
  // Filter options based on input
  const filteredOptions = React.useMemo(() => {
    if (!inputValue.trim()) {
      return safeOptions.slice(0, 50);
    }
    
    const filtered = safeOptions
      .filter(option => 
        option.toLowerCase().includes(inputValue.toLowerCase().trim())
      )
      .slice(0, 50);
      
    if (label === "Car Make" && inputValue.toLowerCase().includes('toyota')) {
      console.log('Filtering for toyota, found:', filtered);
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
    setInputValue("");
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
      if (inputValue && !safeOptions.includes(inputValue)) {
        setInputValue("");
      }
    }, 200);
  }, [inputValue, safeOptions]);

  // Reset input when value changes externally
  React.useEffect(() => {
    if (!value) {
      setInputValue("");
    }
  }, [value]);

  // Display value - show the selected value or current input
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
            {filteredOptions.length === 0 ? (
              <CommandEmpty>No results found.</CommandEmpty>
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
