import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import '../node_modules/flowbite/dist/flowbite.css';



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Diğer bileşenleri buraya ekleyebilirsiniz */}
    </div>
  );
};

export default App;