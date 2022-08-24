export default function switchImage() {

// Trocar imagens com clique
const imagens = document.querySelectorAll('[data-product="images"] img');
const imagemPrincipal = document.querySelector('[data-product="main-image"]')

imagens.forEach((imagens) =>{
  imagens.addEventListener('click', switchProductImage);
})

function switchProductImage({currentTarget}) {
  const imagemClicada = currentTarget;                            // Pega o elemento clicado

  const srcImagemClicada = imagemClicada.getAttribute('src')      // Pega o src do elemento clicado
  const srcImagemPrincipal = imagemPrincipal.getAttribute('src')  // Pega o src do elemento principal

  // Faz a troca das imagens
  imagemPrincipal.setAttribute('src', srcImagemClicada);
  imagemClicada.setAttribute('src', srcImagemPrincipal);
}

}