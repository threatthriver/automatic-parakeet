import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="App">
      <Hero />
      <Overview />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;

