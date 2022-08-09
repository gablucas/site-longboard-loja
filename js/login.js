import storageUsers from "./modules/login/storageUsers.js";
import validateLogin from "./modules/login/validateLogin.js";
import campoVazio from "./modules/global/campoVazio.js"

const loginForm = document.querySelector("[data-login='form']")
const loginButton = document.querySelector("[data-login='button']");

// Pegar todos usuarios cadastrados no localStorage
storageUsers();

loginButton.addEventListener('click', login)
function login() {

  // Campos vazios
  campoVazio(loginForm)

  // Validar email e senha
  validateLogin(loginForm)
}