import * as c from "../../actions/ActionTypes";
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

  test("should explicitly set form visibility state", () => {
    expect(
      addKegFormOnReducer(false, {
        type: c.SET_ADD_KEG_FORM_ON,
        payload: true,
      })
    ).toEqual(true);
    expect(
      addKegFormOnReducer(true, {
        type: c.SET_ADD_KEG_FORM_ON,
        payload: true,
      })
    ).toEqual(true);
  });
});
