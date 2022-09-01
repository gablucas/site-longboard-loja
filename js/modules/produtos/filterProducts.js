const botoes = document.querySelectorAll('.filtro button');

export default function filterProducts() {
  
/** FILTRAR OS PRODUTOS POR SUAS CARACTERISTICAS */
botoes.forEach((botao) => {
  botao.addEventListener('click', filtroProdutos)
})

function filtroProdutos(event) {
  const produtos = document.querySelectorAll('.produtos li');
  const botaoSelecionado = event.currentTarget;
  const botaoID = botaoSelecionado.getAttribute('id');

  // Selecionar botão
  botoes.forEach((botao) => {
    if(botao.classList.contains('selecionado')) {
      botao.classList.remove('selecionado');

    } else if(botaoSelecionado === botao) {
      botaoSelecionado.classList.add('selecionado');
    }
  })

  // Filtrar produtos
  produtos.forEach((produto) => {

    if(produto.classList.contains(botaoID)) {
      produto.classList.add('ativo');
      
    } else if(!botaoSelecionado.classList.contains('selecionado')) {
      produto.classList.add('ativo');

    } else {
      produto.classList.remove('ativo');
    }
    
  })
}
}