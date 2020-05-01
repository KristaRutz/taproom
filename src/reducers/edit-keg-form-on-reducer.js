import * as c from "../actions/ActionTypes";

export default (state = false, action) => {
  if (action.type === c.TOGGLE_EDIT_KEG_FORM) {
    return !state;
  } else return state;
};
