import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

let Category = ({ categories }) =>
  <ul>
    {categories.map(category => <li><Link to={`/${category}`}>{category}</Link></li>)}
  </ul>

let mapStateToProps = (state) => ({categories: state.categories})
let CategoryContainer = connect(mapStateToProps)(Category)
export default CategoryContainer;
