
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
    }
  }, [options, label]);
  
  // Ensure options is always a safe array
  const safeOptions = React.useMemo(() => {
    if (!Array.isArray(options)) {
      console.warn('AutoCompleteSelect: options is not an array, defaulting to empty array');
      return [];
    }
    return options.filter(option => 
      typeof option === 'string' && 
      option.trim() !== ''
    );
  }, [options]);
  
  // Filter options based on input
  const filteredOptions = React.useMemo(() => {
    if (!inputValue.trim()) {
      return safeOptions.slice(0, 50);
    }
    
    const searchTerm = inputValue.toLowerCase().trim();
    return safeOptions
      .filter(option => option.toLowerCase().includes(searchTerm))
      .slice(0, 50);
  }, [safeOptions, inputValue]);

  const handleInputChange = React.useCallback((val: string) => {
    console.log('AutoCompleteSelect: input changing to:', val);
    setInputValue(val);
    setOpen(true);
    
    // Clear the selected value when input is cleared or changed
    if (val === "" || (value && !val.toLowerCase().includes(value.toLowerCase()))) {
      onChange("");
    }
  }, [onChange, value]);

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
      // Only clear input if it doesn't match any option and no value is selected
      if (inputValue && !value && !safeOptions.some(option => 
        option.toLowerCase() === inputValue.toLowerCase()
      )) {
        setInputValue("");
      }
    }, 200);
  }, [inputValue, value, safeOptions]);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    // Handle backspace/delete to clear selection
    if ((e.key === 'Backspace' || e.key === 'Delete') && value && inputValue === "") {
      onChange("");
      setInputValue("");
    }
  }, [value, inputValue, onChange]);

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
            onKeyDown={handleKeyDown}
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
