import masterKegListReducer from "../../reducers/master-keg-list-reducer";

describe("masterKegListReducer", () => {
  test("should return default state if the action type passed into the reducer is not recognized", () => {
    expect(masterKegListReducer({}, { type: null })).toEqual({});
  });
});
