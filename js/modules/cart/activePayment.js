export const cartShipping = document.querySelector('[data-cart="shipping-container"]');
const editShipping = document.querySelector('[data-cart="edit-shipping"]');
const cartPayment = document.querySelector('[data-cart="payment-container"]');

export default function activePayment() {
  cartShipping.classList.remove('ativo');
  editShipping.classList.add('ativo');
  cartPayment.classList.add('ativo');
}