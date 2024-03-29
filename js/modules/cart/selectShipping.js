import { purchaseSummary } from "./purchaseSummary.js";

// Ativar o frete selecionado
const freteLabel = document.querySelectorAll('.cart-shipping-rates label');
export let shippingValue = 0;

export function selectShipping() {

  freteLabel.forEach((item) => {
  item.addEventListener('click', selecionarFrete)
})

function selecionarFrete(event) {
  
  shippingValue = Number(event.target.previousElementSibling.value);
  purchaseSummary();

  freteLabel.forEach((item) => {
    item.classList.replace('font-2-xs-m','font-2-xs')
  })

  const freteSelecionado = event.currentTarget;
  freteSelecionado.previousElementSibling.checked = true;
  freteSelecionado.classList.replace('font-2-xs','font-2-xs-m',)
  }
}