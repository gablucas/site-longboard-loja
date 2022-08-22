//Ativar o endereço selecionado
const endereco = document.querySelectorAll('.carrinho-endereco-item');
const enderecoInput = document.querySelectorAll('.carrinho-endereco-item input');

export default function activeAddress() {
  endereco.forEach((item) => {
    item.addEventListener('click', adicionarChecked)
  })
  
  function adicionarChecked(event) {
    
    endereco.forEach((item) => {
      item.classList.remove('selecionado');
    })
  
    const enderecoSelecionado = event.currentTarget;
    enderecoSelecionado.classList.add('selecionado');
    enderecoSelecionado.firstElementChild.checked = true;
  }
}