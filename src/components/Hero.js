import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiSearch, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>New</span> AI Research Platform v2.0
          </div>
          
          <h1>Transform Your Research with <span className="gradient-text">AI-Powered</span> Insights</h1>
          
          <p className="hero-subtitle">
            XenArcAI DeepResearch combines cutting-edge artificial intelligence with intuitive design 
            to revolutionize how you discover, analyze, and understand complex information.
          </p>
          
          <div className="hero-buttons">
            <Link to="/deepresearch" className="btn primary hero-cta">
              Try DeepResearch <FiArrowRight className="btn-icon" />
            </Link>
            <a href="#features" className="btn secondary">
              Learn More
            </a>
          </div>
          
          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon">
                <FiSearch />
              </div>
              <span>Smart Search</span>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FiTrendingUp />
              </div>
              <span>Trend Analysis</span>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <FiBarChart2 />
              </div>
              <span>Data Visualization</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <div className="hero-image-content">
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
