import React from 'react';
import '../App.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Features</div>
          <h2 className="section-title">Powerful Capabilities</h2>
          <p className="section-description">
            Discover the features that make XenArcAI the ultimate research companion
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="card-header">
              <div className="feature-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>AI-Powered Analysis</h3>
            </div>
            <p>Advanced AI algorithms that understand context and provide intelligent insights</p>
            <div className="feature-tags">
              <span className="tag">NLP</span>
              <span className="tag">Machine Learning</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="card-header">
              <div className="feature-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Deep Research</h3>
            </div>
            <p>Comprehensive analysis of documents, articles, and data sources</p>
            <div className="feature-tags">
              <span className="tag">Document Analysis</span>
              <span className="tag">Data Mining</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="card-header">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Real-time Insights</h3>
            </div>
            <p>Get instant answers and recommendations based on your research needs</p>
            <div className="feature-tags">
              <span className="tag">Real-time</span>
              <span className="tag">Analytics</span>
            </div>
          </div>
          <div className="feature-card">
            <div className="card-header">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>User-Friendly Interface</h3>
            </div>
            <p>Intuitive design that makes complex research accessible to everyone</p>
            <div className="feature-tags">
              <span className="tag">Responsive</span>
              <span className="tag">Intuitive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
