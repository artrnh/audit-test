import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';
import configureStore from './store/configureStore';

injectGlobal`
  html, body {
    font-family: 'Roboto';
  }
`;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
