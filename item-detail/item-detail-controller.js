import { getItemById } from "./item-detail-model.js";
import { showItem } from "./item-detail-view.js";
import { adaptData } from "../utils/func-utils.js";

const goBack = (itemDetailContainer) => {

  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', () => {
    window.history.back();
  });

}


export async function itemDetailController(itemDetailContainer){

  const params = new URLSearchParams(window.location.search);
  const itemId = params.get('id');
  
  if (!itemId) window.location.href = "../index.html";
  goBack(itemDetailContainer);

  try {
    const item = await getItemById(itemId);
    const othersDetailsOfItem = adaptData(item);
    const divDetails = document.createElement('div');
    divDetails.classList.add('item__details');
    divDetails.innerHTML = showItem(item, othersDetailsOfItem);
    itemDetailContainer.appendChild(divDetails);
  } catch (error) {
    alert(error);
  }
}

