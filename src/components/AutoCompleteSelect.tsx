
import * as React from "react";
import { Command, CommandInput, CommandItem, CommandList, CommandEmpty } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

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
  const inputRef = React.useRef<HTMLInputElement>(null);
  

  
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
    setInputValue(val);
    setOpen(true);
    
    // Clear the selected value when input is cleared or changed significantly
    if (val === "" || (value && !val.toLowerCase().includes(value.toLowerCase()))) {
      onChange("");
    }
  }, [onChange, value]);

  const handleSelect = React.useCallback((option: string) => {
    onChange(option);
    setInputValue("");
    setOpen(false);
    
    // Prevent event bubbling to avoid interference
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }, 50);
  }, [onChange]);

  const handleFocus = React.useCallback(() => {
    if (!disabled && safeOptions.length > 0) {
      setOpen(true);
    }
  }, [disabled, safeOptions.length]);

  const handleBlur = React.useCallback((e: React.FocusEvent) => {
    // Check if the blur is happening because user clicked on an option
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (relatedTarget && relatedTarget.closest('[data-radix-command-list]')) {
      return; // Don't close if clicking on an option
    }
    
    setTimeout(() => {
      setOpen(false);
      // Only clear input if it doesn't match any option and no value is selected
      if (inputValue && !value && !safeOptions.some(option => 
        option.toLowerCase() === inputValue.toLowerCase()
      )) {
        setInputValue("");
      }
    }, 150);
  }, [inputValue, value, safeOptions]);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent) => {
    // Handle backspace/delete to clear selection
    if ((e.key === 'Backspace' || e.key === 'Delete') && value && inputValue === "") {
      e.preventDefault();
      onChange("");
      setInputValue("");
    }
    
    // Handle escape to close dropdown
    if (e.key === 'Escape') {
      setOpen(false);
      if (inputRef.current) {
        inputRef.current.blur();
      }
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
          <div className="relative">
            <CommandInput
              ref={inputRef}
              value={displayValue}
              onValueChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              placeholder={disabled ? "Loading..." : placeholder}
              disabled={disabled}
              className="h-10 pr-10"
            />
            {disabled && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              </div>
            )}
          </div>
          <CommandList 
            className={cn(
              "absolute top-full left-0 right-0 z-50 bg-white border border-t-0 rounded-b-lg shadow-lg max-h-80 overflow-auto",
              (!open || disabled || filteredOptions.length === 0) && "hidden"
            )}
            data-radix-command-list
          >
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
                  onMouseDown={(e) => {
                    // Prevent default to avoid blur event interference
                    e.preventDefault();
                  }}
                  className="cursor-pointer hover:bg-gray-100 px-3 py-2 data-[selected=true]:bg-gray-100"
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
