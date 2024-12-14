import React from 'react';

interface RadioGroupProps {
  name: string;
  value: string | null;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}

export default function RadioGroup({ name, value, onChange, options }: RadioGroupProps) {
  return (
    <div className="flex gap-6">
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-2.5 cursor-pointer">
          <div className="relative flex items-center justify-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            {value === option.value && (
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full" />
            )}
          </div>
          <span className="text-sm text-gray-600">{option.label}</span>
        </label>
      ))}
    </div>
  );
}