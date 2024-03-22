// BALIZA: spinner
// BALIZA: notificaciones

import { signupUser } from "./signup-model.js";
import { dispatchEvent } from "../utils/func-utils.js"; // BALIZA: para usar con notificaciones


export const signupController = (signupForm) => {

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitSignupForm(signupForm);
  });

  const submitSignupForm = (signupForm) => {
    const {username, password} = getSignupFormData(signupForm);
    const formFormatError = handleSignupFormFormats (signupForm);
    formFormatError.length === 0 ? signupUser(username, password) :  alert (formFormatError.join(" "));
  }

}

// A continuación aplico 2 maneras diferentes de obtener los campos username y password.
// (con FormData y con querySelector junto a value) 
// Lo hago en base a tener/practicar código con ambas. Se podía eliminar una de ellas.

function getSignupFormData(signupForm){

  const formData = new FormData(signupForm);
  const username = formData.get('email');
  const password = formData.get('password');
  return {username: username, password: password};
}


function handleSignupFormFormats(signupForm){

  let errors = [];

  const testMail = () => {
    const email = signupForm.querySelector('#email');
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return emailRegExp.test(email.value);
  }

  const testPassword = () => {
    const fisrtPasswordField = document.querySelector('#password');
    const secondPasswordField = document.querySelector('#password-check');
    return fisrtPasswordField.value === secondPasswordField.value;
  }

  if (!testMail())
    {errors.push(" -Error: formato incorrecto del mail en el nombre de usuario \n");}
  if (!testPassword())
    {errors.push("-Error: Las contraseñas introducidas no coinciden");}
  return errors;

}