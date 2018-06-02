import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import clients from './reducers/clients';

const reducer = combineReducers({
  form,
  clients,
});

export default () => createStore(reducer, window.devToolsExtension ? window.devToolsExtension() : f => f);