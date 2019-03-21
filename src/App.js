import React, { Component } from 'react';
import Button from '@material/react-button';
import './scss/App.scss';
import RedditContainer from './containers/redditContainer.js';
import NavBar from './components/navbar.js';

class App extends Component {

  render() {
    return (
      <div>
      <NavBar />
      <RedditContainer />
      </div>

    );
  }
}

export default App;
