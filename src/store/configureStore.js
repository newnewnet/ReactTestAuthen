import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux'

export default (history) => {
  const middleware = [thunk, apiMiddleware, routerMiddleware(history)]
  const store = createStore(rootReducer, applyMiddleware(...middleware))


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
