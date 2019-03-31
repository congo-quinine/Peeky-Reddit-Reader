const redditReducer = (state = {
    redditFeed: [],
    subRedditsOn: false,
    navSubreddit: [],
    readLater: [],
    readLaterOn: false,
    loggedIn: false
  }, action) => {
    switch (action.type) {
      case "LOADING_REDDIT_DATA":
        return {
          ...state,
          redditFeed: [...state.redditFeed],
          subs: [...state.redditFeed]
          }

      case "FETCH_REDDIT_DATA":
        return {
          redditFeed: action.payload,
          readLater: []
        }

      case "GET_SUBREDDIT":
        let subReddit = state.redditFeed.filter( sub => sub.subreddit === action.sub)
        return {
          ...state,
          subs: subReddit,
          subRedditsOn: true
         }

      case "DISPLAY_SUBREDDITS":
        let subs = []
        state.redditFeed.forEach( (i) => subs.push(i.subreddit) )
        subs = [...new Set(subs)];
        return {
          ...state,
          navSubreddit: subs
        }

      case "REFRESH":
        return {
          ...state,
          redditFeed: [...state.redditFeed],
          subRedditsOn: false
        }

      case "READ_LATER":
        return {
          ...state,
          readLater: [...state.readLater, action.data],
          readLaterOn: true
        }

      case "CREATE_ACCOUNT":
        return {
          username: action.payload
        }

      case "LOG_IN":
      console.log(action.payload)
        return {
          ...state,
          username: state.username,
          loggedIn: true
        }
      default:
        return state;
    }
  }
export default redditReducer;
