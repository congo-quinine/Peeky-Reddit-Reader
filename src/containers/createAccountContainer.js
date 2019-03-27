import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CreateAccount from '../components/createAccount.js';

class createAccountContainer extends Component {

  state = {
    userName: '',
    email: '',
    password: ''
  }

  userNameInput = (data) => {
    this.setState({
      userName: data
    })
  }

  userEmailInput = (data) => {
    this.setState({
      email: data
    })
  }

  render(){
    return(
      <div>
        <CreateAccount
        userNameInput={this.userNameInput}
        userNameData={this.state.userName}
        userEmailInput={this.userEmailInput}
        userEmailData={this.state.email}
         />
      </div>
    )
  }
};

export default connect()(createAccountContainer);
