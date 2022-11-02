// Modulos para todos formularios
import { Validator } from "./modules/global/validator.js";

// Modulos para o primeiro formulario
import { strengthPassword } from "./modules/register/strengthPassword.js";

// Modulos para o segundo formulario
import { formatCPF } from "./modules/register/formatCPF.js";

// Modulos para o terceiro formulario
import { formatCEP } from "./modules/register/formatCEP.js";
import { registerUser } from "./modules/register/registerUser.js";
import { buscarEndereco } from "./modules/register/buscarEndereco.js";

// Formulario
const registerForm = document.querySelectorAll('[data-form="register"]');
const registerButton = document.querySelectorAll("[data-register='button']");
const registerSucessfull = document.querySelector("[data-register='sucessfull']");
const stepProgress = document.querySelector('[data-register="step-progress"]');
const stepCount = document.querySelector('[data-register="step-count"]');

function nextStep(step) {
  if (step === 2) {
    stepProgress.classList.add('step1')
    stepCount.innerText = 2;
    registerForm[0].parentElement.classList.remove("active");
    registerForm[1].parentElement.classList.add("active");
  } else if (step === 3) {
    stepProgress.classList.replace('step1', 'step2')
    stepCount.innerText = 3;
    registerForm[1].parentElement.classList.remove("active");
    registerForm[2].parentElement.classList.add("active");
  } else if (step === 4) {
    stepProgress.classList.replace('step2', 'step3')
    stepCount.parentElement.innerHTML = "";
    registerForm[2].parentElement.classList.remove("active");
    registerSucessfull.classList.add("active");
  }
}

// VALIDANDO OS FORMULARIOS

// Primeiro formulario
registerButton[0].addEventListener('click', validarFormulario1)
function validarFormulario1() {
  const validate = new Validator(registerForm[0]);

  validate.emptyInputs(
    'email',
    'senha',
    'confirmar-senha',
  );

  validate.existingValue('email', 'email', 'Email já cadastrado');
  validate.wordContain('email', /\w+@\D+.\w+/, "Email incorreto");
  validate.minCharacters('senha', 7, "Mínimo de 6 caracteres");
  validate.equalValues('senha', 'confirmar-senha', "Senhas não são iguais");

  if (validate.isValid()) {
    nextStep(2);
  }
}

// Funções segundo formulario
strengthPassword(registerForm[0]);


// Segundo formulario
registerButton[1].addEventListener('click', validarFormulario2)
function validarFormulario2() {
  const validate = new Validator(registerForm[1]);

  validate.emptyInputs(
    'nome',
    'sobrenome',
    'nascimento',
    'cpf',
  );

  validate.onlyCharacters(
    'nome',
    'sobrenome'
  );

  if(validate.isValid()) {
    nextStep(3);
  };
}

// Funções segundo formulario
formatCPF(registerForm[1]);

// Terceiro formulario
registerButton[2].addEventListener('click', validarFormulario3)
function validarFormulario3() {
  const validate = new Validator(registerForm[2]);

  validate.emptyInputs(
    'endereco_identificacao',
    'endereco_cep',
    'endereco_rua',
    'endereco_numero',
    'endereco_cidade',
    'endereco_bairro',
    'endereco_estado',
  );

  // Validação
  if (validate.isValid()) {
    nextStep(4);
    registerUser(registerForm)
  }
}

// Funções terceiro formulario
formatCEP(registerForm[2])
buscarEndereco(registerForm[2])