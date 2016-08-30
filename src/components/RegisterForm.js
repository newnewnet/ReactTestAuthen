import React, {Component} from 'react';

export default class RegisterFrom extends Component{

  render(){
    return (
      <div id="signup">
        <h1>Sign Up for Free</h1>
        <form action="/" method="post">

          <div className="top-row">
            <div className="field-wrap">
              <input type="text" required  placeholder="First Name"/>
            </div>

            <div className="field-wrap">
              <input type="text" required  placeholder="Last Name" />
            </div>
          </div>

          <div className="field-wrap">
            <input type="email" required placeholder="Email Address"/>
          </div>

          <div className="field-wrap">
            <input type="password" required placeholder="Password"/>
          </div>

          <button type="submit" className="button button-block">Get Started</button>
        </form>
      </div>

    )
  }

}
