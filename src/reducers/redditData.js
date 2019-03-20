
const redditData = (state = {
    redditFeed: []
  }, action) => {

    switch (action.type) {

      case 'FETCH_DATA':
        return state;

      default:
        return state;

    }
  }

export default redditData;
