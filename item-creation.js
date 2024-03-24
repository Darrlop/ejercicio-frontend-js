import { itemCreationController } from "./item-creation/item-creation-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  
  const notificationContainer = document.querySelector(".notification");
  const {showNotification} = notificationController(notificationContainer);

  const itemCreationForm = document.querySelector("#creation");
  itemCreationForm.addEventListener("creation-item", (event) =>{
    showNotification(event.detail.message, event.detail.type);
    event.stopPropagation();
  });
  itemCreationController(itemCreationForm);

});