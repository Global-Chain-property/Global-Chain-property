
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import PropertyShowcase from '../components/PropertyShowcase';
import Benefits from '../components/Benefits';
import Demo from '../components/Demo';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <PropertyShowcase />
        <Benefits />
        <Demo />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Home;