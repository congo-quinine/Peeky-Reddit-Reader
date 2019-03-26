import React, { Component } from 'react'
import { connect } from 'react-redux';
import TopNavBar from '../components/navbar.js';


class NavBarContainer extends Component {

  getSubreddit = (sub) => this.props.getSubreddit(sub)

  refreshRedditHome = () => this.props.refreshRedditHome()

  render(){
    return(
      <div>
      <TopNavBar subreddits={this.props.subReddits} getSubreddit={this.getSubreddit} refreshRedditHome={this.refreshRedditHome} />
      {console.log(this.props.subReddits)}
      </div>
    )
  }

};

const mapStateToProps = (state) => {
  return { subReddits: state.navSubreddit
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getSubreddit: sub => dispatch({type: 'GET_SUBREDDIT', sub}),
           refreshRedditHome: () => dispatch({type: "REFRESH"})
   }
}


export default connect(mapStateToProps, mapDispatchToProps) (NavBarContainer);
