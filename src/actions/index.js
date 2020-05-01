import * as c from "./ActionTypes";

/* masterKegList actions */
export const addKeg = (keg) => ({
  type: c.ADD_NEW_KEG,
  keg,
});
export const editKeg = addKeg;
export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id,
});

/* selectedKeg actions */
export const selectKeg = (keg) => ({
  type: c.SELECT_KEG,
  keg,
});
export const deselectKeg = () => ({
  type: c.DESELECT_KEG,
});

/* addKegForm actions */
export const toggleAddKegForm = () => ({
  type: c.TOGGLE_ADD_KEG_FORM,
});
export const setAddKegFormOn = (bool) => ({
  type: c.SET_ADD_KEG_FORM_ON,
  payload: bool,
});

/* editKegForm actions */
export const toggleEditKegForm = () => ({
  type: c.TOGGLE_EDIT_KEG_FORM,
});
export const setEditKegFormOn = (bool) => ({
  type: c.SET_EDIT_KEG_FORM_ON,
  payload: bool,
});
