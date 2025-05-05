import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPredict = () => {
    const predictSection = document.getElementById('predict');
    if (predictSection) {
      predictSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-cyan-700 to-cyan-900 text-white pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU0LjAzNDkgMTIuNzY3NEM1NS4xODM5IDEwLjgxNjQgNTUuODMwOSA4LjU5NTM3IDU1LjkxMTkgNi4zMTkzN0M1NS45OTI5IDQuMDQzMzcgNTUuNTA1OSAxLjc4MjM3IDU0LjQ4OTkgMS44MzIzN0M1My40NzM5IDEuODgyMzcgNTIuMzM5OSAzLjgwOTM3IDUyLjI1ODkgNi4wODUzN0M1Mi4xNzc5IDguMzYxMzcgNTIuODg1OSAxMC44MTYzIDUxLjczNzkgMTIuNzY3NEw1NC4wMzQ5IDEyLjc2NzRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4=')]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advanced Thyroid Condition Prediction
          </h1>
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Using machine learning and Python to provide accurate thyroid condition predictions based on your test results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              onClick={scrollToPredict}
              className="bg-white text-cyan-800 px-8 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-cyan-50 transition-colors shadow-lg"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a 
              href="#education"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#ffffff"
            opacity=".25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="#ffffff"
            opacity=".5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;