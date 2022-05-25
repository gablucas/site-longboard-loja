// Trocar imagens com clique
imagens = document.querySelectorAll('.shape-imagem div img');
imagemPrincipal = document.querySelector('.shape-imagem img')

function trocaImagem(evento) {
  imagemClicada = evento.currentTarget;                     // Pega o elemento clicado
  srcImagemClicada = imagemClicada.getAttribute('src')      // Pega o src do elemento clicado
  srcImagemPrincipal = imagemPrincipal.getAttribute('src')  // Pega o src do elemento principal
  trocarImagem = srcImagemPrincipal;                        // Armazena o src do elemento principal para trocar depois


  // Faz a troca das imagens
  imagemPrincipal.setAttribute('src', srcImagemClicada);
  imagemClicada.setAttribute('src', trocarImagem);
}

function cliqueImagem (itensImagens) {
  itensImagens.addEventListener('click', trocaImagem);
}

// Validar o formulario para o carrinho
formProduto = document.querySelector(".shape-compra form");
quantidadeProduto = document.querySelector('.shape-compra form input');
listaFlex = document.querySelector('.shape-compra form select')
error = document.querySelector('.error')


formProduto.addEventListener('submit', (e) => {

  if(listaFlex.selectedIndex === 0) {
    e.preventDefault();
    error.textContent = "Selecione um flex de shape";

  } else if(quantidadeProduto.value <= 0) {
    e.preventDefault();
    error.textContent = "Selecione no mínimo 1 produto";

  } else if(quantidadeProduto.value >= 10) {
    e.preventDefault();
    error.textContent = "Selecione no máximo 4 produtos";
  }
})