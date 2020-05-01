import * as c from "../../actions/ActionTypes";
import editKegFormOnReducer from "../../reducers/edit-keg-form-on-reducer";

describe("editKegFormReducer", () => {
  test("should return default state if the action type passed into the reducer is not recognized", () => {
    expect(editKegFormOnReducer(false, { type: null })).toEqual(false);
  });

  test("should toggle form visibility state", () => {
    expect(
      editKegFormOnReducer(false, { type: c.TOGGLE_EDIT_KEG_FORM })
    ).toEqual(true);
    expect(
      editKegFormOnReducer(true, { type: c.TOGGLE_EDIT_KEG_FORM })
    ).toEqual(false);
  });

  test("should explicitly set form visibility state", () => {
    expect(
      editKegFormOnReducer(false, {
        type: c.SET_EDIT_KEG_FORM_ON,
        payload: true,
      })
    ).toEqual(true);
    expect(
      editKegFormOnReducer(true, {
        type: c.SET_EDIT_KEG_FORM_ON,
        payload: true,
      })
    ).toEqual(true);
  });
});
