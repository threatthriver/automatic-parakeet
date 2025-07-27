import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DeepResearch from './pages/DeepResearch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deepresearch" element={<DeepResearch />} />
      </Routes>
    </Router>
  );
}

export default App;
