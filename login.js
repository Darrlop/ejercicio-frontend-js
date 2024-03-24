import { loginController} from "./login/login-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {


  const notificationContainer = document.querySelector('.notification');
  const { showNotification } = notificationController(notificationContainer);

  const loginForm = document.getElementById('login');
  loginForm.addEventListener('login-error', (event) => {
    showNotification(event.detail.message, event.detail.type);
    event.stopPropagation();
  });
  loginController(loginForm);
});