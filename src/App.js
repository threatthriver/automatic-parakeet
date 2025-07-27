import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DeepResearch from './pages/DeepResearch';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deepresearch" element={<DeepResearch />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
