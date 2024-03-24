import { urlAuthSign } from "../utils/const_var.js";

export const signupUser = async(username, password) => {

  const options = {
    method: "POST",
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      'Content-type': "application/json"
    } 
  }
  const response = await fetch(urlAuthSign, options);

  if (!response.ok){
    throw new Error ("Error creando usuario nuevo");
  }

}