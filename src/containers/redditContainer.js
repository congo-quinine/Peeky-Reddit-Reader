import React, { Component } from 'react';
import RedditCards from '../components/redditCards.js';
import { connect } from 'react-redux';
import { fetchRedditData } from '../actions/fetchRedditDataAction.js';
import TopNavBar from '../components/navbar.js';
import SubReddits from '../components/navbar.js'

class RedditContainer extends Component {


  componentDidMount(){
    this.props.fetchRedditData()
  }

  render(){


    return(

      <div>
      <RedditCards reddit={this.props}/>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {redditFeedData: state.redditFeed,
          subsOn: state.subRedditsOn,
          subReddit: state.subs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {fetchRedditData: () => dispatch(fetchRedditData()),
          getSubreddit: sub => dispatch({type: 'GET_SUBREDDIT', sub})
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(RedditContainer);
