import React from 'react';
import {Icon} from 'react-materialize';
import {connect} from 'react-redux';
import {addToCart} from '../js/actions/index';

let AddToCartButton = ({product, addToCart}) =>
  <button onClick={() => addToCart(product)}>
    Add to Cart<Icon>add_shopping_cart</Icon>
  </button>

let mapDispatchToProps = dispatch => ({addToCart: (product) => dispatch(addToCart(product))})
let mapStateToProps = state => ({});
let AddToCartButtonContainer = connect(mapStateToProps, mapDispatchToProps)(AddToCartButton);
export default AddToCartButtonContainer;
