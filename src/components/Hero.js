import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Transform Your Research with AI-Powered Insights</h1>
          <p className="hero-subtitle">
            XenArcAI DeepResearch combines cutting-edge artificial intelligence with intuitive design 
            to revolutionize how you discover, analyze, and understand complex information.
          </p>
          <div className="hero-buttons">
            <Link to="/deepresearch" className="btn primary">Try DeepResearch</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
