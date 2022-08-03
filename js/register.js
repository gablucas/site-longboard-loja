import formstep1 from "./modules/register/formstep1.js";
import formstep2 from "./modules/register/formstep2.js";
import formstep3 from "./modules/register/formstep3.js";

const registerForm = document.querySelectorAll('[data-form="register"]')
const registerButton = document.querySelectorAll("[data-register='button']");

// Inserir mensagem de erro nas validações especificas
function insertError(input, text) {
  input.nextElementSibling.innerText = text;
  input.style.border = "1px solid red"

  if(!text) {
    input.style.border = "1px solid var(--cor-6)";
  }
}

// Validação formulario 1
formstep1(registerForm, registerButton, insertError);

// Validação formulario 2
formstep2(registerForm, registerButton, insertError);

// Validação formulario 3
formstep3(registerForm, registerButton, insertError);


