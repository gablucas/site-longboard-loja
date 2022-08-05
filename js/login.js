import errorDescription from "./modules/errorDescription.js";
import { account } from "./modules/users.js";


const loginForm = document.querySelector("[data-login='form']").elements;
const loginButton = document.querySelector("[data-login='button']");

loginButton.addEventListener('click', validateLogin)
function validateLogin() {

  // Campos vazios - Criar um modulo com esse código
  Array.from(loginForm).forEach((input) => {
    if(input.value === "") {
      errorDescription(input, "Campo vazio")
    } else {
      errorDescription(input, "")
    }
  })

  // Usuario não encontrado
  if(!account.some(user => user.email === loginForm.email.value) && loginForm.email.value) {
    errorDescription(loginForm.email, "Usuario não existente")
  }

  // Senha invalida
  if(!account.some(user => user.password === loginForm.password.value) && loginForm.password.value) {
    errorDescription(loginForm.password, "Senha incorreta")
  }
}