import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>XenArcAI</h3>
            <p>AI-powered research for the future</p>
          </div>
          <div className="footer-links">
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Support</a>
            <h4>Resources</h4>
            <ul>
              <li><a href="/">Documentation</a></li>
              <li><a href="/">API Reference</a></li>
              <li><a href="/">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="/">Twitter</a></li>
              <li><a href="/">LinkedIn</a></li>
              <li><a href="/">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 XenArcAI DeepResearch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
