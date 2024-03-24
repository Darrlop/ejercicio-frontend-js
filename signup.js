import { signupController } from "./signup/signup-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {

  const notificationContainer = document.querySelector(".notification");
  const {showNotification} = notificationController(notificationContainer);
  
  const signupForm = document.getElementById('signup-form');
  signupForm.addEventListener("signup-Message", (event) => {
    showNotification(event.detail.message, event.detail.type, event.detail.redirection);
    event.stopPropagation();
  });
  signupController(signupForm);


})