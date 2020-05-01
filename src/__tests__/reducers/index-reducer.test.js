import rootReducer from "../../reducers";
import { createStore } from "redux";
import selectedKegReducer from "../../reducers/selected-keg-reducer";
import masterKegListReducer from "../../reducers/master-keg-list-reducer";
import addKegFormOnReducer from "../../reducers/add-keg-form-on-reducer";
import editKegFormOnReducer from "../../reducers/edit-keg-form-on-reducer";
import * as a from "../../actions";

const store = createStore(rootReducer);

describe("rootReducer", () => {
  test("should return default state if there is no action type recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      selectedKeg: null,
      addKegFormOn: false,
      editKegFormOn: false,
    });
  });

  it("initial state of masterKegListReducer matches rootReducer", () => {
    expect(store.getState().masterKegList).toEqual(
      masterKegListReducer(undefined, { type: null })
    );
  });
  it("initial state of selectKegReducer matches rootReducer", () => {
    expect(store.getState().selectedKeg).toEqual(
      selectedKegReducer(undefined, { type: null })
    );
  });
  it("initial state of addKegFormOnReducer matches rootReducer", () => {
    expect(store.getState().addKegFormOn).toEqual(
      addKegFormOnReducer(undefined, { type: null })
    );
  });
  it("initial state of editKegFormOnReducer matches rootReducer", () => {
    expect(store.getState().editKegFormOn).toEqual(
      editKegFormOnReducer(undefined, { type: null })
    );
  });

  it("updated state of masterKegListReducer matches rootReducer", () => {
    const action = a.addKeg({ id: "test" });
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(
      masterKegListReducer(undefined, action)
    );
  });
  it("updated state of selectKegReducer matches rootReducer", () => {
    const action = a.selectKeg({ id: "test" });
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(
      selectedKegReducer(undefined, action)
    );
  });
  it("updated state of addKegFormOnReducer matches rootReducer", () => {
    const action = a.toggleAddKegForm();
    store.dispatch(action);
    expect(store.getState().addKegFormOn).toEqual(
      addKegFormOnReducer(undefined, action)
    );
  });
  it("updated state of editKegFormOnReducer matches rootReducer", () => {
    const action = a.toggleEditKegForm();
    store.dispatch(action);
    expect(store.getState().editKegFormOn).toEqual(
      editKegFormOnReducer(undefined, action)
    );
  });
});
