import React from 'react';
import { Link } from 'react-router-dom';
import {Icon} from 'react-materialize';
import {connect} from 'react-redux';
import Badges from './Badges';
import Profile from './Profile';

let NavCart = () =>
  <ul id="nav-mobile" className="right flex-me">
    <li>
      <Link to="/login"><Profile /><Icon>person</Icon></Link>
    </li>
    <li>
      <Link to="/cart"><Icon>shopping_cart</Icon><Badges /></Link>
    </li>
  </ul>

export default NavCart;
