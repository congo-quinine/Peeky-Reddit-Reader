import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginWindow from '../components/loginWindow.js';
import { Route } from 'react-router-dom';
import CreateAccount from '../components/createAccount.js';

class UserDataContainer extends Component {

  render(){
    return(
      <div>
        <LoginWindow />
      </div>
    )
  }
};

export default UserDataContainer;
