import React from 'react';
import { Activity, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Activity className="h-6 w-6 text-cyan-400 mr-2" />
              <h2 className="text-xl font-bold">ThyroidPredict</h2>
            </div>
            <p className="text-slate-300">
              Advancing thyroid health through innovative prediction technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-slate-300 hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#predict" className="text-slate-300 hover:text-cyan-400 transition-colors">Prediction</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#education" className="text-slate-300 hover:text-cyan-400 transition-colors">Education</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Thyroid Research</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Medical References</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">Model Documentation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-slate-300 space-y-2">
              <p>Medical Research Center</p>
              <p>123 Health Avenue</p>
              <p>San Francisco, CA 94103</p>
              <p className="pt-2">
                <a href="mailto:info@thyroidpredict.example" className="hover:text-cyan-400 transition-colors">
                  info@thyroidpredict.example
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} ThyroidPredict. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;