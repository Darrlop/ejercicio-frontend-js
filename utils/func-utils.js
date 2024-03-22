import { urlNoPhoto } from "./const_var.js";

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