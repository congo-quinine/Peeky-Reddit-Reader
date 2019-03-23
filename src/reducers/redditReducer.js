const redditReducer = (state = {
    redditFeed: [],
    subRedditsOn: false,
    navSubreddit: []
  }, action) => {
    switch (action.type) {
      case "LOADING_REDDIT_DATA":
        return {...state, redditFeed: [...state.redditFeed], subs: [...state.redditFeed]}
      case "FETCH_REDDIT_DATA":
        return {redditFeed: action.payload}
      case "GET_SUBREDDIT":
      let subReddit = state.redditFeed.filter( sub => sub.subreddit === action.sub)
        return { ...state, subs: subReddit, subRedditsOn: true }
      case "DISPLAY_SUBREDDITS":
      let subs = []
      state.redditFeed.forEach( (i) => subs.push(i.subreddit) )
      subs = [...new Set(subs)];
      return { ...state, navSubreddit: subs };
      case "REFRESH":
        return {...state, redditFeed: [...state.redditFeed]}
      default:
        return state;
    }
  }
export default redditReducer;
