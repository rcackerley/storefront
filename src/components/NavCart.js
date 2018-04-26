import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'react-materialize'
import Badges from './Badges';

let NavCart = () =>
  <ul id="nav-mobile" className="right flex-me">
    <li>
      <Link to="/login"><Icon>person</Icon></Link>
    </li>
    <li>
      <Link to="/cart"><Icon>shopping_cart</Icon><Badges /></Link>
    </li>
  </ul>

export default NavCart;
