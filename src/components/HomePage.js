import React from 'react';
import Hero from './Hero';
import ProductSlider from './ProductSlider';
import {getProducts} from '../ajax/index'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {setProducts} from '../js/actions/index';

let Homepage = ({token, dispatch}) => {
  getProducts(token)
  .then(res => dispatch(setProducts(res)))
  return (
    <div>
      <Hero />
      <ProductSlider />
    </div>)
}

let mapDispatchToProps = (dispatch) => ({dispatch});
let mapStateToProps = state => ({token: state.token});
let HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(Homepage);
export default HomepageContainer;
