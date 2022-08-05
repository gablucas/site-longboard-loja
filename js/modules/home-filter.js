export default function initHomeFilter() {
/** EXIBIR OS SHAPES NA HOME DE ACORDO COM A MODALIDADE SELECIONADA */
const modalidades = document.querySelectorAll('.home-shapes-modalidades button')
const shapes = document.querySelectorAll('.home-produtos-shapes li');

modalidades.forEach((modalidade) => {
  modalidade.addEventListener('click', selecionarShapes)
})

function selecionarShapes(e) {
  const modalidadeID = e.currentTarget.getAttribute('id');
  
  modalidades.forEach((btn) => {
    if(btn === e.currentTarget) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active')
    }
  })

  shapes.forEach((item) => {
    if(item.classList.contains(modalidadeID)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}
}