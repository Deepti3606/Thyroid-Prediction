import React, { useState } from 'react';
import { Zap, ThermometerSun, Activity, Book } from 'lucide-react';

type ThyroidCondition = 'hypothyroidism' | 'hyperthyroidism' | 'normal';

const EducationSection: React.FC = () => {
  const [activeCondition, setActiveCondition] = useState<ThyroidCondition>('normal');

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Understanding Thyroid Conditions</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Learn about different thyroid conditions, their symptoms, causes, and treatments to better understand your health.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Condition tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveCondition('normal')}
            className={`px-5 py-3 rounded-lg flex items-center transition-colors ${
              activeCondition === 'normal'
                ? 'bg-green-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Activity className="mr-2 h-5 w-5" />
            Normal Thyroid Function
          </button>
          
          <button
            onClick={() => setActiveCondition('hypothyroidism')}
            className={`px-5 py-3 rounded-lg flex items-center transition-colors ${
              activeCondition === 'hypothyroidism'
                ? 'bg-amber-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ThermometerSun className="mr-2 h-5 w-5" />
            Hypothyroidism
          </button>
          
          <button
            onClick={() => setActiveCondition('hyperthyroidism')}
            className={`px-5 py-3 rounded-lg flex items-center transition-colors ${
              activeCondition === 'hyperthyroidism'
                ? 'bg-red-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Zap className="mr-2 h-5 w-5" />
            Hyperthyroidism
          </button>
        </div>
        
        {/* Condition content */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          {activeCondition === 'normal' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Normal Thyroid Function</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">What is the Thyroid?</h4>
                  <p className="text-slate-600">
                    The thyroid is a butterfly-shaped gland located at the base of your neck. It produces hormones that regulate many critical bodily functions, including heart rate, body temperature, metabolism, and more.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Normal Hormone Levels</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li><strong>TSH:</strong> 0.4 - 4.0 mIU/L</li>
                    <li><strong>Free T4:</strong> 0.8 - 1.8 ng/dL</li>
                    <li><strong>Free T3:</strong> 2.3 - 4.2 pg/mL</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">How the Thyroid Works</h4>
                  <p className="text-slate-600">
                    The thyroid produces hormones T3 (triiodothyronine) and T4 (thyroxine) in response to thyroid-stimulating hormone (TSH) from the pituitary gland. These hormones travel through your bloodstream to regulate metabolism, energy production, and organ function.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Maintaining Thyroid Health</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Consume adequate iodine through diet (seafood, dairy, iodized salt)</li>
                    <li>Reduce stress with regular exercise and mindfulness practices</li>
                    <li>Avoid excessive intake of goitrogenic foods (raw cruciferous vegetables)</li>
                    <li>Get regular screenings if you have a family history of thyroid conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeCondition === 'hypothyroidism' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold text-amber-700 mb-4">Hypothyroidism</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">What is Hypothyroidism?</h4>
                  <p className="text-slate-600">
                    Hypothyroidism occurs when your thyroid doesn't produce enough thyroid hormones. This slows down many of your body's processes, leading to a variety of symptoms affecting multiple body systems.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Common Symptoms</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Fatigue and weakness</li>
                    <li>Weight gain</li>
                    <li>Increased sensitivity to cold</li>
                    <li>Dry skin and hair</li>
                    <li>Depression</li>
                    <li>Impaired memory</li>
                    <li>Elevated cholesterol levels</li>
                    <li>Muscle aches and stiffness</li>
                    <li>Irregular or heavy menstrual periods</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Diagnosis</h4>
                  <p className="text-slate-600">
                    Hypothyroidism is diagnosed through blood tests measuring:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li><strong>TSH:</strong> Elevated ({'>'}4.0 mIU/L)</li>
                    <li><strong>Free T4:</strong> Low ({'<'}0.8 ng/dL)</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Causes</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Hashimoto's thyroiditis (autoimmune condition)</li>
                    <li>Thyroid surgery or radiation treatment</li>
                    <li>Certain medications</li>
                    <li>Iodine deficiency</li>
                    <li>Congenital thyroid defects</li>
                    <li>Pituitary gland damage</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Treatment</h4>
                  <p className="text-slate-600">
                    The standard treatment is thyroid hormone replacement therapy with levothyroxine (synthetic T4), which restores hormone levels and relieves symptoms. Regular monitoring and dose adjustments may be necessary.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeCondition === 'hyperthyroidism' && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Hyperthyroidism</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">What is Hyperthyroidism?</h4>
                  <p className="text-slate-600">
                    Hyperthyroidism occurs when your thyroid produces excessive thyroid hormones, accelerating your body's metabolism and causing various symptoms due to increased energy expenditure.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Common Symptoms</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Unintentional weight loss</li>
                    <li>Rapid heartbeat or palpitations</li>
                    <li>Increased appetite</li>
                    <li>Nervousness, anxiety, or irritability</li>
                    <li>Tremors in hands and fingers</li>
                    <li>Increased sweating and heat sensitivity</li>
                    <li>Fatigue and muscle weakness</li>
                    <li>Sleep difficulties</li>
                    <li>Enlarged thyroid (goiter)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Diagnosis</h4>
                  <p className="text-slate-600">
                    Hyperthyroidism is diagnosed through blood tests showing:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li><strong>TSH:</strong> Low or undetectable ({'<'}0.4 mIU/L)</li>
                    <li><strong>Free T4 and/or T3:</strong> Elevated</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Causes</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Graves' disease (autoimmune condition)</li>
                    <li>Toxic nodular goiter</li>
                    <li>Thyroiditis (inflammation of the thyroid)</li>
                    <li>Excessive iodine intake</li>
                    <li>Taking too much thyroid medication</li>
                    <li>Benign tumors of the thyroid or pituitary gland</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold text-slate-800 mt-6 mb-3">Treatment Options</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li><strong>Antithyroid medications:</strong> Methimazole or propylthiouracil</li>
                    <li><strong>Radioactive iodine therapy:</strong> Destroys overactive thyroid cells</li>
                    <li><strong>Beta blockers:</strong> To manage symptoms like rapid heart rate</li>
                    <li><strong>Surgery:</strong> Partial or complete thyroid removal (thyroidectomy)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 flex justify-center">
          <a 
            href="#" 
            className="flex items-center text-cyan-600 hover:text-cyan-800 transition-colors"
          >
            <Book className="mr-2 h-5 w-5" />
            View our complete thyroid health knowledge base
          </a>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;