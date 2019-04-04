import React, { Component } from 'react';
import RedditCards from '../components/redditCards.js';
import { connect } from 'react-redux';
import { fetchRedditData } from '../actions/fetchRedditDataAction.js';
import { postReadLaterArticle } from '../actions/postReadLaterArticle.js';
import TopNavBar from '../components/navbar.js';
import SubReddits from '../components/navbar.js'
import ReadLaterSideBar from '../components/readLaterSideBar.js';
import FrontPageWelcome from '../components/frontPageWelcome.js'
import {fetchReadLater} from '../actions/fetchReadLater.js'

class RedditContainer extends Component {

  state = {
    readLater: ""
  }


  componentDidMount(){
    this.props.fetchRedditData()
  }


  saveAddReadLater = (redditArticle) => {
    this.props.saveAddReadLater(redditArticle)
    this.setState({
      readLater: redditArticle.title
    })
  }

  render(){
    return(
      <div>
      {
        !this.props.subsOn
        ? <FrontPageWelcome/>
        : console.log("placeholder for tenary for FrontPageWelcome")
      }
        <ReadLaterSideBar readLater={this.state.readLater} readLaterOn={this.props.readLaterOn}/>
        <RedditCards reddit={this.props} addReadLater={this.saveAddReadLater}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    redditFeedData: state.redditFeed,
    subsOn: state.subRedditsOn,
    subReddit: state.subs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRedditData: () => dispatch(fetchRedditData()),
    getSubreddit: sub => dispatch({type: 'GET_SUBREDDIT', sub}),
    saveAddReadLater: data => dispatch(postReadLaterArticle(data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditContainer);
