// SECTION : action types
const SET_GOAL = 'SET_GOAL';

// SECTION: action creators
function setGoal(text) {
  return { type: SET_GOAL, text };
}

export { SET_GOAL, setGoal };
