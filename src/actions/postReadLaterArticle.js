export function postReadLaterArticle(data){
  console.log(data)
  return (dispatch) => {
    dispatch({type: "READ_LATER"})
    return fetch("http://localhost:3000/api/v1/create",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          data: {
            article: data.url
          }
      })
    })
    .then(response => response.json())
    .then(responseJSON => responseJSON)
  }
}
