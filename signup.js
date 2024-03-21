import { signupController } from "./signup/signup-controller.js";

document.addEventListener('DOMContentLoaded', () => {

  const signupForm = document.getElementById('signup-form');
  signupController(signupForm);


})