import validateRegister1 from "./modules/register/validateRegister1.js";
import validateRegister2 from "./modules/register/validateRegister2.js";
import validateRegister3 from "./modules/register/validateRegister3.js";

const registerForm = document.querySelectorAll('[data-form="register"]')
const registerButton = document.querySelectorAll("[data-register='button']");

// Validação formulario 1
validateRegister1(registerForm, registerButton);

// Validação formulario 2
validateRegister2(registerForm, registerButton);

// Validação formulario 3
validateRegister3(registerForm, registerButton);


