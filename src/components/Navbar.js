import React from 'react';
import Logo from './Logo';
import NavCart from './NavCart';

let Navbar = () =>
  <nav>
    <div className="nav-wrapper">
      <Logo />
      <NavCart />
    </div>
  </nav>

export default Navbar;
