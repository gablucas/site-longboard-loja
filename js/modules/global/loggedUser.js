const loginMenu = document.querySelector('[data-menu="login"]');
const loginUser = document.querySelector('[data-menu="user"]');


export default function loggedUser() {
  if(localStorage.loggedUser) {
    const userLogged = JSON.parse(localStorage[localStorage.loggedUser])
    loginMenu.classList.remove('active');
    loginUser.classList.add('active');
    loginUser.firstElementChild.innerText = userLogged.nome;
  }
}