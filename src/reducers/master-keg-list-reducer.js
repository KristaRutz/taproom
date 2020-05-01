import * as c from "../actions/ActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case c.ADD_NEW_KEG:
      return Object.assign({}, state, { [action.keg.id]: action.keg });
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
