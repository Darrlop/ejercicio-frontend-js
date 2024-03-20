import { urlNoPhoto } from "./const_var.js";

export function adaptData(data){
    
  let details = {};
  details["saleOrBuy"] = data.sale ? "Se vende" : "Se compra";
  details["priceOrOffer"] = data.sale ? "Precio" : "Oferta";
  details["itemPhoto"] = (data.photo === "") ? urlNoPhoto : data.photo;
  return details;
} 