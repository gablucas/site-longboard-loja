
// Exibir os shapes na home de acordo com a modalidade selecionada
const modalidades = document.querySelectorAll('.home-shapes-modalidades input')
const shapes = document.querySelectorAll('.home-produtos-shapes li');


function selecionarShapes(event) {
  const modalidadeSelecionada = event.currentTarget;
  const modalidadeId = modalidadeSelecionada.getAttribute('id');

  for(let index = 0; index < shapes.length; index++){
    
    // Remove os shapes da seleção anterior
    shapes[index].classList.remove('ativo');

    // Adiciona os shapes de acordo com a modalidade selecionada
    if(shapes[index].classList.contains(modalidadeId)) {
      shapes[index].classList.add('ativo')
    }
  }
}

function cliqueModalidade(elemento) {
  elemento.addEventListener('click', selecionarShapes)
}

modalidades.forEach(cliqueModalidade);

// Deixar um input inicial selecionado
const inputSelecionado =  document.querySelector('.home-shapes-modalidades input[id=dancingfreestyle]')

inputSelecionado.checked = true;
