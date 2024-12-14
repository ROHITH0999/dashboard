import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const stepsData = [
  { number: '01', label: 'Preliminary' },
  { number: '02', label: 'Your Details' },
  { number: '03', label: 'KYC' },
  { number: '04', label: 'Parties' },
  { number: '05', label: 'Claim' },
  { number: '06', label: 'Review' },
  { number: '07', label: 'Payment' },
];

export default function ProgressSteps() {
  const [currentStep, setCurrentStep] = useState(3); // Step 04 active by default

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="flex items-center justify-between w-full mb-8">
      {stepsData.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={index} className="flex items-center w-full">
            <motion.div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleStepClick(index)}
              initial={{ scale: 0.8 }}
              animate={{ scale: isActive ? 1.2 : 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              {/* Step Circle */}
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isCompleted
                    ? 'bg-blue-600 text-white'
                    : isActive
                    ? 'bg-blue-200 text-blue-600'
                    : 'bg-gray-100 text-gray-400'
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {isCompleted ? (
                  <Check size={16} />
                ) : (
                  <span className="text-sm">{step.number}</span>
                )}
              </motion.div>

              {/* Step Label */}
              <motion.span
                className={`text-xs mt-1 ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {step.label}
              </motion.span>
              <span className="text-xs text-gray-400">(Approx 5 Min)</span>
            </motion.div>

            {/* Line Between Steps */}
            {index < stepsData.length - 1 && (
              <motion.div
                className={`h-0.5 mx-2 ${
                  isCompleted ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
