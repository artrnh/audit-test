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
  type: actionTypes.EDITING_MODE,
  payload: { id },
});
