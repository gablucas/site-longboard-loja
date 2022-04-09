
// Exibir os shapes na home de acordo com a modalidade selecionada
const modalidades = document.querySelectorAll('.shapes-modalidade input')
const shapes = document.querySelectorAll('.shapes-produtos li');

function selecionarShapes(event) {
  const modalidadeSelecionada = event.currentTarget;
  const modalidadeId = modalidadeSelecionada.getAttribute('id');

  // Remove os itens da lista
  for(let index = 0; index < shapes.length; index++){
    shapes[index].classList.remove('ativo')
  }

  // Adiciona os itens a lista
  for(let index = 0; index < shapes.length; index++){
    if(shapes[index].classList.contains(modalidadeId)) {
      shapes[index].classList.add('ativo')
    }
  }
}

//Adiciona um evento de clique a todos os inputs (Modalidades)
function cliqueModalidade(elemento) {
  elemento.addEventListener('click', selecionarShapes)
}

modalidades.forEach(cliqueModalidade);

// Deixar um input inicial selecionado

const inputSelecionado =  document.querySelector('.shapes-modalidade input[id=dancingfreestyle]')

inputSelecionado.checked = true;
