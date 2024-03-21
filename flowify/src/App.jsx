
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/carousel" element={<FeaturedCarousel />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
};


export default App;
