import React, {Component, PropTypes} from 'react';

 class Users extends Component {
  componentWillMount(){
    this.props.loadInfo();
  }
  render(){
    return(
      <div className="tab-content" >
        <br/><br/><br/>
        <h1>Welcome {this.props.name}</h1>
      </div>
    )
  }
}

Users.propTypes = {
  loadInfo: PropTypes.func.isRequired,
  name: PropTypes.string
}

export default Users;
