import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Research?</h2>
          <p>Experience the power of AI-driven research today. Start your journey with XenArcAI DeepResearch.</p>
          <div className="cta-buttons">
            <Link to="/deepresearch" className="btn primary">
              <i className="fas fa-rocket"></i>
              Get Started
            </Link>
            <Link to="/deepresearch" className="btn secondary">
              <i className="fas fa-play"></i>
              Try Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
