import { showLoginSignupSession, showLoggedSession } from "./session-view.js";

const isLogged = () => {
  return localStorage.getItem('token');
}


export function sessionController(sessionContainer){


    if (isLogged()){
      sessionContainer.innerHTML = showLoggedSession();

    }else{
      sessionContainer.innerHTML = showLoginSignupSession();
    }



  
}
