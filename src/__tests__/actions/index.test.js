import * as actions from "../../actions";
import * as c from "../../actions/ActionTypes";
import { v4 } from "uuid";

describe("taproom action types", () => {
  it("addKeg should create ADD_KEG action", () => {
    const testKeg = { itemName: "Example" };
    expect(actions.addKeg(testKeg)).toEqual({
      type: c.ADD_NEW_KEG,
      keg: testKeg,
    });
  });

  it("deleteKeg should create a DELETE_KEG action", () => {
    const id = v4();
    expect(actions.deleteKeg(id)).toEqual({ type: c.DELETE_KEG, id: id });
  });

  it("selectKeg should create a SELECT_KEG action", () => {
    const testKeg = { itemName: "Example" };
    expect(actions.selectKeg(testKeg)).toEqual({
      type: c.SELECT_KEG,
      keg: testKeg,
    });
  });

  it("deselectKeg should create a DESELECT_KEG action", () => {
    expect(actions.deselectKeg()).toEqual({
      type: c.DESELECT_KEG,
    });
  });
});
