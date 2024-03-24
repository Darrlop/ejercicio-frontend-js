import { loginUser } from "./login-model.js";
import { dispatchEvent } from "../utils/func-utils.js";


export const loginController = (loginForm) => {

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitLoginForm(loginForm);
  });

  const submitLoginForm = async (loginForm) => {
    const {user, password} = getLoginFormData(loginForm);
    
    const spinner = document.querySelector("#login .loader");
    try {
      spinner.classList.toggle('hidden');
      const jwt = await loginUser(user, password);
      localStorage.setItem('tokenJWT', jwt);
      window.location = "../index.html";
    } catch (error) {
      dispatchEvent('login-error', {
        message: error,
        type: 'error'
      }, loginForm);
    }finally{
      spinner.classList.toggle('hidden');
    }
  }


  function getLoginFormData(loginForm){
    const formData = new FormData(loginForm);
    const user = formData.get('email');
    const password = formData.get('password');
    return { user: user, password: password };
  } 

}