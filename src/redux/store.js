import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(reducer, initialState) {
  return createStore(reducer, initialState, composeWithDevTools());
}
