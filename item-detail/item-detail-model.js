import { urlBase, urlAuthMe } from "../utils/const_var.js";


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

export const getUserData = async (tokenJWT) => {

  try {
    const response = await fetch(urlAuthMe, {
      headers: {
        'Authorization': `Bearer ${tokenJWT}`
      }
    });
    const data = await response.json();
    return data.id;
  } catch (error) {
    throw new Error('Error accediendo a datos del usuario');
  }
}

export const deleteItemById = async (itemId, tokenJWT) => {

  const url = urlBase + "/" + itemId;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenJWT}`
      }
    });
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    } else {
      alert ("Artículo borrado");
    }
  } catch (error) {
    throw new Error('Error borrando artículo')
  }
}