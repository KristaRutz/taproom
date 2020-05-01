import * as c from "../actions/ActionTypes";

export default (state = false, action) => {
  if (action.type === c.TOGGLE_EDIT_KEG_FORM) {
    return !state;
  } else if (action.type === c.SET_EDIT_KEG_FORM_ON) {
    return action.payload;
  } else return state;
};
