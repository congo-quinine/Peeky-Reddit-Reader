import React, { Component } from 'react'
import { connect } from 'react-redux';
import LoginWindow from '../components/loginWindow.js'

class LoginContainer extends Component {
  
  render(){
    return(
      <LoginWindow />
    )
  }
};

export default LoginContainer;
