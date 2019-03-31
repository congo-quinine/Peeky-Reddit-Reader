import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import '../scss/App.css'
import { Link } from 'react-router-dom';
import { StickyContainer, Sticky } from 'react-sticky';

class TopNavBar extends Component {

  state = {
    subReddits: []
  }

  getSubreddits = () => this.state.subReddits.map( (sub) =>
    <NavDropdown.Item onClick={() => this.props.getSubreddit(sub)}>{sub}</NavDropdown.Item>)

  onSubClick = () => {
    let sortedSubs = this.props.subreddits.sort()
    this.setState({
      subReddits: sortedSubs
    })
  }

  handleHomeClick = () => this.props.refreshRedditHome()

  render(){

    const navTextColor = {
      color: "white",
      cursor: "pointer"
    }
    const navLogin = {
      color: "white",
      float: "right",
      paddingRight: '5px',
      cursor: "pointer"
    }

    return(
          <Navbar bg="dark">
            <Navbar.Brand href=""
              onClick={() => this.handleHomeClick()}><Link to="/" exact style={navTextColor}>Peek-It</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <NavDropdown className='nav' title="Trending Subreddits" id="navDropdown" onClick={() => this.onSubClick()}>
                  {
                    this.getSubreddits()
                  }
              </NavDropdown>
            </Navbar.Collapse>
            <Nav style={navLogin}>
              <Nav.Link style={navLogin}><Link to="/login" exact style={navLogin}>Login</Link></Nav.Link>
            </Nav>
          </Navbar>
    )
  };

};

export default TopNavBar;
