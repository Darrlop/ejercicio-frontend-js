import { getItems } from "./items-list-model.js";
import { showItem } from "./items-list-view.js";
import { adaptData } from "../utils/func-utils.js";


export async function itemListController(itemListContainer){
  
  const spinner = itemListContainer.querySelector(".loader");

  try {
    spinner.classList.toggle('hidden');
    const items = await getItems();

    items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      const othersDetailsOfItem = adaptData(item);
      itemDiv.innerHTML = showItem(item, othersDetailsOfItem);  
      itemListContainer.appendChild(itemDiv);
    });
  } catch (error) {
    throw("Error obteniendo la lista de artículos de la tienda... " + error);
  }finally{
    spinner.classList.toggle('hidden');
  }
}