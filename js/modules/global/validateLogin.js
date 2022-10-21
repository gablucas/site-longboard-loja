import { Validator } from "./validator.js";
import { verifyLocation } from "./verifyLocation.js";

export function validateLogin() {
  const form = document.querySelector("[data-login='form']")
  const button = document.querySelector("[data-login='button']");
  const validate = new Validator(form);

  button.addEventListener('click', login)
  function login() {
    validate.login(
      'email',
      'password',
    );
    
    if (validate.isValid()) {
      localStorage.loggedUser = form.email.value; // Define o usuario logado

      if (verifyLocation('login.html')) {
        window.location.href = "index.html"; // Direciona para a pagina principal
      } else {
        window.location.reload();
      }
    }
  }
}



