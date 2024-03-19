import { getItems } from "./item-model.js";
import { showItem } from "./item-view.js";

export async function itemListController(itemListContainer){

  const items = await getItems();
  console.log(items);

  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');
    itemDiv.innerHTML = showItem(item);  
    itemListContainer.appendChild(itemDiv);
  });
  

  
}