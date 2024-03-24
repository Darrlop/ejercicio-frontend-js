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

    // Verifico respuesta
    if (!response.ok){
      throw new Error(data.message);
    }
    if(response.ok){
      return data.accessToken;
    }
  } catch (error) {
    throw (error);
  }

}