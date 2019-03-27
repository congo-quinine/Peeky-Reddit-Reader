import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import '../scss/App.css'
import LoginWindow from './loginWindow.js'

class TopNavBar extends Component {

  state = {
    subReddits: []
  }

  getSubreddits = () => this.state.subReddits.map( (sub) => <NavDropdown.Item href="" onClick={() => this.props.getSubreddit(sub)}>{sub}</NavDropdown.Item> )

  onSubClick = () => {
    const sortedSubs = this.props.subreddits.sort()
    this.setState({
      subReddits: sortedSubs
    })
  }

  handleClick = () => <LoginWindow/>

  handleHomeClick = () => this.props.refreshRedditHome()

  render(){
    const navTextColor = {
      color: "white",
      cursor: "pointer"
    }
    const navLogin = {
      color: "white",
      float: "right",
      paddingRight: '5px'
    }
    return(
      <Navbar bg="dark" sticky="top" >
      <Navbar.Brand href="" style={navTextColor} onClick={() => this.handleHomeClick()}>Peeky Reddit Reader</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavDropdown class='nav' title="Trending Subreddits" id="navDropdown" onClick={() => this.onSubClick()}>
            {
              this.getSubreddits()
            }
        </NavDropdown>
      </Navbar.Collapse>
      <Nav style={navLogin}>
        <Nav.Link onClick={() => this.handleClick()} style={navLogin}>Login</Nav.Link>
      </Nav>
    </Navbar>
    )
  };

};

export default TopNavBar;
