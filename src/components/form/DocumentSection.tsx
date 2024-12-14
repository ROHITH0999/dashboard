import React from 'react';
import TextArea from './TextArea';
import UploadBox from './UploadBox';

interface DocumentSectionProps {
  statement: string;
  onStatementChange: (value: string) => void;
  onFileUpload: (key: string, files: File[]) => void;
}

export default function DocumentSection({ 
  statement, 
  onStatementChange, 
  onFileUpload 
}: DocumentSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <div className="space-y-4">
        <h3 className="font-medium">Statement</h3>
        <div className="bg-white border-2 border-dashed border-gray-200 rounded-lg p-4">
          <TextArea
            value={statement}
            onChange={(e) => onStatementChange(e.target.value)}
            placeholder="Write your Statement here"
            className="h-24 bg-white"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Agreement under Disputes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <UploadBox
            title="Upload the Contract"
            onUpload={(files) => onFileUpload('contract', files)}
          />
          <UploadBox
            title="Arbitration Agreement"
            onUpload={(files) => onFileUpload('arbitration', files)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Additional Documentation</h3>
        <UploadBox
          title="Upload Additional Files"
          onUpload={(files) => onFileUpload('additional', files)}
          showAddButton
        />
      </div>
    </div>
  );
}