//Ativar o endereço selecionado
endereco = document.querySelectorAll('.carrinho-endereco-item');
enderecoInput = document.querySelectorAll('.carrinho-endereco-item input');

function adicionarChecked(event) {
  enderecoSelecionado = event.currentTarget;
  
  for(i = 0; i < endereco.length; i++) {

    if(enderecoSelecionado.contains(enderecoInput[i])) {
      enderecoInput[i].checked = true;
      enderecoSelecionado.classList.add('selecionado');

    } else {
      endereco[i].classList.remove('selecionado')
    }
  }
}

function cliqueEndereco(item) {
  item.addEventListener('click', adicionarChecked)
}

endereco.forEach(cliqueEndereco)

// Ativar o frete selecionado
freteLabel = document.querySelectorAll('.carrinho-frete label')
freteInput = document.querySelectorAll('.carrinho-frete input')

function selecionarFrete(event) {
  freteSelecionado = event.currentTarget;

  for(i = 0; i < freteLabel.length; i++) {
    if(freteSelecionado === (freteLabel[i])) {
      freteInput[i].checked = true;
    }
  }
}

function cliqueFrete(item) {
  item.addEventListener('click', selecionarFrete)
}

freteLabel.forEach(cliqueFrete)

// Ativar pagamento
function ativaPagamento() {
  error = document.querySelector('.error')

  // Verificar se há um endereço e frete selecionado
  for(i = 0; i < endereco.length; i++) {

    // Se sim, finaliza a aba de endereço e abre a de pagamento
    if(enderecoInput[i].checked && freteInput[i].checked) {
      carrinhoEndereco = document.querySelector('.carrinho-entrega > div');
      carrinhoEndereco.classList.remove('ativo');
    
      carrinhoPagamento = document.querySelector('.carrinho-pagamento > div');
      carrinhoPagamento.classList.add('ativo');

    // Se não, exibe uma mensagem de erro
    } else {
      error.textContent = "Por favor, selecione um endereço";
      error.style.color = "red";
      error.style.textAlign = "center";
    }
  }
}