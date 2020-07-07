import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import configureStore from './reducks/configureStore';
import mandalart, { setMandalart } from './reducks/mandalart';

const store = configureStore(mandalart);

function loadMandalart() {
  try {
    const mandalaChart = JSON.parse(localStorage.getItem('mandalart'));
    if (!mandalaChart) return;
    const { mainGoal, subGoals } = mandalaChart;
    store.dispatch(setMandalart({ mainGoal, subGoals }));
  } catch (e) {
    console.log('만다라차트 불러오기에 실패했습니다 😖', e);
  }
}

loadMandalart();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
