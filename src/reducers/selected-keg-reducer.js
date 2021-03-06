import * as c from "../actions/ActionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case c.DESELECT_KEG:
      return null;
    case c.SELECT_KEG:
      return action.keg;
    default:
      return state;
  }
};
