import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-brand">
            <h1>XenArcAI DeepResearch</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#overview">Overview</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transform Your Research with AI-Powered Insights</h1>
            <p className="hero-subtitle">
              XenArcAI DeepResearch combines cutting-edge artificial intelligence with intuitive design 
              to revolutionize how you discover, analyze, and understand complex information.
            </p>
            <div className="hero-buttons">
              <a href="/deepresearch" className="btn primary">Try DeepResearch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
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
              <p>Deliver accurate, reliable results with our state-of-the-art AI models and validation systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="container">
          <h2>Powerful Features for Modern Research</h2>
          <p className="section-description">
            Our platform provides everything you need to conduct comprehensive research efficiently and effectively.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Natural Language Processing</h3>
              <p>Advanced NLP capabilities to understand and process complex research documents and datasets.</p>
            </div>
            <div className="feature-item">
              <h3>Automated Data Analysis</h3>
              <p>Let our AI handle the heavy lifting of data processing and initial analysis.</p>
            </div>
            <div className="feature-item">
              <h3>Interactive Visualizations</h3>
              <p>Create stunning, interactive visualizations to better understand your research data.</p>
            </div>
            <div className="feature-item">
              <h3>Collaborative Workspace</h3>
              <p>Work seamlessly with your team in real-time on shared research projects.</p>
            </div>
            <div className="feature-item">
              <h3>Custom AI Models</h3>
              <p>Tailor AI models to your specific research needs and domains.</p>
            </div>
            <div className="feature-item">
              <h3>Secure & Compliant</h3>
              <p>Enterprise-grade security and compliance with industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Research?</h2>
          <p>Join leading organizations that trust XenArcAI DeepResearch for their most challenging research needs.</p>
          <a href="/deepresearch" className="btn primary">Get Started Today</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>XenArcAI DeepResearch</h3>
              <p>Transforming research with AI-powered insights and advanced analytics.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 XenArcAI DeepResearch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
