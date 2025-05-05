import { PredictionData, PredictionResult } from '../types/prediction';

// This is a mock service that would normally call a Python backend
export const makePrediction = async (data: PredictionData): Promise<PredictionResult> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // This would normally be a call to a Python backend API
  // For this example, we'll use a deterministic algorithm to simulate a prediction
  
  let prediction: 'normal' | 'hypothyroid' | 'hyperthyroid' = 'normal';
  let confidence = 0;
  let riskLevel: 'Low' | 'Medium' | 'High' = 'Low';
  
  const tsh = parseFloat(data.tsh);
  const t4 = data.t4 ? parseFloat(data.t4) : null;
  const age = parseInt(data.age, 10);
  
  // Risk factors
  const riskFactors = {
    age: age > 60,
    highTSH: tsh > 4.0,
    lowT4: t4 !== null && t4 < 80,
    goitre: data.goitre
  };
  
  // Simple prediction algorithm
  if (tsh > 4.5) {
    prediction = 'hypothyroid';
    confidence = Math.min(95, 60 + (tsh - 4.5) * 5);
    
    if (tsh > 10) {
      riskLevel = 'High';
    } else if (tsh > 7) {
      riskLevel = 'Medium';
    } else {
      riskLevel = 'Low';
    }
  } else if (tsh < 0.4) {
    prediction = 'hyperthyroid';
    confidence = Math.min(95, 60 + (0.4 - tsh) * 20);
    
    if (tsh < 0.1) {
      riskLevel = 'High';
    } else if (tsh < 0.2) {
      riskLevel = 'Medium';
    } else {
      riskLevel = 'Low';
    }
  } else {
    prediction = 'normal';
    
    // Calculate how close to the boundaries the TSH is
    const lowerBoundaryDistance = Math.abs(tsh - 0.4);
    const upperBoundaryDistance = Math.abs(tsh - 4.0);
    const minDistance = Math.min(lowerBoundaryDistance, upperBoundaryDistance);
    
    // Higher confidence the further we are from boundaries
    confidence = Math.min(98, 75 + minDistance * 10);
    
    if (data.goitre || data.queryHypothyroid || data.queryHyperthyroid) {
      riskLevel = 'Medium';
      confidence -= 10; // Less confidence if other risk factors are present
    } else {
      riskLevel = 'Low';
    }
  }
  
  // Round confidence to nearest integer
  confidence = Math.round(confidence);
  
  // Generate recommendations based on the prediction
  let recommendations: string[] = [];
  
  if (prediction === 'normal') {
    recommendations = [
      'Continue with regular thyroid function monitoring as recommended by your healthcare provider.',
      'Maintain a balanced diet with adequate iodine intake.',
      'Report any new symptoms to your healthcare provider.'
    ];
  } else if (prediction === 'hypothyroid') {
    recommendations = [
      'Consult with an endocrinologist to discuss these results.',
      'Further testing may be needed, including a complete thyroid panel.',
      'Consider lifestyle modifications to support thyroid health.',
      'If confirmed, medication (levothyroxine) may be prescribed to normalize thyroid levels.'
    ];
  } else {
    recommendations = [
      'Urgent consultation with an endocrinologist is recommended.',
      'Additional testing to determine the cause of hyperthyroidism may be necessary.',
      'Monitor heart rate and report any palpitations or irregular heartbeats.',
      'Treatment options may include medications, radioactive iodine therapy, or surgery.'
    ];
  }
  
  // Return the prediction result
  return {
    prediction,
    confidence,
    riskLevel,
    riskFactors,
    recommendations
  };
};