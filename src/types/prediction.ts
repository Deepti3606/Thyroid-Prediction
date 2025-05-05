export interface PredictionData {
  age: string;
  gender: string;
  tsh: string;
  t3: string;
  t4: string;
  thyroxine: boolean;
  queryHypothyroid: boolean;
  queryHyperthyroid: boolean;
  pregnant: boolean;
  sick: boolean;
  tumor: boolean;
  lithium: boolean;
  goitre: boolean;
}

export interface PredictionResult {
  prediction: 'normal' | 'hypothyroid' | 'hyperthyroid';
  confidence: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  riskFactors: {
    age: boolean;
    highTSH: boolean;
    lowT4: boolean;
    goitre: boolean;
  };
  recommendations: string[];
}