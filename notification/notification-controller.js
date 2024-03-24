import { buildMessageNotification } from "./notification-view.js";

export const notificationController = (notificationContainer) => {

  const showNotification = (message, type = '') => {
    notificationContainer.innerHTML = buildMessageNotification(message);
    notificationContainer.classList.remove('hidden');
    if (type === 'error')
      notificationContainer.classList.add('showError');

    notificationContainer.addEventListener ('click', () => hiddeNotification())
    
    setTimeout( () =>{
      hiddeNotification();
    }, 5000);

    function hiddeNotification(){
      //notificationContainer.remove();
      notificationContainer.classList.remove('showError');
      notificationContainer.innerHTML = "";
      notificationContainer.classList.add('hidden');
    }
  }

  return {showNotification};
}