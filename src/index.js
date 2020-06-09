import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import reducer from './redux/reducer';
import App from './App.js';
import dumdata from './redux/dumData';

const initialState = dumdata;

const store = configureStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
