// Filtrar os shapes pela modalidade
botaoFiltro = document.querySelectorAll('.produtos-filtro .filtro button')
shapes = document.querySelectorAll('.produtos-shapes li')

function executarFiltro(event) {
  elemento = event.currentTarget;
  classFiltro = elemento.getAttribute('class')

  // Pintar o botão quando clicado
  for (let i = 0; i < botaoFiltro.length; i++) {

    if(botaoFiltro[i] === elemento) {
      botaoFiltro[i].style.color = "#FFFFFF";
      botaoFiltro[i].style.background = "#7D3F92";
    }
  }

  // Buscar um jeito de fazer com que o botao anterior que foi selecinado
  // Volte para sua cor inicial

  // Mostrar os shapes do filtro selecionado
  for (let i = 0; i < shapes.length ; i++) {

    if(shapes[i].classList.contains(classFiltro)) {
      shapes[i].classList.add('ativo') 

    } else {
        shapes[i].classList.remove('ativo')
    }
  }
}

function cliqueFiltro(clique) {
clique.addEventListener('click', executarFiltro)
}

botaoFiltro.forEach(cliqueFiltro);

