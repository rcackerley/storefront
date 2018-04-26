import React from 'react';
import AddToCartButton from './AddToCartButton';

let Product = ({product}) =>
  <div className="product">
    <img src={`${product.img}`} />
    <h5>{product.name}</h5>
    <span>{product.price}</span>
    <p>{product.desc}</p>
    <AddToCartButton product={product} />
  </div>


export default Product
