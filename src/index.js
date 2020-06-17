import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import configureStore from './reducks/configureStore';
import mandalart from './reducks/mandalart';

const store = configureStore(mandalart);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
