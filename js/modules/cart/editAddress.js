const cartShipping = document.querySelector('[data-cart^="shipping-container"]');
const editShippingButton = document.querySelector('[data-cart^="edit-shipping"]');

export default function editShipping() {

  editShippingButton.addEventListener('click', reativarEndereco)

  function reativarEndereco() {
    cartShipping.setAttribute('data-cart', 'shipping-container-active');
    editShippingButton.setAttribute('data-cart', 'edit-shipping-active');
  }
}