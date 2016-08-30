import React, {Component, PropTypes} from 'react';

export default class LoginForm  extends Component{
  constructor(){
    super()
    this._input = {};
    this.isVaild = false;
    this.state = {
      email: '',
      password: '',
      messageError: ''
    }
  }

  validateForm(){
    let messageError = '';

    const petterEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!this.state.email){
      messageError = 'กรุณากรอก Email';
    }else if (!this.state.email.match(petterEmail)) {
      messageError = 'คุณกรอก email ไม่ถูกต้อง';
    }else if(!this.state.password){
      messageError = 'กรุณากรอก password';
    }

    this.setState({
      messageError: messageError
     });

    return messageError;
  }

  login(e){
    e.preventDefault();


    if(!this.validateForm()){
      this.props.onSubmit(this.state);
    }
  }

  componentDidMount(){
    this.refs.email.focus();
  }

  handleChange(e) {
    this.setState({
      email: this.refs.email.value,
      password: this.refs.password.value
     });
  }

  render(){
    const errorMessage = this.state.messageError;

    return(
      <div className="tab-content text-cented">
        <div id="login">
          <h1>Welcome To Web New</h1>
          <form  onSubmit={(e)=>this.login(e)}>
            <div className="field-wrap">
              <input type="text" ref="email"  onChange={this.handleChange.bind(this)}  placeholder="Email Address"/>
            </div>
            <div className="field-wrap">
              <input type="password" ref="password" onChange={this.handleChange.bind(this)}  placeholder="Password"/>
              <br></br><span  style={{ color: '#fb6464'}}>{errorMessage}</span>
            </div>
            <div><button className="button button-block">LogIn</button></div>
          </form>
        </div>
      </div>
    )

  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
