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
      endereco[i].classList.remove('selecionado');
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
    freteLabel[i].classList.replace('font-2-xs-m','font-2-xs')

    if(freteSelecionado === (freteLabel[i])) {
      freteInput[i].checked = true;
      freteLabel[i].classList.replace('font-2-xs','font-2-xs-m',)
    }
  }
}

function cliqueFrete(item) {
  item.addEventListener('click', selecionarFrete)
}

freteLabel.forEach(cliqueFrete)

// Ativar pagamento
carrinhoEndereco = document.querySelector('.carrinho-entrega > div');
carrinhoPagamento = document.querySelector('.carrinho-pagamento > div');

error = document.querySelector('.error')
error.style.color = "red";
error.style.textAlign = "center";


function ativaPagamento() {
  
  // Verificar se há um endereço selecionado
  for(i = 0; i < endereco.length; i++) {

    // Se sim, finaliza a aba de endereço e abre a de pagamento
    if(enderecoInput[i].checked) {

      // Verifica se há algum frete selecionado
      for(i2 = 0; i2 < freteInput.length; i2++) {
        
        if(freteInput[i2].checked) {
          carrinhoEndereco.classList.remove('ativo');
          carrinhoPagamento.classList.add('ativo');
          editarEndereco.classList.add('ativo');

        // Se não, exibe uma mensagem de erro
        } else {
          error.textContent = "Por favor, selecione um Frete";

          
        }
      }
      // Para o loop no primeiro 'enderecoInput' que esteja 'checked'. (Senão, se houver um input selecionado e este não é o ultimo, o loop passara nesse input e exibira a mensagem de erro 'Por favor, selecione um Endereço)
      break;

    } else {
      error.textContent = "Por favor, selecione um Endereço";
      error.style.color = "red";
      error.style.textAlign = "center";
    }
  }
}

// Editar endereço
const editarEndereco = document.querySelector('.carrinho-entrega .editar-dados')

editarDados = editarEndereco.addEventListener('click', function() {
  error.textContent = "";
  editarEndereco.classList.remove('ativo');
  carrinhoEndereco.classList.toggle('ativo');
})
