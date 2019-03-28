export function postCreateAccount(data){
  console.log(data)
  return (dispatch) => {
    dispatch({type: "CREATE_ACCOUNT"})
    return  fetch('http://localhost:3000/api/v1/users',{
      method: "POST",
      headers: {
        "Content-Type": "application/text"
      },
      body: data
    })
    .then(response => response.json())
    .then(responseJSON => dispatch({type: "LOG_IN", payload: responseJSON.data}))
}}
