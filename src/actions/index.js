import * as types  from '../constants/ActionType'
import { CALL_API } from 'redux-api-middleware'
import cookie from 'react-cookie'
import {Router, Redirect } from 'react-router';
import { push } from 'react-router-redux'

export const postLogin = (objLogin) => ({
    [CALL_API]: {
      types: [ types.REQUEST_POSTS_LOGIN,
        {
          type: types.RECEIVE_POSTS_LOGIN,
          payload: (_action, _state, res) => {
            return res.json().then((data) => {
              // เมื่อโหลดเพจสำเร็จให้วิ่งไปที่ /pages/:id
              return data
            })
          }
        },
        types.FAIL_POSTS_LOGIN
      ],
      endpoint: '/api/login',
      method: 'POST',
      body: JSON.stringify(objLogin)
    }
});

// export const postLogin = (objLogin) => (
//   (dispatch) =>
//     dispatch({
//       [CALL_API]: {
//             types: [ types.REQUEST_POSTS_LOGIN,
//               {
//                 type: types.RECEIVE_POSTS_LOGIN,
//                 payload: (_action, _state, res) => {
//                   return res.json().then((data) => {
//                     // เมื่อโหลดเพจสำเร็จให้วิ่งไปที่ /pages/:id
//
//                     if(data && data.data && data.data.token){
//                       cookie.save('userId', data.data.token, { path: '/' });
//
//                     }
//
//                     return data
//                   })
//                 }
//               },
//               types.FAIL_POSTS_LOGIN
//             ],
//             endpoint: '/api/login',
//             method: 'POST',
//             body: JSON.stringify(objLogin)
//       }
//     }
//   )
// )


export function loginUserSuccess(token) {
  return {
    type: types.LOGIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}
