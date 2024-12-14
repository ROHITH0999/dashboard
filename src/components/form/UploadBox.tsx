import React from 'react';
import { Upload, Plus } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface UploadBoxProps {
  title: string;
  description?: string;
  onUpload: (files: File[]) => void;
  showAddButton?: boolean;
  className?: string;
}

export default function UploadBox({ 
  title, 
  description = 'Max size: 5MB', 
  onUpload,
  showAddButton = false,
  className = ''
}: UploadBoxProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onUpload,
    maxSize: 5 * 1024 * 1024
  });

  return (
    <div
      {...getRootProps()}
      className={`bg-white border border-dashed border-blue-500 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all relative min-h-[160px] ${
        isDragActive ? 'border-blue-600 bg-blue-50' : 'hover:border-blue-600'
      } ${className}`}
    >
      <input {...getInputProps()} />
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3">
        <Upload className="text-blue-500" size={20} />
      </div>
      <span className="text-sm text-gray-600 text-center">{title}</span>
      <span className="text-xs text-gray-400 mt-1">{description}</span>
      {showAddButton && (
        <button className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
          <Plus size={20} />
        </button>
      )}
    </div>
  );
}