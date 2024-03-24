import { itemDetailController } from "./item-detail/item-detail-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {


  const notificationContainer = document.querySelector('.notification');
  const { showNotification } = notificationController(notificationContainer);
  

  const itemDetailContainer = document.querySelector('.item-detail');
  itemDetailContainer.addEventListener('delete-item', (event) => {
    showNotification(event.detail.message, event.detail.type, event.detail.redirection);
    event.stopPropagation();
  });
  itemDetailController(itemDetailContainer);
});


