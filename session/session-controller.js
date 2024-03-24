import { showLoginSignupSession, showLoggedSession } from "./session-view.js";
import { getUserName } from "../utils/func-utils.js";



export async function sessionController(sessionContainer){

  const token = isLogged();
  if (token !== null){
    const username = await getUserName(token);
    sessionContainer.innerHTML = showLoggedSession(username);
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