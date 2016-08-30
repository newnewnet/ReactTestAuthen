import React, { Component } from 'react';
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import User from './containers/User';
import Login from './containers/Login';
import App from './containers/App';
import requireAuthentication from './containers/requireAuthen';


export default (store, history) => {
  return (
   <Router history={syncHistoryWithStore(history, store)}>
     <Route path='/' component={App}>
      <IndexRoute component={Login} />
      <route path='user' component={requireAuthentication(User, store)} />

     </Route>
   </Router>
  )
}
