import * as actions from "../../actions";
import * as c from "../../actions/ActionTypes";
import { v4 } from "uuid";

describe("taproom action types", () => {
  it("addKeg should create ADD_KEG action", () => {
    const id = v4();
    const testKeg = {
      itemName: "Example",
      id,
    };
    expect(actions.addKeg(testKeg)).toEqual({
      type: c.ADD_NEW_KEG,
      keg: testKeg,
    });
  });
});
