import React from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';

class ProductSlider extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let {products, categories} = this.props
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      categories.map(category =>
        <div className="products-slider">
          <Link className="block" to={`${category}`}><h4>{category}</h4></Link>
          <Slider {...settings}>
            {products.map(product => category === product.type && <Product product={product} />)}
          </Slider>
        </div>
      )
    )
  }
}

let mapStateToProps = (state) => ({products: state.products, categories: state.categories});
let ProductSliderContainer = connect(mapStateToProps)(ProductSlider)
export default ProductSliderContainer;
