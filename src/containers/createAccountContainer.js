import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CreateAccount from '../components/createAccount.js';
import { postCreateAccount } from '../actions/postCreateAccount.js';

class createAccountContainer extends Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  userNameInput = (data) => {
    this.setState({
      username: data
    })
  }

  userEmailInput = (data) => {
    this.setState({
      email: data
    })
  }

  userPasswordInput = (data) => {
    this.setState({
      password: data
    })
  }

  sumbitCreateAccountData = (e) => {
    e.preventDefault()
    this.props.createAccount(this.state)
  }

  render(){
    return(
      <div>
        <CreateAccount
        userNameInput={this.userNameInput}
        userNameData={this.state.username}
        userEmailInput={this.userEmailInput}
        userEmailData={this.state.email}
        userPassword={this.state.password}
        userPasswordInput={this.userPasswordInput}
        sumbitCreateAccountData={this.sumbitCreateAccountData}
         />
      </div>
    )
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    createAccount: (data) => dispatch(postCreateAccount(data))
  }
}

export default connect(null, mapDispatchToProps)(createAccountContainer);
