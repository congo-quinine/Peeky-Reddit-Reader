import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import '../scss/App.css'

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
    const navTextColor = {
      color: "white"
    }
    const navLogin = {
      color: "white",
      float: "right",
      paddingRight: '5px'
    }
    return(
      <Navbar bg="dark" sticky="top" >
      <Navbar.Brand href="#home" style={navTextColor}>Peeky Reddit Reader</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <NavDropdown class='nav' title="Trending Subreddits" id="turd" onClick={() => this.onSubClick()}>
            {this.getSubreddits()}
          </NavDropdown>
          </Navbar.Collapse>
        <Nav style={navLogin}>
        <Nav.Link onClick={() => { }} style={navLogin}>Login</Nav.Link>
        </Nav>
    </Navbar>
    )
  };

};

export default TopNavBar;
