import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CreateAccount from '../components/createAccount.js';
import { postCreateAccount } from '../actions/postCreateAccount.js';

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

  sumbitCreateAccountData = () => {
    this.props.createAccount(this.state)
  }

  render(){
    return(
      <div>
        <CreateAccount
        userNameInput={this.userNameInput}
        userNameData={this.state.userName}
        userEmailInput={this.userEmailInput}
        userEmailData={this.state.email}
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
