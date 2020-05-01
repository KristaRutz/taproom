import selectedKegReducer from "../../reducers/selected-keg-reducer";
import * as c from "../../actions/ActionTypes";

describe("selectedKegReducer", () => {
  test("should return default state if the action type passed into the reducer is not recognized", () => {
    expect(
      selectedKegReducer(
        {
          selectedKeg: null,
        },
        { type: null }
      )
    ).toEqual({
      selectedKeg: null,
    });
  });
});
