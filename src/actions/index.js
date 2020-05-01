import * as c from "./ActionTypes";

export const addKeg = (keg) => ({
  type: c.ADD_NEW_KEG,
  keg: keg,
});

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id,
});
