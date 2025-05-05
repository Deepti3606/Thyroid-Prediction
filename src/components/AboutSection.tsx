import React from 'react';
import { Shield, Brain, Database, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">About ThyroidPredict</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Our advanced machine learning system leverages Python and medical expertise to provide accurate thyroid condition predictions.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="bg-cyan-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-cyan-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Technology</h3>
            <p className="text-slate-600">
              ThyroidPredict uses advanced machine learning algorithms implemented in Python to analyze thyroid test results. Our model has been trained on thousands of clinical cases to provide accurate predictions of thyroid conditions based on laboratory values and patient information.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Database className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">The Data</h3>
            <p className="text-slate-600">
              Our predictive model is trained on a comprehensive dataset of anonymized patient records, thyroid test results, and clinical outcomes. This data-driven approach enables us to identify patterns and correlations that might not be immediately apparent in individual test results.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Privacy & Security</h3>
            <p className="text-slate-600">
              We prioritize data privacy and security. All predictions are processed locally in your browser, and we do not store any of your health information. Our system is designed with privacy-by-design principles to ensure your sensitive medical data remains confidential.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-purple-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Team</h3>
            <p className="text-slate-600">
              ThyroidPredict was developed by a multidisciplinary team of endocrinologists, data scientists, and software engineers. Our combined expertise ensures that our predictions are not only statistically accurate but also clinically relevant and useful in real-world healthcare settings.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-600 max-w-3xl mx-auto">
            While our predictive model is highly accurate, it is designed to support, not replace, professional medical advice. Always consult with a healthcare provider for proper diagnosis and treatment of thyroid conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;