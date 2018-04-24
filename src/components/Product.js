import React from 'react';

let Product = ({product}) =>
  <div className="card dark darken-1">
    <div className="card-content dark-text">
      <span className="card-title">Card Title</span>
      <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
    </div>
    <div className="card-action">
      <a href="#">Add to Cart</a>
      <a href="#">This is a link</a>
    </div>
  </div>


export default Product
