import React from 'react';
import Hero from '../components/Hero';
import PredictionSection from '../components/PredictionSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';

const Home: React.FC = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      
      <section id="predict" className="py-16 bg-white">
        <PredictionSection />
      </section>
      
      <section id="about" className="py-16 bg-slate-50">
        <AboutSection />
      </section>
      
      <section id="education" className="py-16 bg-white">
        <EducationSection />
      </section>
    </div>
  );
};

export default Home;