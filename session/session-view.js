export function showLoginSignupSession(){

  return `
  <span> <a class='asButton' href="./login.html"> [ Login ] </a></span>
  <span> - <span>
  <span><a class='asButton' href="./signup.html">[ SignUp ] </a></span>
  `
}

export function showLoggedSession(){
  return `
  <span><a class='log-out asButton' href=""> [ Logout ] </a></span>
  <span> - <span>
  <span> <a class='asButton' href="./item-creation.html"> [ Create Ad ] </a></span>
  `
}