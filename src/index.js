import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import {loginUserSuccess} from './actions';

import App from './containers/App';
import './global/style.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import routes from './route'

const rootEl = document.getElementById('root');

const store = configureStore(browserHistory);


let token = cookie.load('userId');
console.log(token)
if (token !== null) {
    store.dispatch(loginUserSuccess(token));
}

render(
  <Provider store={store}>
    {routes(store, browserHistory)}
  </Provider>,
  document.getElementById('root')
)
