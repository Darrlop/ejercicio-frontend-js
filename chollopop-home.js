import { itemListController } from "./items-list/items-list-controller.js";
import { sessionController } from "./session/session-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {


  const sessionContainer = document.querySelector("#session");
  sessionController(sessionContainer);



  const notificationContainer = document.querySelector(".notification");
  const {showNotification} = notificationController(notificationContainer);




  const itemsListContainer = document.querySelector('.item-list');
  itemsListContainer.addEventListener('error-loading-items', (event) => {
    showNotification(event.detail.message, event.detail.type);
    event.stopPropagation();
  });
  itemListController(itemsListContainer);  

});


