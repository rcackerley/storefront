import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'react-materialize'

let NavCart = () =>
  <ul id="nav-mobile" className="right">
    <li>
      <Link to="#"><Icon>person</Icon></Link>
    </li>
    <li>
      <Link to="#"><Icon>shopping_cart</Icon></Link>
    </li>
  </ul>

export default NavCart;
