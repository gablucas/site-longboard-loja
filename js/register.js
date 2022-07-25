// Estapas do registro
const registerStep1 = document.querySelector('[data-submit="register-step1"]');
const registerStep2 = document.querySelector('[data-submit="register-step2"]');
const registerStep3 = document.querySelector('[data-submit="register-step3"]');
const registroSucesso = document.querySelector('[data-submit="register-sucessfull"]');

const stepCount = document.querySelector('[data-register="step"]');

// Validacao registro - Etapa 1
const registerEmail = document.querySelector('[data-register="email"]');
const registerPassword = document.querySelector('[data-register="password"]');
const confirmPassword = document.querySelector('[data-register="confirm-password"]');

const registerEmailError = document.querySelector('[data-error="register-email"]');
const registerPasswordError = document.querySelector('[data-error="register-password"]');
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
    stepCount.innerHTML = "Etapa 2 de 3";
  }
}

// Validacao registro - Etapa 2
const registerName = document.querySelector('[data-register="name"]');
const registerLastName = document.querySelector('[data-register="lastname"]');
const registerNascimento = document.querySelector('[data-register="nascimento"]');
const registerCPF = document.querySelector('[data-register="cpf"]');

const registerNameError = document.querySelector('[data-error="register-name"]');
const registerLastNameError = document.querySelector('[data-error="register-lastname"]');
const registerNascimentoError = document.querySelector('[data-error="register-nascimento"]');
const registerCPFError = document.querySelector('[data-error="register-cpf"]');

const registerButtonStep2 = document.querySelector('[data-register="button-step2"]');

registerButtonStep2.addEventListener('click', validateRegisterStep2)

function validateRegisterStep2(e) {
  registerNameError.innerHTML = "";
  registerLastNameError.innerHTML = "";
  registerNascimentoError.innerHTML = "";
  registerCPFError.innerHTML = "";

  if(!registerName.value) {
    e.preventDefault();
    registerNameError.innerHTML = "Digite seu nome";
  }else if(!registerLastName.value) {
    e.preventDefault();
    registerLastNameError.innerHTML = "Digite seu sobrenome";
  }else if(!registerNascimento.value) {
    e.preventDefault();
    registerNascimentoError.innerHTML = "Digite sua data de nascimento";
  }else if(!registerCPF.value) {
    e.preventDefault();
    registerCPFError.innerHTML = "Digite seu CPF";
  } else {
    registerStep2.classList.remove('active');
    registerStep3.classList.add('active');
    stepCount.innerHTML = "Etapa 3 de 3";
  }
}

// Validacao registro - Etapa 3
const registerCep = document.querySelector('[data-register="cep"]');
const registerRua = document.querySelector('[data-register="rua"]');
const registerNumero = document.querySelector('[data-register="numero"]');
const registerComplemento = document.querySelector('[data-register="complemento"]');
const registerCidade = document.querySelector('[data-register="cidade"]');
const registerBairro = document.querySelector('[data-register="bairro"]');
const registerEstado = document.querySelector('[data-register="estado"]');

const registerCepError = document.querySelector('[data-error="register-cep"]');
const registerRuaError = document.querySelector('[data-error="register-rua"]');
const registerComplementoError = document.querySelector('[data-error="register-complemento"]');
const registerCidadeError = document.querySelector('[data-error="register-cidade"]');

const registerButtonStep3 = document.querySelector('[data-register="button-step3"]');

registerButtonStep3.addEventListener('click', validateRegisterStep3)

function validateRegisterStep3(e) {
  registerCepError.innerHTML = "";
  registerRuaError.innerHTML = "";
  registerComplementoError.innerHTML = "";
  registerCidadeError.innerHTML = "";

  if(!registerCep.value) {
    e.preventDefault();
    registerCepError.innerHTML = "Digite um CEP";
  }else if(!registerRua.value) {
    e.preventDefault();
    registerRuaError.innerHTML = "Digite uma rua";
  }else if(!registerNumero.value) {
    e.preventDefault();
    registerRuaError.innerHTML = "Digite um número";
  }else if(!registerCidade.value){
    e.preventDefault();
    registerCidadeError.innerHTML = "Digite uma cidade";
  }else if(!registerBairro.value){
    e.preventDefault();
    registerCidadeError.innerHTML = "Digite um bairro";
  }else if(!registerEstado.value){
    e.preventDefault();
    registerCidadeError.innerHTML = "Digite um estado";
  } else {
    registerStep3.classList.remove('active');
    registroSucesso.classList.add('active');
    stepCount.innerHTML = ""

    createAccount(registerEmail.value, registerPassword.value, registerName.value, registerLastName.value, registerNascimento.value, registerCPF.value, registerRua.value, registerNumero.value, registerBairro.value, registerCidade.value, registerEstado.value, registerCep.value, registerComplemento.value);

    registroSucesso.innerHTML = `
    <span class="font-2-xs-m-u cor-11">Cadastro realizado com sucesso!</span>
    <span>Email: ${registerEmail.value}</span>
    <span>Senha: ${registerPassword.value}</span>
    <span>Nome: ${registerName.value}</span>
    <span>Sobrenome: ${registerLastName.value}</span>
    <span>Nascimento: ${registerNascimento.value}</span>
    <span>CPF: ${registerCPF.value}</span>
    <span>Endereço: ${registerRua.value}, ${registerNumero.value} - ${registerBairro.value}, ${registerCidade.value}, ${registerEstado.value} - ${registerCep.value} -  ${registerComplemento.value}</span>`
  }
}


