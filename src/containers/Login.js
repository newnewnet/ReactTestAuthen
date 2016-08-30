import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TabBox from '../components/TabBox'
import * as AuthenActions from '../actions'
import {push} from 'react-router-redux';

// export default (store) =>  {
class Login extends Component {
  componentDidMount(){

    if(this.props.auth.isAuthenticated){
      this.props.dispatch(push('/user'))
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.auth.isAuthenticated){
        this.props.dispatch(push('/user'))
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
  console.log(state)
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: function(){
      dispatch(AuthenActions.postLogin())
    },
    dispatch: dispatch
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
