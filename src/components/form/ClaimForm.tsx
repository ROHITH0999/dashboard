import React, { useState } from 'react';
import Input from './Input';
import RadioGroup from './RadioGroup';
import DocumentSection from './DocumentSection';

interface FormData {
  contractValue: string;
  claimValue: string;
  place: string;
  language: string;
  isPlaceAgreed: string | null;
  isLanguageAgreed: string | null;
  statement: string;
}

const initialFormData: FormData = {
  contractValue: '',
  claimValue: '',
  place: '',
  language: '',
  isPlaceAgreed: null,
  isLanguageAgreed: null,
  statement: '',
};

export default function ClaimForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [files, setFiles] = useState<Record<string, File[]>>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (key: string, uploadedFiles: File[]) => {
    setFiles((prev) => ({ ...prev, [key]: uploadedFiles }));
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50">
      <h2 className="text-xl font-semibold mb-6">File your Claim</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Claim Value Section */}
        <div className="space-y-4">
          <h3 className="font-medium">Claim Value</h3>
          <div className="space-y-4">
            <Input
              label="Contract Value"
              name="contractValue"
              type="number"
              value={formData.contractValue}
              onChange={(e) => handleInputChange('contractValue', e.target.value)}
              placeholder="0.00"
              suffix="USD"
            />
            <Input
              label="Claim Value"
              name="claimValue"
              type="number"
              value={formData.claimValue}
              onChange={(e) => handleInputChange('claimValue', e.target.value)}
              placeholder="0.00"
              suffix="USD"
            />
          </div>
        </div>

        {/* Place Section */}
        <div className="space-y-4">
          <h3 className="font-medium">Place</h3>
          <Input
            label="Place"
            name="place"
            value={formData.place}
            onChange={(e) => handleInputChange('place', e.target.value)}
            placeholder="Select the Place for proceedings"
          />
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Is the place for the proceedings the one mentioned in the agreement?
            </p>
            <RadioGroup
              name="isPlaceAgreed"
              value={formData.isPlaceAgreed}
              onChange={(value) => handleInputChange('isPlaceAgreed', value)}
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
            />
          </div>
        </div>

        {/* Language Section */}
        <div className="space-y-4">
          <h3 className="font-medium">Language</h3>
          <Input
            label="Language"
            name="language"
            value={formData.language}
            onChange={(e) => handleInputChange('language', e.target.value)}
            placeholder="Select the language for proceedings"
          />
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Is the language for the proceedings the one mentioned in the agreement?
            </p>
            <RadioGroup
              name="isLanguageAgreed"
              value={formData.isLanguageAgreed}
              onChange={(value) => handleInputChange('isLanguageAgreed', value)}
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
              ]}
            />
          </div>
        </div>
      </div>

      <DocumentSection
        statement={formData.statement}
        onStatementChange={(value) => handleInputChange('statement', value)}
        onFileUpload={handleFileUpload}
      />
    </div>
  );
}