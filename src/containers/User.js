import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Users from '../components/Users';
import * as AuthenActions from '../actions'

function mapStateToProps(state) {
  return {
    name: state.info.name
  }
}

export default connect(
  mapStateToProps,
  {loadInfo: AuthenActions.getInfo}
)(Users);
