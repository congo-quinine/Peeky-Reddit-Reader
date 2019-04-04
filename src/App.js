import React, { Component } from 'react';
import RedditContainer from './containers/redditContainer.js';
import NavBarContainer from './containers/navBarContainer.js';
import ReadLaterContainer from './containers/readLaterContainer.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <NavBarContainer />
        <Route exact path="/read_later" component={ReadLaterContainer} />
        <Route exact path='/home' component={RedditContainer} />
      </div>
    </Router>
    );
  }
}

export default App;
