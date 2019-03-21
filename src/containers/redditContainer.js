import React, { Component } from 'react';
import RedditCards from '../components/redditCards.js';
import { connect } from 'react-redux';
import { fetchRedditData } from '../actions/fetchRedditDataAction.js';


class RedditContainer extends Component {

  componentDidMount(){
    this.props.fetchRedditData()
  }


  render(){
    return(
      <div>
        <RedditCards reddit={this.props.redditFeedData}/>
        {console.log(this.props.redditFeedData)}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {redditFeedData: state.redditFeed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {fetchRedditData: () => dispatch(fetchRedditData()) }
}

export default connect(mapStateToProps,mapDispatchToProps)(RedditContainer);
