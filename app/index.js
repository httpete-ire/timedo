import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pomodoroApp from './reducers';

require("!style!css!sass!./scss/app.scss");

const store = createStore(pomodoroApp, {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
