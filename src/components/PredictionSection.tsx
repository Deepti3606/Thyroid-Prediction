import React, { useState } from 'react';
import PredictionForm from './PredictionForm';
import PredictionResults from './PredictionResults';
import { PredictionData, PredictionResult } from '../types/prediction';
import { makePrediction } from '../services/predictionService';

const PredictionSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleSubmit = async (data: PredictionData) => {
    setIsLoading(true);
    try {
      // Simulate API call to Python backend
      const predictionResult = await makePrediction(data);
      setResult(predictionResult);
    } catch (error) {
      console.error('Prediction error:', error);
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  const resetPrediction = () => {
    setResult(null);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Thyroid Condition Predictor</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Enter your thyroid test results and patient information to receive an AI-powered prediction of potential thyroid conditions.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {result ? (
          <PredictionResults result={result} onReset={resetPrediction} />
        ) : (
          <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
        )}
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto bg-cyan-50 p-6 rounded-lg border border-cyan-100">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Important Notice</h3>
        <p className="text-slate-700">
          This prediction tool is designed for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. 
          Always consult with a qualified healthcare provider for medical concerns.
        </p>
      </div>
    </div>
  );
};

export default PredictionSection;