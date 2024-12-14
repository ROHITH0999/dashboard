import React, { useState } from 'react';
import Step from './Step';

const steps = [
  { number: '01', label: 'Preliminary' },
  { number: '02', label: 'Your Details' },
  { number: '03', label: 'KYC' },
  { number: '04', label: 'Parties' },
  { number: '05', label: 'Claim' },
  { number: '06', label: 'Review' },
  { number: '07', label: 'Payment' },
];

export default function ProgressSteps() {
  const [currentStep, setCurrentStep] = useState(4);

  const handleStepClick = (index: number) => {
    // Only allow clicking on completed steps or the next available step
    if (index <= currentStep) {
      setCurrentStep(index);
    }
  };

  return (
    <div className="flex items-center justify-between w-full mb-8">
      {steps.map((step, index) => (
        <Step
          key={index}
          number={step.number}
          label={step.label}
          completed={index < currentStep - 1}
          active={index === currentStep - 1}
          onClick={() => handleStepClick(index + 1)}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}