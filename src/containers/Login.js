import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TabBox from '../components/TabBox'
import * as AuthenActions from '../actions'
import {push} from 'react-router-redux';

export default (store) =>  {
  class Login extends Component {
    componentWillMount(){
      if(this.props.auth.isAuthenticated){
        store.dispatch(push('/user'))
      }
    }

    componentWillReceiveProps (nextProps) {
      if(nextProps.auth.isAuthenticated){
          store.dispatch(push('/user'))
      }
    }

    render(){
      console.log(this.props.auth.isAuthenticated)
      const {auth, actions} = this.props;
      return(
        <div>
          <TabBox actions={this.props.actions}/>
        </div>

      )
    }

  }

  function mapStateToProps(state, dispatch) {
    return {
      auth: state.auth,

    }
  }

  // function mapDispatchToProps(dispatch) {
  //   return {
  //     actions: function(){
  //       console.log('xxxx')
  //       return AuthenActions.postLogin();
  //     },
  //     redirectTo: function(url){
  //       dispatch(push(url))
  //     }
  //   }
  // }

  return connect(
    mapStateToProps,
    {actions: AuthenActions.postLogin}
  )(Login);
}
