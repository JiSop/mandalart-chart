import { combineReducers } from 'redux';
import goals from './goals';
import mandalart from './mandalart';

const rootReducer = combineReducers({
  goals,
  mandalart,
});

export default rootReducer;
