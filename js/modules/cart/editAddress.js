import { cartShipping } from "./activePayment.js";
const editShippingButton = document.querySelector('[data-cart="edit-shipping"]');

export default function editShipping() {

  editShippingButton.addEventListener('click', reativarEndereco)

  function reativarEndereco() {
    cartShipping.classList.add('ativo');
    editShippingButton.classList.remove('ativo');
  }
}