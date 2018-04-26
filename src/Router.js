import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductScreen from './components/ProductScreen'
import MyCart from './components/MyCart';
import LoginScreen from './components/LoginScreen';

let RouterComp = () =>
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/gear" component={ProductScreen} />
      <Route path="/tickets" component={ProductScreen} />
      <Route path="/sports" component={ProductScreen} />
      <Route path="/cart" component={MyCart} />
      <Route path="/login" component={LoginScreen} />
    </div>
  </Router>

export default RouterComp;
