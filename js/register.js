import showQuantityItensCart from "./modules/global/showQuantityItensCart.js"
showQuantityItensCart();

// Modulos para todos formularios
import campoVazio from "./modules/global/campoVazio.js"

// Modulos para o primeiro formulario
import validateEmail from "./modules/register/validateEmail.js";
import validatePassword from "./modules/register/validatePassword.js";
import strengthPassword from "./modules/register/strengthPassword.js";

// Modulos para o segundo formulario
import formatCPF from "./modules/register/formatCPF.js";
import validateCPF from "./modules/register/validateCPF.js";


// Modulos para o terceiro formulario
import formatCEP from "./modules/register/formatCEP.js";
import registerUser from "./modules/register/registerUser.js";
import buscarEndereco from "./modules/register/buscarEndereco.js";


// Formulario
const registerForm = document.querySelectorAll('[data-form="register"]');
const registerButton = document.querySelectorAll("[data-register='button']");
const registerSucessfull = document.querySelector("[data-register='sucessfull']");
const stepProgress = document.querySelector('[data-register="step-progress"]');
const stepCount = document.querySelector('[data-register="step-count"]');

// VALIDANDO OS FORMULARIOS

// Primeiro formulario
registerButton[0].addEventListener('click', validarFormulario1)
function validarFormulario1() {
  const form = registerForm[0];

  // Validação
  if(!validateEmail(form) && !validatePassword(form) && !campoVazio(form)) {
    stepProgress.classList.add('step1')
    stepCount.innerText = 2;
    registerForm[0].parentElement.classList.remove("active");
    registerForm[1].parentElement.classList.add("active");
  }
}

// Funções segundo formulario
strengthPassword(registerForm[0]);


// Segundo formulario
registerButton[1].addEventListener('click', validarFormulario2)
function validarFormulario2() {
  const form = registerForm[1];
  
  // Validação
  if(!validateCPF(form) && !campoVazio(form)) {
    stepProgress.classList.replace('step1', 'step2')
    stepCount.innerText = 3;
    registerForm[1].parentElement.classList.remove("active");
    registerForm[2].parentElement.classList.add("active");
  }
}

// Funções segundo formulario
formatCPF(registerForm[1]);

// Terceiro formulario
registerButton[2].addEventListener('click', validarFormulario3)
function validarFormulario3() {
const form = registerForm[2];
  
  // Validação
  if(!campoVazio(form)) {
    stepProgress.classList.replace('step2', 'step3')
    stepCount.parentElement.innerHTML = "";
    form.parentElement.classList.remove("active");
    registerSucessfull.classList.add("active");
    registerUser(registerForm)
  }
}

// Funções terceiro formulario
formatCEP(registerForm[2])
buscarEndereco(registerForm[2])
