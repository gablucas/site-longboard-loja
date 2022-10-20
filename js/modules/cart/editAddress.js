import { ElementHandler } from "../global/elementHandler.js";
const elementHandler =  new ElementHandler();

const editShippingButton = document.querySelector('[data-cart="edit-shipping"]');

export default function editShipping() {

  editShippingButton.addEventListener('click', reativarEndereco)

  function reativarEndereco() {
    elementHandler.hide('[data-cart="edit-shipping"]');
    elementHandler.show('[data-cart="shipping-container"]');
  }
}