import { signupUser } from "./signup-model.js";

export const signupController = (signupForm) => {

  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitSignupForm(signupForm);
  });


  const submitSignupForm = (signupForm) => {
    const {username, password} = getSignupFormData(signupForm);

    signupUser(username, password);
  }
}


function getSignupFormData(signupForm){

  const formData = new FormData(signupForm);
  const username = formData.get('email');
  const password = formData.get('password');
  return {username: username, password: password};
}

