import masterKegListReducer from "./master-keg-list-reducer";
import selectedKegReducer from "./selected-keg-reducer";
import addKegFormOnReducer from "./add-keg-form-on-reducer";
import editKegFormOnReducer from "./edit-keg-form-on-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  masterKegList: masterKegListReducer,
  selectedKeg: selectedKegReducer,
  addKegFormOn: addKegFormOnReducer,
  editKegFormOn: editKegFormOnReducer,
});

export default rootReducer;
