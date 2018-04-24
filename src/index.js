import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import Router from './Router';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './js/store/index';

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
