import { useState } from 'react'
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/ Feature';
import FeaturedCarousel from './components/FeaturedCarousel';
import '../node_modules/flowbite/dist/flowbite.css';



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <FeaturedCarousel />
      {/* {/} */}
    </div>
  );
};

export default App;