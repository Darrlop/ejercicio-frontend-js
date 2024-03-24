import { buildMessageNotification } from "./notification-view.js";

export const notificationController = (notificationContainer) => {

  const showNotification = (message, type = '', redirection = false) => {
    notificationContainer.innerHTML = buildMessageNotification(message);
    notificationContainer.classList.remove('hidden');
    if (type === 'error'){
      notificationContainer.classList.add('showError');
    }

    notificationContainer.addEventListener ('click', () => hiddeNotification());
    
    setTimeout( () =>{
      hiddeNotification();
    }, 3000);

    function hiddeNotification(){
      //notificationContainer.remove();
      notificationContainer.classList.remove('showError');
      notificationContainer.innerHTML = "";
      notificationContainer.classList.add('hidden');
      if (redirection) window.location.href= "./index.html"; 
    }
  }

  return {showNotification};
}