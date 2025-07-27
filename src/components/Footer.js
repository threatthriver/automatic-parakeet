import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaBook, FaCode, FaQuestionCircle } from 'react-icons/fa';
import '../styles/components/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>XenArcAI</h3>
            <p>Empowering research with advanced AI technology. Transform how you discover and analyze information.</p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="mailto:contact@xenarcai.com" className="social-link" aria-label="Email">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="/documentation">
                  <FaBook className="link-icon" /> Documentation
                </a>
              </li>
              <li>
                <a href="/api-docs">
                  <FaCode className="link-icon" /> API Reference
                </a>
              </li>
              <li>
                <a href="/tutorials">
                  <FaBook className="link-icon" /> Tutorials
                </a>
              </li>
              <li>
                <a href="/help">
                  <FaQuestionCircle className="link-icon" /> Help Center
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} XenArcAI DeepResearch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
