import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'


class TopNavBar extends Component {

  state = {
    subReddits: []
  }
  
  getSubreddits = () => this.state.subReddits.map( (sub) => <NavDropdown.Item href="" onClick={() => this.props.getSubreddit(sub)}>{sub}</NavDropdown.Item> )

  onSubClick = () => {
    this.setState({
      subReddits: this.props.subreddits.sort()
    })
  }

  render(){
    return(
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Peeky Reddit Reader</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#link"></Nav.Link>
          <NavDropdown title="Subreddits" id="basic-nav-dropdown" onClick={() => this.onSubClick()}>
            {this.getSubreddits()}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  };

};

export default TopNavBar;
