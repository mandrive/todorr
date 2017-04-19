import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import Tether from 'tether';
import $ from 'jquery';

window.jQuery = window.$ = $;
window.Tether = Tether;

require('bootstrap');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
