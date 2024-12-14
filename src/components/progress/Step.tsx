import React from 'react';
import { Check } from 'lucide-react';

interface StepProps {
  number: string;
  label: string;
  completed: boolean;
  active: boolean;
  isLast?: boolean;
}

export default function Step({ number, label, completed, active, isLast }: StepProps) {
  return (
    <div className="flex items-center flex-1">
      <div className="flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            completed
              ? 'bg-blue-500 text-white'
              : active
              ? 'bg-white border-2 border-blue-500 text-blue-500'
              : 'bg-gray-100 text-gray-400'
          }`}
        >
          {completed ? (
            <Check size={16} />
          ) : (
            <span className="text-sm font-medium">{number}</span>
          )}
        </div>
        <span className={`text-xs mt-1 ${active ? 'text-blue-500' : 'text-gray-600'}`}>
          {label}
        </span>
        <span className="text-xs text-gray-400">(Approx 5 Min)</span>
      </div>
      {!isLast && (
        <div
          className={`h-0.5 w-full mx-2 ${
            completed ? 'bg-blue-500' : active ? 'bg-blue-500 bg-opacity-50 border-dashed border-t-2 border-blue-500' : 'bg-gray-200'
          }`}
        />
      )}
    </div>
  );
}