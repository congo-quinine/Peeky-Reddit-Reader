import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

class frontPageWelcome extends Component {

  render(){
    return(
      <div>
      <Jumbotron>
        {
          this.props.subredditTitle
          ? <h1>Welcome to {this.props.subredditTitle[0].subreddit}</h1>
          : <h1>Welcome Reddit Reader!</h1>
        }
        <p> </p>
      </Jumbotron>
      </div>
    )
  }
};

export default frontPageWelcome;
