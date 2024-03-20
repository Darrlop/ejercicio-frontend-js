import { urlBase } from "../utils/const_var.js";


export async function getItemById (itemId){
  const url = urlBase + '/' + itemId;
  let item = undefined;

  try {
    const response = await fetch(url);
    item = await response.json();    
  } catch (error) {
    throw ("Error accediendo a los detalles del artículo... " + error);
  }

  return item;
}