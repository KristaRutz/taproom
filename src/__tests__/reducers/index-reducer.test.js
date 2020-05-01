import rootReducer from "../../reducers";

describe("rootReducer", () => {
  test("should return default state if there is no action type recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      selectedKeg: null,
    });
  });
});
