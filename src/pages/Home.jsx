import React from 'react';
import '../../src/styles/home.css';

import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import SocialNetwork from '../components/SocialNetwork';
const Home = () => {
  return (
    <>
      <Navbar />
      <Presentation />
      <SocialNetwork />
    </>
  );
};

export default Home;