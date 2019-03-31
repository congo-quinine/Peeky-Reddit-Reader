import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class LoginWindow extends Component {

  render(){

    const css = {

      h2Div: {
        width: '30%',
        margin: 'auto',
        paddingTop: '5%'
      },
      formStyle:{
        width: '60%',
        margin: 'auto',
        paddingTop: '10%'
      }
    }
    return (
      <div>

        <div style={css.h2Div}>
          <h2>Peeky Reddit Reader Login</h2>
          <p><Link to="/create"> Don't have an account?</Link></p>
        </div>

      <Form style={css.formStyle}>
        <Form.Group controlId="userName">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email" onChange={ (e) => this.props.userEmailInput(e.target.value)} value={this.props.userEmailData}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter passowrd" onChange={ (e) =>
          this.props.userPasswordInput(e.target.value)} value={this.props.userPasswordData}/>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={(e) => this.props.submitLoginData(e)}>
          Submit
        </Button>
      </Form>
    </div>
    )
  }
};

export default LoginWindow;
