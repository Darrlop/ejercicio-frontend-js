import { itemCreationController } from "./item-creation/item-creation-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  
  const itemCreationForm = document.querySelector("#creation");
  itemCreationController(itemCreationForm);

});