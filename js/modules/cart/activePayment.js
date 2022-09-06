const cartShipping = document.querySelector('[data-cart^="shipping-container"]');
const editShipping = document.querySelector('[data-cart^="edit-shipping"]');
const cartPayment = document.querySelector('[data-cart^="payment-container"]');

export default function activePayment() {
  cartShipping.setAttribute('data-cart','shipping-container');
  editShipping.setAttribute('data-cart', 'edit-shipping-active');
  cartPayment.setAttribute('data-cart', 'payment-container-active');
}