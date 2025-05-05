import React, { useState } from 'react';
import { PredictionData } from '../types/prediction';
import { AlertCircle } from 'lucide-react';

interface PredictionFormProps {
  onSubmit: (data: PredictionData) => void;
  isLoading: boolean;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<PredictionData>({
    age: '',
    gender: '',
    tsh: '',
    t3: '',
    t4: '',
    thyroxine: false,
    queryHypothyroid: false,
    queryHyperthyroid: false,
    pregnant: false,
    sick: false,
    tumor: false,
    lithium: false,
    goitre: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    
    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
    });
    
    // Clear error when field is changed
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    // Required fields
    if (!formData.age) errors.age = 'Age is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.tsh) errors.tsh = 'TSH level is required';
    
    // Numeric validation
    if (formData.age && isNaN(Number(formData.age))) errors.age = 'Age must be a number';
    if (formData.tsh && isNaN(Number(formData.tsh))) errors.tsh = 'TSH must be a number';
    if (formData.t3 && isNaN(Number(formData.t3))) errors.t3 = 'T3 must be a number';
    if (formData.t4 && isNaN(Number(formData.t4))) errors.t4 = 'T4 must be a number';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Patient Information</h3>
          
          <div>
            <label className="block text-slate-700 mb-2" htmlFor="age">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${formErrors.age ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-cyan-200'}`}
              placeholder="Enter age"
            />
            {formErrors.age && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={16} className="mr-1" /> {formErrors.age}
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-slate-700 mb-2" htmlFor="gender">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${formErrors.gender ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-cyan-200'}`}
            >
              <option value="">Select gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            {formErrors.gender && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={16} className="mr-1" /> {formErrors.gender}
              </p>
            )}
          </div>
          
          <div className="space-y-3">
            <h4 className="text-slate-700 font-medium">Medical History</h4>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="pregnant"
                name="pregnant"
                checked={formData.pregnant}
                onChange={handleChange}
                className="h-4 w-4 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <label className="ml-2 text-slate-700" htmlFor="pregnant">
                Pregnant
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="sick"
                name="sick"
                checked={formData.sick}
                onChange={handleChange}
                className="h-4 w-4 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <label className="ml-2 text-slate-700" htmlFor="sick">
                Currently sick
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="tumor"
                name="tumor"
                checked={formData.tumor}
                onChange={handleChange}
                className="h-4 w-4 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <label className="ml-2 text-slate-700" htmlFor="tumor">
                History of thyroid tumor
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="lithium"
                name="lithium"
                checked={formData.lithium}
                onChange={handleChange}
                className="h-4 w-4 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <label className="ml-2 text-slate-700" htmlFor="lithium">
                Lithium treatment
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="goitre"
                name="goitre"
                checked={formData.goitre}
                onChange={handleChange}
                className="h-4 w-4 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <label className="ml-2 text-slate-700" htmlFor="goitre">
                Goitre present
              </label>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Thyroid Test Results</h3>
          
          <div>
            <label className="block text-slate-700 mb-2" htmlFor="tsh">
              TSH Level (mU/L) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="tsh"
              name="tsh"
              value={formData.tsh}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${formErrors.tsh ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-cyan-200'}`}
              placeholder="e.g., 2.5"
            />
            {formErrors.tsh && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={16} className="mr-1" /> {formErrors.tsh}
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-slate-700 mb-2" htmlFor="t3">
              T3 Level (nmol/L)
            </label>
            <input
              type="text"
              id="t3"
              name="t3"
              value={formData.t3}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${formErrors.t3 ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-cyan-200'}`}
              placeholder="e.g., 1.8"
            />
            {formErrors.t3 && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={16} className="mr-1" /> {formErrors.t3}
              </p>
            )}
          </div>
          
          <div>
            <label className="block text-slate-700 mb-2" htmlFor="t4">
              T4 Level (nmol/L)
            </label>
            <input
              type="text"
              id="t4"
              name="t4"
              value={formData.t4}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
                ${formErrors.t4 ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-cyan-200'}`}
              placeholder="e.g., 110"
            />
            {formErrors.t4 && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle size={16} className="mr-1" /> {formErrors.t4}
              </p>
            )}
          </div>
          
          <div className="space-y-3">
            <h4 className="text-slate-700 font-medium">Current Status</h4>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="thyroxine"
                name="thyroxine"
                checked={formData.thyroxine}
                onChange={handleChange}
                className="h-4 w-4 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <label className="ml-2 text-slate-700" htmlFor="thyroxine">
                On thyroxine medication
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="queryHypothyroid"
                name="queryHypothyroid"
                checked={formData.queryHypothyroid}
                onChange={handleChange}
                className="h-4 w-4 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <label className="ml-2 text-slate-700" htmlFor="queryHypothyroid">
                Query for hypothyroidism
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="queryHyperthyroid"
                name="queryHyperthyroid"
                checked={formData.queryHyperthyroid}
                onChange={handleChange}
                className="h-4 w-4 text-cyan-600 rounded focus:ring-cyan-500"
              />
              <label className="ml-2 text-slate-700" htmlFor="queryHyperthyroid">
                Query for hyperthyroidism
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          disabled={isLoading}
          className={`px-6 py-3 bg-cyan-600 text-white font-medium rounded-md shadow-sm 
            hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 
            transition-colors ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isLoading ? 'Processing...' : 'Get Prediction'}
        </button>
      </div>
    </form>
  );
};

export default PredictionForm;