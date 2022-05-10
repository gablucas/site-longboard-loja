// Filtrar os shapes pela modalidade
filtro = document.querySelectorAll('.produtos-filtro .filtro button')

shapes = document.querySelectorAll('.produtos-shapes li')

function executarFiltro(event) {
  elemento = event.currentTarget;
  classFiltro = elemento.getAttribute('class')
  
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

filtro.forEach(cliqueFiltro);

