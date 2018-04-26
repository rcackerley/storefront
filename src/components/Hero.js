import React from 'react';
import Logo from './Logo';
import NavCart from './NavCart'

let Hero = () =>
  <div className="hero-image">
    <NavCart />
    <div className="hero-text">
      <Logo />
      <button>Shop Now</button>
    </div>
  </div>

export default Hero;
