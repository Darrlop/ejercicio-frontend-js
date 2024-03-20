import { itemDetailController } from "./item-detail/item-detail-controller.js";


document.addEventListener('DOMContentLoaded', () => {
  const itemDetailContainer = document.querySelector('.item-detail');
  itemDetailController(itemDetailContainer);
});


