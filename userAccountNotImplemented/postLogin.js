export function postLogin(data){
  console.log(data)
  return (dispatch) => {
    dispatch({type: "LOG_IN"})
    return  fetch('http://localhost:3000/api/v1/login',{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    }).then(response => response.json())
      .then(responseJSON => {
      if (responseJSON.message === "Success"){
          return dispatch({type: "LOG_IN", payload: responseJSON.data.username })
      }
    }
  )
}}
