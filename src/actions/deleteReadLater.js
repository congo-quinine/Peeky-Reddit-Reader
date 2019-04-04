export function deleteReadLater(data){
  console.log(data)
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/create",{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          data: {
            article: data
          }
      })
    })
    .then(response => response.json())
    .then(dispatch({type: "DELETE_READ_LATER", payload: data}))
  }
}
