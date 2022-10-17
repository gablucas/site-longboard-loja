import { ElementHandler } from "../global/elementHandler.js";
const elementHandler =  new ElementHandler();

const cartShipping = document.querySelector('[data-cart^="shipping-container"]');
const editShippingButton = document.querySelector('[data-cart^="edit-shipping"]');

export default function editShipping() {

  editShippingButton.addEventListener('click', reativarEndereco)

  function reativarEndereco() {
    elementHandler.show('[data-cart="shipping-container"]');
    elementHandler.show('[data-cart="edit-shipping"]');
  }
}