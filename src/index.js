import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import NewApp from './containers/NewApp';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <NewApp />
  </Provider>,
  document.getElementById('root')
);
