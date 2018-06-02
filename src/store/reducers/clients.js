import * as actionTypes from '../actions/actionTypes';

const initialState = {
  items: [],
  editing: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.ADD_CLIENT:
      return {
        ...state,
        items: [...state.items, payload.client],
      };

    case actionTypes.DELETE_CLIENT:
      return {
        ...state,
        items: state.items.filter(client => client.id !== payload.id),
      };

    default:
      return state;
  }
}