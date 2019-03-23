import React, { Component } from 'react';
import RedditCard from './redditCard.js';

class SubReddits extends Component {


  renderRedditCards = () => this.props.reddit.map( (reddit ) => <RedditCard reddit={reddit} /> )

  render(){
    return(
      <div>
      {
        this.renderRedditCards()
      }
      </div>
    )
  }

};

export default SubReddits;
