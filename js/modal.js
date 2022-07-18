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

