// Ativar o frete selecionado
const freteLabel = document.querySelectorAll('.carrinho-frete label')
const freteInput = document.querySelectorAll('.carrinho-frete input')

export default function activeShipping() {

  freteLabel.forEach((item) => {
  item.addEventListener('click', selecionarFrete)
})


function selecionarFrete(event) {

  freteLabel.forEach((item) => {
    item.classList.replace('font-2-xs-m','font-2-xs')
  })

  const freteSelecionado = event.currentTarget;
  freteSelecionado.previousElementSibling.checked = true;
  freteSelecionado.classList.replace('font-2-xs','font-2-xs-m',)
  }
}