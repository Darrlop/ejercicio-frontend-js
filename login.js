import { loginController} from "./login/login-controller.js";

document.addEventListener('DOMContentLoaded', () => {

  const loginForm = document.getElementById('login');
  loginController(loginForm);
});