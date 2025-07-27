import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <i className="fas fa-brain"></i>
          XenArcAI
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i>
            Home
          </Link>
          <Link to="/deepresearch" className="nav-link">
            <i className="fas fa-search"></i>
            DeepResearch
          </Link>
          <a href="#contact" className="nav-link">
            <i className="fas fa-envelope"></i>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
