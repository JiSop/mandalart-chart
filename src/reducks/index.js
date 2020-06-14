import { combineReducers } from 'redux';
import modal from './modal';
import mandalart from './mandalart';

const rootReducer = combineReducers({
  modal,
  mandalart,
});

export default rootReducer;
