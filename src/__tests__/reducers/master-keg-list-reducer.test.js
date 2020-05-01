import masterKegListReducer from "../../reducers/master-keg-list-reducer";
import * as c from "../../actions/ActionTypes";
import { v4 } from "uuid";

// const keg = {
//   itemName: "Superfuzz",
//   beerType: "Blood Orange Pale Ale",
//   desc:
//     "Is a mind-bending whirl of the aromas and flavors of blood orange and Northwest hops. Orange peel added to the whirlpool, and Blood Orange in the fermenter.",
//   origin: "Seattle, WA, USA",
//   brewer: "Elysian Brewing",
//   price: 189,
//   pintsRemaining: 124,
//   abv: 6.4,
//   ibu: 45,
//   created: new Date(),
//   lastUpdated: new Date(),
//   id: v4(),
// };

describe("masterKegListReducer", () => {
  test("should return default state if the action type passed into the reducer is not recognized", () => {
    expect(masterKegListReducer({}, { type: null })).toEqual({});
  });

  test("should successfully add a new ticket to the ticket list", () => {
    const id = v4();
    expect(
      masterKegListReducer(
        {},
        {
          type: c.ADD_NEW_KEG,
          itemName: "Superfuzz",
          price: 189,
          brewer: "Elysian Brewing",
          id: id,
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
});
