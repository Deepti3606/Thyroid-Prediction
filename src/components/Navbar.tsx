import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Activity className="h-8 w-8 text-cyan-600 mr-2" />
          <h1 className="text-xl font-bold text-slate-800">ThyroidPredict</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-slate-700 hover:text-cyan-600 transition-colors">Home</a>
          <a href="#predict" className="text-slate-700 hover:text-cyan-600 transition-colors">Prediction</a>
          <a href="#about" className="text-slate-700 hover:text-cyan-600 transition-colors">About</a>
          <a href="#education" className="text-slate-700 hover:text-cyan-600 transition-colors">Education</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-slate-700 hover:text-cyan-600 transition-colors py-2 border-b border-slate-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#predict" 
              className="text-slate-700 hover:text-cyan-600 transition-colors py-2 border-b border-slate-100"
              onClick={() => setIsOpen(false)}
            >
              Prediction
            </a>
            <a 
              href="#about" 
              className="text-slate-700 hover:text-cyan-600 transition-colors py-2 border-b border-slate-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#education" 
              className="text-slate-700 hover:text-cyan-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Education
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;