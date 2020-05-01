import masterKegListReducer from "../../reducers/master-keg-list-reducer";
import * as c from "../../actions/ActionTypes";
import { v4 } from "uuid";

describe("masterKegListReducer", () => {
  test("should return default state if the action type passed into the reducer is not recognized", () => {
    expect(masterKegListReducer({}, { type: null })).toEqual({});
  });

  test("should successfully add a new keg to the keg list", () => {
    const id = v4();
    expect(
      masterKegListReducer(
        {},
        {
          type: c.ADD_NEW_KEG,
          keg: {
            itemName: "Superfuzz",
            price: 189,
            brewer: "Elysian Brewing",
            id: id,
          },
        }
      )
    ).toEqual({
      [id]: {
        itemName: "Superfuzz",
        price: 189,
        brewer: "Elysian Brewing",
        id: id,
      },
    });
  });

  test("should correctly delete a single keg from a list of kegs by id", () => {
    const id1 = v4();
    const id2 = v4();
    const list = {
      [id1]: { test: "keg 1", id: id1 },
      [id2]: { test: "keg 2", id: id2 },
    };
    const deleteKeg1Action = {
      type: c.DELETE_KEG,
      id: id1,
    };
    expect(masterKegListReducer(list, deleteKeg1Action)).toEqual({
      [id2]: { test: "keg 2", id: id2 },
    });
  });
});
