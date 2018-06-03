import * as actionTypes from './actionTypes';

export const addClient = client => ({
  type: actionTypes.ADD_CLIENT,
  payload: { client },
});

export const removeClient = id => ({
  type: actionTypes.DELETE_CLIENT,
  payload: { id },
});

export const activateEditing = id => ({
  type: actionTypes.ACTIVATE_EDITING,
  payload: { id },
});

export const editClient = newClientData => ({
  type: actionTypes.EDIT_CLIENT,
  payload: { newClientData },
});

export const toggleForm = () => ({
  type: actionTypes.TOGGLE_ADD_FORM,
});
