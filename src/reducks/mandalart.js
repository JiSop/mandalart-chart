import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const reducerName = 'mandalart';

// SECTION : action types
const CHANGE_MAIN_GOAL = `${reducerName}/CHANGE_GOAL`;
const CHANGE_SUB_GOAL = `${reducerName}/CHANGE_SUB_GOAL`;
const CHANGE_PLAN = `${reducerName}/CHANGE_PLAN`;
const SET_MANDALART = `${reducerName}/SET_MANDALART`;
const INITIALIZE = `${reducerName}/INITIALIZE`;

// SECTION : action creators
export const changeMainGoal = createAction(
  CHANGE_MAIN_GOAL,
  mainGoal => mainGoal,
);
export const changeSubGoal = createAction(
  CHANGE_SUB_GOAL,
  ({ index, value }) => ({
    index,
    subGoal: value,
  }),
);
export const changePlan = createAction(CHANGE_PLAN, ({ id, name, value }) => ({
  id,
  name,
  value,
}));
export const setMandalart = createAction(
  SET_MANDALART,
  ({ mainGoal, subGoals }) => ({
    mainGoal,
    subGoals,
  }),
);
export const initialize = createAction(INITIALIZE);

// SECTION : reducer
const initialState = {
  mainGoal: '목표',
  subGoals: [
    {
      id: 1,
      goal: '계획',
      plans: ['', '', '', '', '', '', '', ''],
    },
    {
      id: 2,
      goal: '계획',
      plans: ['', '', '', '', '', '', '', ''],
    },
    {
      id: 3,
      goal: '계획',
      plans: ['', '', '', '', '', '', '', ''],
    },
    {
      id: 4,
      goal: '계획',
      plans: ['', '', '', '', '', '', '', ''],
    },
    {
      id: 5,
      goal: '계획',
      plans: ['', '', '', '', '', '', '', ''],
    },
    {
      id: 6,
      goal: '계획',
      plans: ['', '', '', '', '', '', '', ''],
    },
    {
      id: 7,
      goal: '계획',
      plans: ['', '', '', '', '', '', '', ''],
    },
    {
      id: 8,
      goal: '계획',
      plans: ['', '', '', '', '', '', '', ''],
    },
  ],
};

const reducerMap = {
  [CHANGE_MAIN_GOAL]: (state, { payload: mainGoal }) => ({
    ...state,
    mainGoal,
  }),
  [CHANGE_SUB_GOAL]: (state, { payload: { index, subGoal } }) =>
    produce(state, draft => {
      draft.subGoals[index].goal = subGoal;
    }),
  [CHANGE_PLAN]: (state, { payload: { id, name, value } }) =>
    produce(state, draft => {
      draft.subGoals[id].plans[name] = value;
    }),
  [SET_MANDALART]: (state, { payload: { mainGoal, subGoals } }) => ({
    ...state,
    mainGoal,
    subGoals,
  }),
  [INITIALIZE]: () => initialState,
};

export default handleActions(reducerMap, initialState);
