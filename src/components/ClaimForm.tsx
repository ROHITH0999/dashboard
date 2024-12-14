import React, { useState } from "react";
import { Upload, FileText, MapPin, Globe, FilePlus } from "lucide-react";

export default function ClaimForm() {
  const [formData, setFormData] = useState({
    contractValue: "",
    claimValue: "",
    place: "",
    language: "",
    isPlaceAgreed: "",
    isLanguageAgreed: "",
    statement: "",
  });

  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [name]: "" }); // Clear error on input change
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.contractValue.trim()) newErrors.contractValue = "Contract Value is required.";
    if (!formData.claimValue.trim()) newErrors.claimValue = "Claim Value is required.";
    if (!formData.place.trim()) newErrors.place = "Place is required.";
    if (!formData.isPlaceAgreed)
      newErrors.isPlaceAgreed = "Please select if the place is agreed.";
    if (!formData.language.trim()) newErrors.language = "Language is required.";
    if (!formData.isLanguageAgreed)
      newErrors.isLanguageAgreed = "Please select if the language is agreed.";
    if (!formData.statement.trim()) newErrors.statement = "Statement is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
      // Reset the form after submission
      setFormData({
        contractValue: "",
        claimValue: "",
        place: "",
        language: "",
        isPlaceAgreed: "",
        isLanguageAgreed: "",
        statement: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Claim Value Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-medium text-gray-800">
              <FileText size={20} className="text-blue-500" />
              Claim Value
            </h3>
            <div className="mt-2 space-y-4">
              <label className="block">
                Contract Value
                <input
                  type="number"
                  name="contractValue"
                  value={formData.contractValue}
                  onChange={handleInputChange}
                  className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 ${errors.contractValue ? "border-red-500" : "focus:ring-blue-500"}`}
                  placeholder="Enter Contract Value"
                />
                {errors.contractValue && (
                  <p className="text-red-500 text-sm">{errors.contractValue}</p>
                )}
              </label>
              <label className="block">
                Claim Value
                <input
                  type="number"
                  name="claimValue"
                  value={formData.claimValue}
                  onChange={handleInputChange}
                  className={`w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 ${errors.claimValue ? "border-red-500" : "focus:ring-blue-500"}`}
                  placeholder="Enter Claim Value"
                />
                {errors.claimValue && (
                  <p className="text-red-500 text-sm">{errors.claimValue}</p>
                )}
              </label>
            </div>
          </div>

          {/* Place Section */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-medium text-gray-800">
              <MapPin size={20} className="text-blue-500" />
              Place
            </h3>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              className={`w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 ${errors.place ? "border-red-500" : "focus:ring-blue-500"}`}
              placeholder="Select the Place"
            />
            {errors.place && <p className="text-red-500 text-sm">{errors.place}</p>}
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isPlaceAgreed"
                  value="yes"
                  checked={formData.isPlaceAgreed === "yes"}
                  onChange={handleRadioChange}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isPlaceAgreed"
                  value="no"
                  checked={formData.isPlaceAgreed === "no"}
                  onChange={handleRadioChange}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.isPlaceAgreed && (
              <p className="text-red-500 text-sm">{errors.isPlaceAgreed}</p>
            )}
          </div>

          {/* Language Section */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-medium text-gray-800">
              <Globe size={20} className="text-blue-500" />
              Language
            </h3>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              className={`w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 ${errors.language ? "border-red-500" : "focus:ring-blue-500"}`}
              placeholder="Select the Language"
            />
            {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}
            <div className="flex gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isLanguageAgreed"
                  value="yes"
                  checked={formData.isLanguageAgreed === "yes"}
                  onChange={handleRadioChange}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="isLanguageAgreed"
                  value="no"
                  checked={formData.isLanguageAgreed === "no"}
                  onChange={handleRadioChange}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.isLanguageAgreed && (
              <p className="text-red-500 text-sm">{errors.isLanguageAgreed}</p>
            )}
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            Submit Form
          </button>
        </div>

        {/* Statement */}
        <div>
          <label className="block">
            Statement
            <textarea
              name="statement"
              value={formData.statement}
              onChange={handleInputChange}
              className={`w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 ${errors.statement ? "border-red-500" : "focus:ring-blue-500"}`}
              placeholder="Write your statement here"
              rows={4}
            />
            {errors.statement && (
              <p className="text-red-500 text-sm">{errors.statement}</p>
            )}
          </label>
        </div>

        {/* Submit Button */}
        
      </form>
    </div>
  );
}
