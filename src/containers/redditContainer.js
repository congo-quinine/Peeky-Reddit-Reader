import React, { Component } from 'react';
import RedditCards from '../components/redditCards.js';
import { connect } from 'react-redux';
import { fetchRedditData } from '../actions/fetchRedditDataAction.js';
import { postReadLaterArticle } from '../actions/postReadLaterArticle.js';

import TopNavBar from '../components/navbar.js';
import SubReddits from '../components/navbar.js'
import ReadLaterSideBar from '../components/readLaterSideBar.js';

class RedditContainer extends Component {


  componentDidMount(){
    this.props.fetchRedditData()
  }

  addReadLater = (redditArticle) => this.props.addReadLater(redditArticle)

  saveAddReadLater = (redditArticle) => this.props.saveAddReadLater(redditArticle)

  render(){
    return(
      <div>
        <ReadLaterSideBar readLater={this.props.readLater} readLaterOn={this.props.readLaterOn}/>
        <RedditCards reddit={this.props} addReadLater={this.saveAddReadLater} />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
          redditFeedData: state.redditFeed,
          subsOn: state.subRedditsOn,
          subReddit: state.subs,
          readLater: state.readLater,
          readLaterOn: state.readLaterOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {fetchRedditData: () => dispatch(fetchRedditData()),
          getSubreddit: sub => dispatch({type: 'GET_SUBREDDIT', sub}),
          addReadLater: data => dispatch({type: 'READ_LATER', data}),
          saveAddReadLater: data => dispatch(postReadLaterArticle(data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditContainer);
