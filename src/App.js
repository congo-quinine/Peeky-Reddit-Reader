import React, { Component } from 'react';
import Button from '@material/react-button';
import './scss/App.scss';
import RedditContainer from './containers/redditContainer.js';

class App extends Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/articles')
    .then(response => response.json())
    .then(responseJSON => console.log(responseJSON))
  }

  render() {
    return (
      <div>
      <RedditContainer />
      </div>

    );
  }
}

export default App;
