const modal = document.querySelector('[data-modal]');
const modalFechar = document.querySelector('[data-modal="fechar"]');
const modalContainer = document.querySelector('[data-modal="container"]');

modal.addEventListener('click', ativarModal);
function ativarModal(e) {
  e.preventDefault();
  modalContainer.classList.add('ativo');
}

modalContainer.addEventListener('click', clickOutside)
function clickOutside(e) {
  if(e.target === this) {
    desativarModal();
  }
}

modalFechar.addEventListener('click', desativarModal)
function desativarModal() {
  modalContainer.classList.remove('ativo')
}

// Modal
const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('[data-button="login"]');
const submitLogin = document.querySelector('[data-submit="login"]')
const loginError = document.querySelector('[data-error="login"]')

submitLogin.addEventListener('submit', loginValidate)

function loginValidate(e) {
  loginError.innerHTML = "";

  if(!usuario.value) {
    e.preventDefault();
    loginError.innerHTML = "Por favor digite um email valido"
  } else if(!password.value) {
    e.preventDefault();
    loginError.innerHTML = "Por favor, digite sua senha"
  } else if(!account.some(acc => acc.email === usuario.value)) {
    e.preventDefault();
    loginError.innerHTML = "Usuario não existe";
  } else if(!account.some(acc => acc.password === password.value)) {
    e.preventDefault();
    loginError.innerHTML = "Senha não confere";
  }
}


