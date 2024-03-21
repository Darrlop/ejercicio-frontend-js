import { itemListController } from "./items-list/items-list-controller.js";
import { sessionController } from "./session/session-controller.js";

document.addEventListener('DOMContentLoaded', () => {


  const sessionContainer = document.querySelector("#session");
  sessionController(sessionContainer);


  const itemsListContainer = document.querySelector('.item-list');
  itemListController(itemsListContainer);  

});


