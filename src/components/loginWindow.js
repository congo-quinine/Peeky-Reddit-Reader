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
            <p style={{paddingLeft: '70px'}}><Link to="/create">Don't have an account yet?</Link></p>
          </div>

        <Form style={css.formStyle}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
};

export default LoginWindow;
