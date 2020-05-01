import * as c from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case c.ADD_NEW_KEG:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    default:
      return state;
  }
};
