export default function initHomeFilter() {
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

  // Selecionado o item
  const inputSelecionado =  document.querySelector('.home-shapes-modalidades input[id=dancingfreestyleHome]').checked = true;
}