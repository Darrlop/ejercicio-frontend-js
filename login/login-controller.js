import { loginUser } from "./login-model.js";


export const loginController = (loginForm) => {

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitLoginForm(loginForm);
  });

  const submitLoginForm = async (loginForm) => {
    const {user, password} = getLoginFormData(loginForm);

    try {
      const jwt = await loginUser(user, password);
      localStorage.setItem('tokenJWT', jwt);
      window.location = "../index.html";
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