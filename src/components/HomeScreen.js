import React from 'react';
import Navbar from './Navbar';
import Products from './Products';
import ProductTypeTitle from './ProductTypeTitle';
import {connect} from 'react-redux';

let HomeScreen = ({categories}) =>
  <div>
    <Navbar />
    {categories.map(category =>
      <div>
        <ProductTypeTitle category={category} />
        <Products category={category}/>
      </div>
    )}
  </div>

let mapStateToProps = (state) => ({categories: state.categories});
let HomeScreenContainer = connect(mapStateToProps)(HomeScreen);
export default HomeScreenContainer;
