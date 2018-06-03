import * as actionTypes from '../actions/actionTypes';

const initialState = {
  clientsList: [],
  editingClientId: null,
  formOpened: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.ADD_CLIENT:
      return {
        ...state,
        clientsList: [...state.clientsList, payload.client],
      };

    case actionTypes.DELETE_CLIENT:
      return {
        ...state,
        clientsList: state.clientsList.filter(client => client.id !== payload.id),
      };

    case actionTypes.ACTIVATE_EDITING:
      return {
        ...state,
        editingClientId: payload.id,
        formOpened: true,
      };

    case actionTypes.EDIT_CLIENT:
      const clientIndex = state.clientsList.findIndex(client => client.id === state.editingClientId);

      return {
        ...state,
        editingClientId: null,
        clientsList: [
          ...state.clientsList.slice(0, clientIndex),
          payload.newClientData,
          ...state.clientsList.slice(clientIndex + 1),
        ],
      };

    case actionTypes.TOGGLE_ADD_FORM:
      return {
        ...state,
        formOpened: !state.formOpened,
      }

    default:
      return state;
  }
}