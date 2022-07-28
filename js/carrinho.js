//Ativar o endereço selecionado
const endereco = document.querySelectorAll('.carrinho-endereco-item');
const enderecoInput = document.querySelectorAll('.carrinho-endereco-item input');

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

// Ativar o frete selecionado
const freteLabel = document.querySelectorAll('.carrinho-frete label')
const freteInput = document.querySelectorAll('.carrinho-frete input')

freteLabel.forEach((item) => {
  item.addEventListener('click', selecionarFrete)
})


function selecionarFrete(event) {

  freteLabel.forEach((item) => {
    item.classList.replace('font-2-xs-m','font-2-xs')
  })

  const freteSelecionado = event.currentTarget;
  freteSelecionado.previousElementSibling.checked = true;
  freteSelecionado.classList.replace('font-2-xs','font-2-xs-m',)
  }


// Ativar pagamento
const botaoEndereco = document.querySelector('[data-button="endereco"]');
const carrinhoEndereco = document.querySelector('.carrinho-entrega > div');
const carrinhoPagamento = document.querySelector('.carrinho-pagamento > div');

const cartError = document.querySelector('[data-error="cart"]')
cartError.style.textAlign = "center";


botaoEndereco.addEventListener('click', ativaPagamento)
function ativaPagamento() {
  if(!Array.prototype.some.call(enderecoInput, (item) => item.checked)) {
    cartError.innerText = "Por favor, selecione um endereço"
  } else if(!Array.prototype.some.call(freteInput, (item) => item.checked)) {
    cartError.innerText = "Por favor, selecione um frete"
  } else {
    cartError.innerText = "";
    carrinhoEndereco.classList.remove('ativo');
    carrinhoPagamento.classList.add('ativo');
    editarEndereco.classList.add('ativo');
  }
}

// Editar endereço
const editarEndereco = document.querySelector('.carrinho-entrega .editar-dados')

editarEndereco.addEventListener('click', reativarEndereco)
function reativarEndereco() {
  editarEndereco.classList.remove('ativo');
  carrinhoEndereco.classList.add('ativo');
}