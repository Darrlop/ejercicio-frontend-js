import { showLoginSignupSession, showLoggedSession } from "./session-view.js";



export function sessionController(sessionContainer){

  if (isLogged()){
    sessionContainer.innerHTML = showLoggedSession();
    const logoutButton = sessionContainer.querySelector('.log-out');
    logoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      localStorage.removeItem('tokenJWT');
      alert ("Sesión cerrada");
      sessionController(sessionContainer);
    });
  }else{
    sessionContainer.innerHTML = showLoginSignupSession();
  }  
}


function isLogged() {
  return localStorage.getItem('tokenJWT');
}