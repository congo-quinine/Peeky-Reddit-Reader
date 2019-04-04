export function fetchReadLater(){
  return (dispatch) => {
    dispatch({type: "LOADING_READ_LATER"})
    return  fetch('http://localhost:3000/api/v1/reads')
    .then(response => response.json())
    .then(responseJSON => dispatch({type: "FETCH_READ_LATER", payload: responseJSON.data}))
  }
}
