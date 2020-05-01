import * as c from "../actions/ActionTypes";

export default (state = false, action) => {
  if (action.type === c.TOGGLE_ADD_KEG_FORM) {
    return !state;
  } else if (action.type === c.SET_ADD_KEG_FORM_ON) {
    return action.payload;
  } else return state;
};
