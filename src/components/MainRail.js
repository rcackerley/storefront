import React from 'react';
import BreadCrumb from './BreadCrumb';
import ProductSmallSlider from './ProductSmallSlider';
import { withRouter } from 'react-router-dom';


let MainRail = (props) =>
  <div className="full">
    <BreadCrumb />
    <ProductSmallSlider />
  </div>
let MainRailContainer = withRouter(MainRail);

export default MainRailContainer;
