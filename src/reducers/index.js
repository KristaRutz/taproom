import masterKegListReducer from "./master-keg-list-reducer";
import selectedKegReducer from "./selected-keg-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  masterKegList: masterKegListReducer,
  selectedKeg: selectedKegReducer,
});

export default rootReducer;
