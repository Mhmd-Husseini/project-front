import React from 'react';
import Navbar from '../../shared/navbar';
import Footer from '../../shared/Footer';
import Login from '../../Admin/login';

import "./style.css";

const Landing = () => {

  return (
      <div className="landing-page">
        <Navbar one="Contact Us" two="About Us"/>
        <Login/>
        <Footer/>
      </div>
  );
};

export default Landing;
