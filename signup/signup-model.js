import { urlAuthSign } from "../utils/const_var.js";

export const signupUser = async(username, password) => {

  const response = await fetch(urlAuthSign, {
    method: "POST",
    body: JSON.stringify({ username: username, password: password }),
    headers: {
      'Content-type': "application/json"
    }
  });

}