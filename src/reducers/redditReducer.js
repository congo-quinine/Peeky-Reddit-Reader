
const redditReducer = (state = {
    redditFeed: []
  }, action) => {
    switch (action.type) {
      case "LOADING_REDDIT_DATA":
        return {redditFeed: [...state.redditFeed]}
      case "FETCH_REDDIT_DATA":
        return {redditFeed: action.payload}
      default:
        return state;
    }
  }
export default redditReducer;
