import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginWindow from '../components/loginWindow.js';
import { postLogin } from '../actions/postLogin.js';

class UserDataContainer extends Component {

  state = {
    email: '',
    password: ''
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

  submitLoginData = (e) => {
    e.preventDefault()
    this.props.login(this.state)
  }

  render(){
    return(
      <div>
        <LoginWindow
        userEmailInput={this.userEmailInput}
        userEmailData={this.state.email}
        userPasswordInput={this.userPasswordInput}
        userPasswordData={this.state.password}
        submitLoginData={this.submitLoginData}
        />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(postLogin(data))
  }
}
export default connect(null, mapDispatchToProps)(UserDataContainer);
