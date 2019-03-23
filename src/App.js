import React, { Component } from 'react';
import Button from '@material/react-button';
import './scss/App.scss';
import RedditContainer from './containers/redditContainer.js';
import NavBarContainer from './containers/navBarContainer.js'

class App extends Component {

  render() {
    return (
      <div>
      <NavBarContainer />
      <RedditContainer />
      </div>
    );
  }
}

export default App;
