//Ativar o endereço selecionado
endereco = document.querySelectorAll('.carrinho-endereco-item');

function adicionarChecked(event) {
  enderecoSelecionado = event.currentTarget;
  enderecoInput = document.querySelectorAll('.carrinho-endereco-item input');

  for(i = 0; i < endereco.length; i++) {

    if(enderecoSelecionado.contains(enderecoInput[i])) {
      enderecoInput[i].checked = true;
      enderecoSelecionado.classList.add('selecionado');

    } else {
      endereco[i].classList.remove('selecionado')
    }
  }
}

function cliqueInput(item) {
  item.addEventListener('click', adicionarChecked)
}

endereco.forEach(cliqueInput)

// Ativar pagamento
function ativaPagamento() {
  carrinhoEndereco = document.querySelector('.carrinho-entrega > div')
  carrinhoEndereco.classList.remove('ativo')
  console.log(carrinhoEndereco)

  carrinhoPagamento = document.querySelector('.carrinho-pagamento > div')
  carrinhoPagamento.classList.add('ativo')
}