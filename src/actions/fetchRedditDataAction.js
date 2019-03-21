export function fetchRedditData(){
  return (dispatch) => {
    dispatch({type: "LOADING_REDDIT_DATA"})
    return  fetch('http://localhost:3000/api/v1/articles')
    .then(response => response.json())
    .then(responseJSON => dispatch({type: "FETCH_REDDIT_DATA", payload: responseJSON.data}))
  }
}
