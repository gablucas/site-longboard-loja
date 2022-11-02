export function exitAccount() {

  if(localStorage.loggedUser) {
    const buttonExit = document.querySelector('[data-menu="exit"]');
    buttonExit.addEventListener('click', logOut)
  
    function logOut() {
      localStorage.loggedUser = "";
      location.reload();
    }
  }
}