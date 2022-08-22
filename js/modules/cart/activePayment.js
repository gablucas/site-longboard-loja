// Ativar pagamento
const botaoEndereco = document.querySelector('[data-button="endereco"]');
const carrinhoEndereco = document.querySelector('.carrinho-entrega > div');
const carrinhoPagamento = document.querySelector('.carrinho-pagamento > div');

export default function activePayment() {

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
}