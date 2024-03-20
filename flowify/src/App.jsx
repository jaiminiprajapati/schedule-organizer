import { useState } from 'react'
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/ Feature';
import FeaturedCarousel from './components/FeaturedCarousel';
import Comment from './components/Comment';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import '../node_modules/flowbite/dist/flowbite.css';



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <FeaturedCarousel />
      <Comment />
      <SignUp />
      <Footer />
      {/* {/} */}
    </div>
  );
};

export default App;