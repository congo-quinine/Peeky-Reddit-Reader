const redditReducer = (state = {
    redditFeed: [],
    subRedditsOn: false,
    navSubreddit: [],
    readLater: [],
    readLaterOn: false
  }, action) => {
    switch (action.type) {
      case "LOADING_REDDIT_DATA":
        return {
          ...state,
          redditFeed: [...state.redditFeed],
          subs: []
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

      case "LOADING_READ_LATER":
        return {
          ...state,
          readLater: state.readLater
        }

      case "FETCH_READ_LATER":
        return {
          ...state,
          readLater: action.payload
        }

      case "READ_LATER":
        return {
          ...state,
          readLater: [...state.readLater],
          readLaterOn: true
        }

        case "DELETE_READ_LATER":
        let readLater = state.readLater.filter((i) => i.url !== action.payload)
          return {
            ...state,
            readLater: readLater
          }

      default:
        return state;
    }
  }
export default redditReducer;
