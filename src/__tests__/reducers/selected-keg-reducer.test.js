import selectedKegReducer from "../../reducers/selected-keg-reducer";
import * as c from "../../actions/ActionTypes";
import { v4 } from "uuid";

describe("selectedKegReducer", () => {
  test("should return default state if the action type passed into the reducer is not recognized", () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test("should return null in DESELECT_KEG action", () => {
    const testKeg = {
      itemName: test,
      id: v4(),
    };
    expect(selectedKegReducer(testKeg, { type: c.DESELECT_KEG })).toEqual(null);
  });

  test("should return a keg in SELECT_KEG action", () => {
    const testKeg = {
      itemName: test,
      id: v4(),
    };
    expect(
      selectedKegReducer(null, { type: c.SELECT_KEG, keg: testKeg })
    ).toEqual(testKeg);
  });
});
