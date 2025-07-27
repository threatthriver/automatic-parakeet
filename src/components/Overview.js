import React from 'react';
import '../App.css';

const Overview = () => {
  return (
    <section id="overview" className="section">
      <div className="container">
        <h2>What is XenArcAI DeepResearch?</h2>
        <p className="section-description">
          XenArcAI DeepResearch is an advanced AI-powered research platform designed to transform 
          how organizations conduct research, analyze data, and derive actionable insights at scale.
        </p>
        <div className="overview-cards">
          <div className="overview-card">
            <h3>Deep Analysis</h3>
            <p>Uncover hidden patterns and relationships in your data with our advanced machine learning algorithms.</p>
          </div>
          <div className="overview-card">
            <h3>Lightning Fast</h3>
            <p>Process and analyze large datasets in a fraction of the time compared to traditional methods.</p>
          </div>
          <div className="overview-card">
            <h3>Precision Focused</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
