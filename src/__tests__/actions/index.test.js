import * as actions from "../../actions";
import * as c from "../../actions/ActionTypes";
import { v4 } from "uuid";

describe("taproom action types", () => {
  /* masterKegList actions */
  it("addKeg should create ADD_KEG action", () => {
    const testKeg = { itemName: "Example" };
    expect(actions.addKeg(testKeg)).toEqual({
      type: c.ADD_NEW_KEG,
      keg: testKeg,
    });
  });
  it("editKeg should create ADD_KEG action", () => {
    const testKeg = { itemName: "Example" };
    expect(actions.editKeg(testKeg)).toEqual({
      type: c.ADD_NEW_KEG,
      keg: testKeg,
    });
  });
  it("deleteKeg should create a DELETE_KEG action", () => {
    const id = v4();
    expect(actions.deleteKeg(id)).toEqual({ type: c.DELETE_KEG, id: id });
  });

  /* selectedKeg actions */
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

  /* addKegForm actions */
  it("toggleAddKegForm should create a TOGGLE_ADD_KEG_FORM action", () => {
    expect(actions.toggleAddKegForm()).toEqual({
      type: c.TOGGLE_ADD_KEG_FORM,
    });
  });

  /* editKegForm actions */
  it("toggleEditKegForm should create a TOGGLE_EDIT_KEG_FORM action", () => {
    expect(actions.toggleEditKegForm()).toEqual({
      type: c.TOGGLE_EDIT_KEG_FORM,
    });
  });
});
