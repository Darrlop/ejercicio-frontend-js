import { urlNoPhoto, urlAuthMe } from "./const_var.js";

// Función que crea y lanza un evento 
export const dispatchEvent = (eventName, data, element) => {
  const event = new CustomEvent(eventName, {
    detail: data
  });
  element.dispatchEvent(event);
}

export function adaptData(data){
    
  let details = {};
  details["saleOrBuy"] = data.sale ? "Se vende" : "Se compra";
  details["priceOrOffer"] = data.sale ? "Precio" : "Oferta";
  details["itemPhoto"] = (data.photo === "") ? urlNoPhoto : data.photo;
  return details;
} 


export const getUserName = async (tokenJWT) => {
    
  try {
    const response = await fetch(urlAuthMe, {
      headers: {
        'Authorization': `Bearer ${tokenJWT}`
      }
    });
    const data = await response.json();
    return data.username;
  } catch (error) {
    throw new Error('Error accediendo a datos del usuario');
  }
}