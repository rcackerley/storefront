import React from 'react';
import LogoTitle from './LogoTitle';
import NavCart from './NavCart';

let Navbar = () =>
  <nav>
    <div className="nav-wrapper">
      <LogoTitle />
      <NavCart />
    </div>
  </nav>

export default Navbar;
