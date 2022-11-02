import { ElementHandler } from "../global/elementHandler.js";
const elementHandler =  new ElementHandler();

const editShippingButton = document.querySelector('[data-cart="edit-shipping"]');

export function editShipping() {

  editShippingButton.addEventListener('click', reativarEndereco)

  function reativarEndereco() {
    elementHandler.add('[data-cart="edit-shipping"]', 'data-hide');
    elementHandler.remove('[data-cart="shipping-container"]', 'data-hide');
  }
}