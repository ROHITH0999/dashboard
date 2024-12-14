import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  title: string;
  onUpload: (files: File[]) => void;
  maxSize?: number;
}

export default function FileUpload({ title, onUpload, maxSize = 5 }: FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: maxSize * 1024 * 1024,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-colors ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="text-blue-600 mb-2" />
      <span className="text-sm text-gray-600">{title}</span>
      <span className="text-xs text-gray-400">Max size: {maxSize}MB</span>
    </div>
  );
}