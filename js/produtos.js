/** INDICA O ITEM ATUAL SELECIONADO DO MENU SECUNDARIO */
menuSecundario = document.querySelectorAll('.menu-secundario a')

function ativarMenuSecundario(link) {
  href = link.href;
  url = location.href;

  if(url.includes(href)) {
    link.classList.add('ativo')
  }
}

menuSecundario.forEach(ativarMenuSecundario)


/** FILTRAR OS PRODUTOS POR SUAS CARACTERISTICAS */
const botoes = document.querySelectorAll('.filtro button');
const produtos = document.querySelectorAll('.produtos li');


/** Nova Forma */
botoes.forEach((botao) => {
  botao.addEventListener('click', filtroProdutos)
})

function filtroProdutos(event) {
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






/** Variaveis Antigas */
// botaoFiltro = document.querySelectorAll('.produtos-filtro .filtro button')
// produtos = document.querySelectorAll('.produtos li')

/** Forma antiga 2 */
// function executarFiltro(event) {
//   // Essa variavel é declarada aqui, pois se ela esta abaixo do forEach do botaoFiltro, a classe 'selecionado' é adicionado a essa variavel, e quando chegar no forEach dos Produtos na segunda condição, vai dar false, pois o produto não tem a classe 'selecionado'. Tambem na primeira condição do forEach dos produtos, ira exibir caso o botao seja deselecionado, porem nessa condicao, verifica se o botao tem a classe selecionado (Isso porque, a classe 'selecionado' é adicionado nessa variavel somente apos no segundo clique, pois essa variavel esta declarada acima do codigo que atribui esse valor a ela)
//   botaoClasse = event.currentTarget.getAttribute('class');

//   // Pinta o botão selecionado
//   botaoFiltro.forEach((botao) => {
//     if(botao.classList.contains('selecionado')) {
//       botao.classList.remove('selecionado');

//     } else if(botao === event.currentTarget) {
//       botao.classList.add('selecionado');
//     }
//   })
  
//   // Filtra e exibe os itens
//   produtos.forEach((produto) => {
//     // 
//     if(botaoClasse.includes('selecionado')) {
//       produto.classList.add('ativo');

//     } else if(produto.classList.contains(botaoClasse)) {
//       produto.classList.add('ativo');
    
//     } else {
//       produto.classList.remove('ativo');
//     }
//   })
// }

// botaoFiltro.forEach((botao) => {
//   botao.addEventListener('click', executarFiltro)
// })

/** Forma antiga */
// function executarFiltro(event) {
//   elemento = event.currentTarget; // Armazena o elemento clicado na variavel
//   classFiltro = elemento.getAttribute('class'); // Armazena a(s) classe(s) do elemento clicado na variavel


//   // Pintar o botão quando clicado
//   for (let i = 0; i < botaoFiltro.length; i++) {

//     if(botaoFiltro[i].classList.contains('selecionado')) {
//       botaoFiltro[i].classList.remove('selecionado')

//     } else if(botaoFiltro[i] === elemento) {
//         botaoFiltro[i].classList.add('selecionado')
//     }
//   }

//   // Mostrar os shapes do filtro selecionado
//   for (let i = 0; i < shapes.length ; i++) {

//     // Se o botão for desselecionado, mostra todos os shapes
//     if(elemento.classList.contains('selecionado') === false) {
//       shapes[i].classList.add('ativo');
      
//     // Filtra e exibe os shapes de acordo com o filtro selecionado
//     } else if(shapes[i].classList.contains(classFiltro)) {
//       shapes[i].classList.add('ativo');
      
//     // Remove todos os shapes que não estão de acordo com o filtro
//     } else {
//       shapes[i].classList.remove('ativo');
//     }
//   }
// }

// function cliqueFiltro(clique) {
//   clique.addEventListener('click', executarFiltro)
// }

// botaoFiltro.forEach(cliqueFiltro);

