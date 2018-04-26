import React from 'react';
import Product from './Product';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import {withRouter} from 'react-router-dom';

class ProductSmallSlider extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {products, location} = this.props;
    let category = location.pathname.substr(1);
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };

    return (
      <div className="products-slider">
        <Slider {...settings}>
          {products.map(product => category === product.type && <Product product={product} />)}
        </Slider>
      </div>
  )
  }
}

let mapStateToProps = state => ({products: state.products})
let ProductSmallSliderContainer = connect(mapStateToProps)(ProductSmallSlider);
let ProductSmallSliderContainerWithRoute = withRouter(ProductSmallSliderContainer);
export default ProductSmallSliderContainerWithRoute;
