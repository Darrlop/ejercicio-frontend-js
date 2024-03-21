import { loginUser } from "./login-model.js";


export const loginController = (loginForm) => {

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitLoginForm(loginForm);
  });

  const submitLoginForm = (loginForm) => {
    const {user, password} = getLoginFormData(loginForm);

    try {
      loginUser(user, password);
      //pedir datos al model y recoger el token jwt
      //guardarlo en localStorage
      //redireccionar a pag principal
    } catch (error) {
      alert (error);
    }
  }


  function getLoginFormData(loginForm){
    
    const formData = new FormData(loginForm);
    const user = formData.get('email');
    const password = formData.get('password');
    return { user: user, password: password };
  } 

}