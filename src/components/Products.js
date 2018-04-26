import React from 'react';
import Product from './Product'
import {connect} from 'react-redux';

let Products = ({products, category}) => {
    return <div className="products">
    {products.map(product =>
      product.type === category && <Product product={product} /> )}
  </div>
}

let mapStateToProps = (state) => ({products: state.products})

let ProductsContainer = connect(mapStateToProps)(Products);
export default ProductsContainer;
