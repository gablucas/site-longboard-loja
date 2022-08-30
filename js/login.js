import validateLogin from "./modules/login/validateLogin.js";
import campoVazio from "./modules/global/campoVazio.js"
import showQuantityItensCart from "./modules/global/showQuantityItensCart.js"

const loginForm = document.querySelector("[data-login='form']")
const loginButton = document.querySelector("[data-login='button']");

showQuantityItensCart();


loginButton.addEventListener('click', login)
function login() {

  if(!validateLogin(loginForm) && !campoVazio(loginForm)) {
    
    // Define o usuario logado
    localStorage.loggedUser = loginForm.email.value;

    // Direciona para a pagina principal
    window.location.href = "index.html";
  }
}