import React from 'react';
import '../App.css';

const DeepResearch = () => {
  return (
    <div className="deep-research">
      <section className="research-hero">
        <div className="container">
          <h1>XenArcAI DeepResearch Platform</h1>
          <p className="subtitle">Advanced AI-powered research and analysis at your fingertips</p>
          
          <div className="research-stats">
            <div className="stat-item">
              <h3>10x</h3>
              <p>Faster Research</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Accuracy</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>AI Assistance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="research-features">
        <div className="container">
          <h2>Powerful Research Capabilities</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Advanced Search</h3>
              <p>Find relevant information across millions of documents with our intelligent search algorithms.</p>
            </div>
            <div className="feature-card">
              <h3>Data Visualization</h3>
              <p>Transform complex data into clear, interactive visualizations for better insights.</p>
            </div>
            <div className="feature-card">
              <h3>Automated Analysis</h3>
              <p>Let our AI analyze patterns and extract key information from your research materials.</p>
            </div>
            <div className="feature-card">
              <h3>Collaborative Tools</h3>
              <p>Work seamlessly with your team in real-time on research projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upload Your Data</h3>
              <p>Import documents, PDFs, or connect to your existing data sources.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>AI Processing</h3>
              <p>Our AI analyzes and indexes your content for optimal search and discovery.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Discover Insights</h3>
              <p>Get relevant results, patterns, and connections in seconds.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Research?</h2>
          <p>Start your free trial today and experience the power of AI-driven research.</p>
          <button className="btn primary">Start Free Trial</button>
        </div>
      </section>
    </div>
  );
};

export default DeepResearch;
