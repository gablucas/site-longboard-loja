/** EXIBIR OS SHAPES NA HOME DE ACORDO COM A MODALIDADE SELECIONADA */
const modalidades = document.querySelectorAll('.home-shapes-modalidades input')
const shapes = document.querySelectorAll('.home-produtos-shapes li');

// Nova forma
function selecionarShapes(event) {
  const modalidadeID = event.currentTarget.getAttribute('id');
  
  shapes.forEach((item) => {
    if(item.classList.contains(modalidadeID)) {
      item.classList.add('ativo');
    } else {
      item.classList.remove('ativo');
    }
  })
}

modalidades.forEach((modalidade) => {
  modalidade.addEventListener('click', selecionarShapes)
})

// Forma antiga
// function selecionarShapes(event) {
//   const modalidadeSelecionada = event.currentTarget;
//   const modalidadeId = modalidadeSelecionada.getAttribute('id');

//   for(let index = 0; index < shapes.length; index++){
    
//     // Adiciona os shapes de acordo com a modalidade selecionada
//     if(shapes[index].classList.contains(modalidadeId)) {
//       shapes[index].classList.add('ativo')
//     } else {
//       shapes[index].classList.remove('ativo');
//     }
//   }
// }

// function cliqueModalidade(elemento) {
//   elemento.addEventListener('click', selecionarShapes)
// }

// modalidades.forEach(cliqueModalidade);


/** INICIAR COM UM INPUT SELECIONADO */

// FORMA NOVA
  const inputSelecionado =  document.querySelector('.home-shapes-modalidades input[id=dancingfreestyleHome]').checked = true;
// FORMA ANTIGA
// const inputSelecionado =  document.querySelector('.home-shapes-modalidades input[id=dancingfreestyle]');

// inputSelecionado.checked = true;

