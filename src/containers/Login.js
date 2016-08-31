import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TabBox from '../components/TabBox'
import * as AuthenActions from '../actions'
import {push} from 'react-router-redux';

class Login extends Component {
  componentDidMount(){
    this.checkAuth(this.props.auth.isAuthenticated);
  }

  componentWillReceiveProps (nextProps) {
    this.checkAuth(nextProps.auth.isAuthenticated);
  }

  checkAuth(isAuthenticated){
    if(isAuthenticated){
      this.props.redirectTo('/user');
    }
  }

  render(){
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
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: function(){
      dispatch(AuthenActions.postLogin())
    },
    redirectTo: function(url){
      dispatch(push(url));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
