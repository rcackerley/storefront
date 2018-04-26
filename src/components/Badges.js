import React from 'react';
import {connect} from 'react-redux';

let Badges = ({cart}) => {
  let sum = cart.reduce((total, cart) => total + cart.quantity, 0);
  return cart.length > 0 && <span className="new badge">{sum}</span>
}

let mapStateToProps = state => ({cart: state.cart})
let BadgesContainer = connect(mapStateToProps)(Badges);

export default BadgesContainer;
