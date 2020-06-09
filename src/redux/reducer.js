import { SET_GOAL } from './actions';

const goal = (state, action) => {
  switch (action.type) {
    case SET_GOAL:
      return {
        text: action.text,
      };
    default:
      return state;
  }
};

const goals = (state = [], action) => {
  switch (action.type) {
    case SET_GOAL:
      return [...state, goal(undefined, action)];
    default:
      return state;
  }
};

export default goals;
