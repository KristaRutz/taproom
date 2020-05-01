import * as c from "./ActionTypes";

export const addKeg = (keg) => ({
  type: c.ADD_NEW_KEG,
  keg,
});

export const editKeg = addKeg;

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id,
});

export const selectKeg = (keg) => ({
  type: c.SELECT_KEG,
  keg,
});

export const deselectKeg = () => ({
  type: c.DESELECT_KEG,
});
