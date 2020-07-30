import React, {Component} from "react";

class Login extends Component{
  constructor(){
    super();
    this.state={
      isLoggedIn:false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(  prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render(){
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    let user_status = this.state.isLoggedIn ? "LOGGED OUT" : "LOGGED IN";
    return(
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>User is {user_status}</h1>
      </div>
    )
  }
}

export default Login;
