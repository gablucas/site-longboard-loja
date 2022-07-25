const registerStep1 = document.querySelector('[data-submit="register-step1"]');
const registerStep2 = document.querySelector('[data-submit="register-step2"]');
const registerStep3 = document.querySelector('[data-submit="register-step3"]');

const stepCount = document.querySelector('[data-register="step"]');

// Validacao registro - Etapa 1
const registerEmail = document.querySelector('[data-register="email"]');
const registerEmailError = document.querySelector('[data-error="register-email"]');

const registerPassword = document.querySelector('[data-register="password"]');
const registerPasswordError = document.querySelector('[data-error="register-password"]');

const confirmPassword = document.querySelector('[data-register="confirm-password"]');
const confirmPasswordError = document.querySelector('[data-error="confirm-password"]');

const registerButtonStep1 = document.querySelector('[data-register="button-step1"]');


registerButtonStep1.addEventListener('click', validateRegisterStep1)

function validateRegisterStep1(e) {
  registerEmailError.innerHTML = "";
  registerPasswordError.innerHTML = "";
  confirmPasswordError.innerHTML = "";

  if(!registerEmail.value) {
    e.preventDefault();
    registerEmailError.innerHTML = "Digite um email";
  }else if(!registerPassword.value) {
    e.preventDefault();
    registerPasswordError.innerHTML = "Digite uma senha";
  }else if(!confirmPassword.value || registerPassword.value !== confirmPassword.value) {
    e.preventDefault();
    confirmPasswordError.innerHTML = "As duas senhas não conferem";
  } else {
    registerStep1.classList.remove('active');
    registerStep2.classList.add('active');
    stepCount.innerHTML = 2;
  }
}

// Validacao registro - Etapa 2
const registerName = document.querySelector('[data-register="name"]');
const registerNameError = document.querySelector('[data-error="register-name"]');

const registerLastName = document.querySelector('[data-register="lastname"]');
const registerLastNameError = document.querySelector('[data-error="register-lastname"]');

const registerCPF = document.querySelector('[data-register="cpf"]');
const registerCPFError = document.querySelector('[data-error="register-cpf"]');


const registerButtonStep2 = document.querySelector('[data-register="button-step2"]');

registerButtonStep2.addEventListener('click', validateRegisterStep2)

function validateRegisterStep2(e) {
  registerNameError.innerHTML = "";
  registerLastNameError.innerHTML = "";
  registerCPFError.innerHTML = "";

  if(!registerName.value) {
    e.preventDefault();
    registerNameError.innerHTML = "Digite seu nome";
  }else if(!registerLastName.value) {
    e.preventDefault();
    registerLastNameError.innerHTML = "Digite seu sobrenome";
  }else if(!registerCPF.value) {
    e.preventDefault();
    registerCPFError.innerHTML = "Digite seu CPF";
  } else {
    registerStep2.classList.remove('active');
    registerStep3.classList.add('active');
    stepCount.innerHTML = 3;
  }
}

