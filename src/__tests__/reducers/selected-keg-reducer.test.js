import selectedKegReducer from "../../reducers/selected-keg-reducer";
import * as c from "../../actions/ActionTypes";
import { v4 } from "uuid";

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

  test("should return {selectedKeg: null} in DESELECT_KEG action", () => {
    const testKeg = {
      itemName: test,
      id: v4(),
    };
    expect(
      selectedKegReducer({ selectedKeg: testKeg }, c.DESELECT_KEG)
    ).toEqual({
      selectedKeg: null,
    });
  });
});
