import { itemListController } from "./items-list/items-list-controller.js";


document.addEventListener('DOMContentLoaded', () => {
  const itemsListContainer = document.querySelector('.item-list');
  itemListController(itemsListContainer);  
});


