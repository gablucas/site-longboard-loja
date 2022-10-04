import showQuantityItensCart from "./modules/global/showQuantityItensCart.js"
import { Validator } from "./modules/global/validator.js";

const form = document.querySelector("[data-login='form']")
const validate = new Validator(form);
const button = document.querySelector("[data-login='button']");

showQuantityItensCart();


button.addEventListener('click', login)
function login() {
  validate.emptyInputs(
    'email', 
    'password');

  validate.login(
    'email',
    'password',
  );
  
  if (validate.isValid()) {
    localStorage.loggedUser = form.email.value; // Define o usuario logado
    window.location.href = "index.html"; // Direciona para a pagina principal
  }
}
