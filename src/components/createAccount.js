import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class CreateAccount extends Component {

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
            <h2>Peeky Reddit Reader Create Account</h2>
          </div>

        <Form style={css.formStyle}>
          <Form.Group controlId="userName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" onChange={ (e) => this.props.userNameInput(e.target.value)} value={this.props.userNameData}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={ (e) =>
            this.props.userEmailInput(e.target.value)} value={this.props.userEmailData}/>
            <Form.Text className="text-muted">
              {console.log(this.props.userEmailData)}
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
};

export default CreateAccount;
