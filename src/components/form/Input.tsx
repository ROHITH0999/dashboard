import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  suffix?: string;
  error?: string;
}

export default function Input({ label, suffix, error, className = '', ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm text-gray-600 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          {...props}
          className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white ${
            error ? 'border-red-500' : 'border-gray-200'
          } ${className}`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}