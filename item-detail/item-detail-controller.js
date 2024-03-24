import { getItemById, getUserData, deleteItemById } from "./item-detail-model.js";
import { showItem } from "./item-detail-view.js";
import { adaptData, dispatchEvent } from "../utils/func-utils.js";


export async function itemDetailController(itemDetailContainer){

  const params = new URLSearchParams(window.location.search);
  const itemId = params.get('id');
  if (!itemId) window.location.href = "../index.html";
  //goBack(itemDetailContainer);

  const spinner = itemDetailContainer.querySelector('.loader');
  try {
    spinner.classList.toggle('hidden');
    const item = await getItemById(itemId);
    const othersDetailsOfItem = adaptData(item);
    const divDetails = document.createElement('div');
    divDetails.classList.add('item__details');
    divDetails.innerHTML = showItem(item, othersDetailsOfItem);
    itemDetailContainer.appendChild(divDetails);
    handleDeleteItemButton(itemDetailContainer, item);
  } catch (error) {
    dispatchEvent ('delete-item', {
      message: error,
      type: 'error',
      redirection: true
    }, itemDetailContainer);
  }finally{
    spinner.classList.toggle('hidden');
  }

  async function handleDeleteItemButton(itemDetailContainer, item) {
    const tokenJWT = localStorage.getItem('tokenJWT');
    const userId = await getUserData(tokenJWT);

    if (item.userId === userId) {
      const deleteItemButton = itemDetailContainer.querySelector('#deleteButton')
      deleteItemButton.removeAttribute('disabled');
      deleteItemButton.addEventListener('click', () => deleteItem(item.id, tokenJWT));
    }
  }

  async function deleteItem(itemId, tokenJWT) {
    if (window.confirm('¿Seguro que quieres borrar el artículo?')) {
      try {
        spinner.classList.toggle('hidden');
        await deleteItemById(itemId, tokenJWT);
        dispatchEvent ('delete-item', { 
          message: "Artículo borrado con éxito",
          redirection: true
        }, itemDetailContainer);
      } catch (error) {
        dispatchEvent ('delete-item', { 
          message: error,
          type: 'error'
        }, itemDetailContainer)
      } finally {
        spinner.classList.toggle('hidden');
      }
    }
  }


}

