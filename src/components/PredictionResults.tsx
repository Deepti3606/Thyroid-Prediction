import React from 'react';
import { PredictionResult } from '../types/prediction';
import { AlertTriangle, CheckCircle, RefreshCw, Info } from 'lucide-react';

interface PredictionResultsProps {
  result: PredictionResult;
  onReset: () => void;
}

const PredictionResults: React.FC<PredictionResultsProps> = ({ result, onReset }) => {
  // Generate risk factor explanation
  const getRiskFactorText = () => {
    const factors = [];
    if (result.riskFactors.age) factors.push('age');
    if (result.riskFactors.highTSH) factors.push('elevated TSH levels');
    if (result.riskFactors.lowT4) factors.push('low T4 levels');
    if (result.riskFactors.goitre) factors.push('presence of goitre');
    
    if (factors.length === 0) return 'No significant risk factors identified.';
    
    return `Key factors contributing to this prediction include ${factors.join(', ')}.`;
  };

  const getPredictionBadge = () => {
    if (result.prediction === 'hypothyroid') {
      return (
        <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full inline-flex items-center">
          <AlertTriangle size={20} className="mr-2" />
          Hypothyroidism Likely
        </div>
      );
    } else if (result.prediction === 'hyperthyroid') {
      return (
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full inline-flex items-center">
          <AlertTriangle size={20} className="mr-2" />
          Hyperthyroidism Likely
        </div>
      );
    } else {
      return (
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full inline-flex items-center">
          <CheckCircle size={20} className="mr-2" />
          Normal Thyroid Function
        </div>
      );
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Prediction Result</h3>
          <div className="mt-4">
            {getPredictionBadge()}
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
              <Info size={20} className="mr-2 text-cyan-600" />
              Prediction Details
            </h4>
            <div className="space-y-3">
              <p className="text-slate-700">
                <span className="font-medium">Condition:</span>{' '}
                {result.prediction === 'normal' ? 'No thyroid condition detected' : 
                  result.prediction === 'hypothyroid' ? 'Hypothyroidism' : 'Hyperthyroidism'}
              </p>
              <p className="text-slate-700">
                <span className="font-medium">Confidence:</span>{' '}
                {result.confidence}%
              </p>
              <p className="text-slate-700">
                <span className="font-medium">Risk Level:</span>{' '}
                <span className={
                  result.riskLevel === 'High' ? 'text-red-600 font-medium' :
                  result.riskLevel === 'Medium' ? 'text-amber-600 font-medium' :
                  'text-green-600 font-medium'
                }>
                  {result.riskLevel}
                </span>
              </p>
            </div>
          </div>
          
          <div className="bg-slate-50 p-5 rounded-lg">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Risk Factors</h4>
            <p className="text-slate-700">
              {getRiskFactorText()}
            </p>
          </div>
        </div>
        
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-5">
          <h4 className="text-lg font-semibold text-slate-800 mb-3">Recommendations</h4>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {result.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 border-t border-slate-200 pt-6 text-center">
          <button
            onClick={onReset}
            className="flex items-center justify-center mx-auto px-5 py-2 text-cyan-600 border border-cyan-600 rounded-md
              hover:bg-cyan-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            <RefreshCw size={18} className="mr-2" />
            Start a New Prediction
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm text-slate-500">
          <p>This prediction is based on a simulated model and is for educational purposes only.</p>
          <p className="mt-1">Always consult with a healthcare professional for proper diagnosis and treatment.</p>
        </div>
      </div>
    </div>
  );
};

export default PredictionResults;