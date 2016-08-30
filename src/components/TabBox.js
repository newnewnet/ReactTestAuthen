import React, {Component, PropTypes} from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import classnames from 'classnames';


export default class TabBox extends Component {
  constructor(){
    super();
    this.state = {active: 'LOGIN'};
    // this.activeTab.bind(this);
  }

  activeTab(actived) {
    this.setState({active: actived });
  }

  render(){
    let element;
    const {actions} = this.props;

    if(this.state.active==='REGISTER'){
      element = (<RegisterForm />);
    }else{
      element = (<LoginForm onSubmit={actions}/>);
    }

    return (
      <div className="form">
        <ul className="tab-group">
          <li className={classnames({
            tab: true,
            active: this.state.active==='LOGIN'
          })}>
            <a href="#" onClick={()=>this.activeTab('LOGIN')}>Log In</a>
          </li>

          <li className={classnames({
            tab: true,
            active: this.state.active==='REGISTER'
          })}
          >
            <a href="#" onClick={()=>this.activeTab('REGISTER')}>Sign Up</a>
          </li>
        </ul>

        {element}

      </div>
    )
  }
}

TabBox.propTypes = {
  actions: PropTypes.func.isRequired
}
