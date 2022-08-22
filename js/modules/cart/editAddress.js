// Editar endereço
const editarEndereco = document.querySelector('.carrinho-entrega .editar-dados')

export default function editAddress() {

  editarEndereco.addEventListener('click', reativarEndereco)
  function reativarEndereco() {
    editarEndereco.classList.remove('ativo');
    carrinhoEndereco.classList.add('ativo');
  }
}