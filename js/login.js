import { getStorageUsers } from "./modules/global/users.js";
import validateLogin from "./modules/login/validateLogin.js";
import campoVazio from "./modules/global/campoVazio.js"
import loggedUser from "./modules/global/loggedUser.js";

const loginForm = document.querySelector("[data-login='form']")
const loginButton = document.querySelector("[data-login='button']");

// Passa os usuarios do localStorage para o array account
getStorageUsers();

loginButton.addEventListener('click', login)
function login() {

  if(!validateLogin(loginForm) && !campoVazio(loginForm)) {
    
    // Define o usuario logado
    localStorage.loggedUser = loginForm.email.value;

    // Direciona para a pagina principal
    window.location.href = "index.html";
  }
}