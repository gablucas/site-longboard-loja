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

imagens.forEach(cliqueImagem);