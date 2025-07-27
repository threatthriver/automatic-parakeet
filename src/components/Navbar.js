import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-logo">
          XenArc<span>AI</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/deepresearch" className="nav-link">DeepResearch</Link></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
