import React, { Component } from 'react';
import RedditContainer from './containers/redditContainer.js';
import NavBarContainer from './containers/navBarContainer.js';
import UserDataContainer from './containers/userDataContainer.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <NavBarContainer />
        <Route exact path='/' component={RedditContainer} />
        <Route path='/login' component={UserDataContainer} />
      </div>
    </Router>
    );
  }
}

export default App;
