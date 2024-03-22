import { urlBase } from "../utils/const_var.js";

export const createItem = async (itemFields) => {

  //const url = urlBase + "/posts";
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

    if(!response.ok){
      const dataResponse = await response.json();
      throw new Error(dataResponse.message);
    }else{
      alert ("Item dado de alta con éxito");
    }
  } catch (error) {
    throw error;
  }


// COnstruyo la url
// consigo el token
// fabrico el body
// let response
// uso fetch para envío con POST
//    Testeo respuest del servidor

}