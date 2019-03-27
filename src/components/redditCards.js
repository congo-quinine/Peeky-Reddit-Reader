import React, { Component } from 'react';
import RedditCard from './redditCard.js';

class RedditCards extends Component {


  renderRedditCards = () => this.props.reddit.redditFeedData.map( (reddit ) => <RedditCard reddit={reddit} /> )
  renderSubRedditCards = () => this.props.reddit.subReddit.map( (reddit ) => <RedditCard reddit={reddit} /> )

  render(){
    return(
      <div>
      {
        this.props.reddit.subsOn
        ? this.renderSubRedditCards()
        : this.renderRedditCards()
      }
      </div>
    )
  }

};

export default RedditCards;
