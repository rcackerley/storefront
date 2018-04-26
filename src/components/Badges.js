import React from 'react';
import {connect} from 'react-redux';

let Badges = ({cart}) => {
  let total = 0
  cart.forEach(product => {total = product.quantity + total})
  return cart.length > 0 && <span className="new badge">{total}</span>
}

let mapStateToProps = state => ({cart: state.cart})
let BadgesContainer = connect(mapStateToProps)(Badges);

export default BadgesContainer;
