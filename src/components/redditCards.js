import React, { Component } from 'react';
import RedditCard from './redditCard.js';

class RedditCards extends Component {

  renderRedditCards = () => this.props.reddit.redditFeedData.map( (reddit ) => <RedditCard key={Math.random()} reddit={reddit} addReadLater={this.props.addReadLater}/> )
  renderSubRedditCards = () => this.props.reddit.subReddit.map( (reddit ) => <RedditCard key={Math.random()} reddit={reddit} addReadLater={this.props.addReadLater}/> )

  render(){
    return(
      <div style={{position: ''}}>
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
