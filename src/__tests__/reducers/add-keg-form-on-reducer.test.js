import * as c from "../../actions/ActionTypes";
//import * as a from "../actions"
import addKegFormOnReducer from "../../reducers/add-keg-form-on-reducer";

describe("addKegFormReducer", () => {
  test("should return default state if the action type passed into the reducer is not recognized", () => {
    expect(addKegFormOnReducer(false, { type: null })).toEqual(false);
  });

  test("should toggle form visibility state", () => {
    expect(addKegFormOnReducer(false, { type: c.TOGGLE_ADD_KEG_FORM })).toEqual(
      true
    );
    expect(addKegFormOnReducer(true, { type: c.TOGGLE_ADD_KEG_FORM })).toEqual(
      false
    );
  });
});
