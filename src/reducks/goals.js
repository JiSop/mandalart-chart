import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const reducerName = 'goals';
// SECTION : action types
const CHANGE_GOAL = `${reducerName}/CHANGE_GOAL`;
const CHANGE_PLAN = `${reducerName}/CHANGE_PLAN`;

// SECTION : action creators
export const changeGoal = createAction(CHANGE_GOAL, goal => goal);
export const changePlan = createAction(CHANGE_PLAN, ({ name, value }) => ({
  name,
  value,
}));

// SECTION : initial state
const initialState = {
  id: '',
  goal: '',
  plans: ['', '', '', '', '', '', '', ''],
};

// SECTION : reducer
const reducerMap = {
  [CHANGE_GOAL]: (state, { payload: goal }) => ({ ...state, goal }),
  [CHANGE_PLAN]: (state, { payload: { name, value } }) =>
    produce(state, draft => {
      draft.plans[name] = value;
    }),
};

export default handleActions(reducerMap, initialState);
