import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';

let RouterComp = () =>
  <Router>
    <div>
      <Route path="/" component={App} />
    </div>
  </Router>

export default RouterComp;
