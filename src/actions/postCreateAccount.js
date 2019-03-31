export function postCreateAccount(data){
  console.log(data)
  return (dispatch) => {
    dispatch({type: "CREATE_ACCOUNT"})
    return fetch('http://localhost:3000/api/v1/users',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:{
        username: data.username,
        email: data.email,
        password: data.password
      }
      })
    })
    .then(response => response.json())
    .then(responseJSON => console.log(responseJSON.data.username))
    .catch(error => { return error });
}}
