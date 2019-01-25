import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './containers/App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Avenir Next;
    background-color: #BED8D4;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('root')
);
