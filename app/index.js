import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';

require("!style!css!sass!./scss/app.scss");

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
