import { urlBase } from "../utils/const_var.js";

export const createItem = async (itemFields) => {

  const url = urlBase;
  const tokenJWT = localStorage.getItem("tokenJWT");

  const body = {
    name: itemFields.name,
    description: itemFields.description,
    sale: itemFields.sale,
    price: parseFloat(itemFields.price),
    photo: itemFields.photo
  }

  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenJWT}`
      }
    });
      console.log("xxxx -> antes del !response")
    if(!response.ok){
      const dataResponse = await response.json();
      throw new Error(dataResponse.message);
    }
  } catch (error) {
    throw error;
  }


}