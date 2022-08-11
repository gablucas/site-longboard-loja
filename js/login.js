import { storageUsers } from "./modules/global/users.js";
import validateLogin from "./modules/login/validateLogin.js";
import campoVazio from "./modules/global/campoVazio.js"
import changeDataUser from "./modules/global/changeDataUser.js";

const loginForm = document.querySelector("[data-login='form']")
const loginButton = document.querySelector("[data-login='button']");

// Pegar todos usuarios cadastrados no localStorage
storageUsers();

loginButton.addEventListener('click', login)
function login() {

  if(!validateLogin(loginForm) && !campoVazio(loginForm)) {
    // window.location.href = "index.html";

    // Encontra o usuario e adiciona o valor de "on" para propriedade "logged"
    changeDataUser(loginForm.email.value, "logged", "on");
  }
}