import { urlAuthLog } from "../utils/const_var.js";

export const loginUser = async (user, password) => {

  const body = {
    username: user,
    password: password
  }
  let response;

  try {
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    response = await fetch(urlAuthLog, options);
    const data = await response.json();

    // Verifico esto de las respuestas
    if (!response.ok){
      console.log("Por el !")
      console.log (data);
    }
    if(response.ok){
      //return data.accesToken;
      console.log(data);
      console.log (data.accessToken);
    }

  } catch (error) {
    throw ("Peto..." + error);
  }

}