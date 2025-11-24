import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Merchandise from '../components/Merchandise';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <Merchandise />
      <About />
      <Contact />
    </>
  );
};

export default Home;
