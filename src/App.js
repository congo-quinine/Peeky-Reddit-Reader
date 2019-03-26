import React, { Component } from 'react';
import RedditContainer from './containers/redditContainer.js';
import NavBarContainer from './containers/navBarContainer.js';
import LoginContainer from './containers/loginContainer.js';

class App extends Component {

  render() {
    return (
      <div>
      <NavBarContainer />
      <RedditContainer />
      <LoginContainer />
      </div>
    );
  }
}

export default App;
