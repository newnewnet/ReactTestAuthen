import { combineReducers } from 'redux';
import * as types  from '../constants/ActionType'
import { routerReducer } from 'react-router-redux'
import cookie from 'react-cookie'

function auth(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_POSTS_LOGIN:
      cookie.save('userId', action.payload.data.token, { path: '/' });
      return Object.assign({}, state, {
          'isAuthenticated': true,
          'token': action.payload.token
      });
    case types.LOGIN_USER_SUCCESS:
    console.log(action)
      return Object.assign({}, state, {
          'isAuthenticated': action.payload.token?true: false,
          'token': action.payload.token
      });
    default:
      return state
  }
}

function info(state ={}, action) {
  switch (action.type) {
    case types.RECEIVE_GET_INFO:

      return action.payload.data
    default:
      return state
  }
}

export default combineReducers({
  auth,
  info,
  routing: routerReducer
})
