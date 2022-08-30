import activePayment from "./activePayment.js";
import finalizePayment from "./finalizePayment.js";

// Botões
const cartButtons = document.querySelectorAll('[data-cart="button"]');
const [addressButton, paymentButton] = cartButtons;

// Inputs
const cartAddresses = document.querySelectorAll('[data-cart="addresses"] div input');
const cartShippings = document.querySelectorAll('[data-cart="shippings"] input');
const cartPayments = document.querySelectorAll('[data-cart="payments"] input');

// Error
const cartError = document.querySelectorAll('[data-cart="error"]');
const [addressError, paymentError] = cartError;


export default function validateCart() {

  // Validar endereço e entrega
  addressButton.addEventListener('click', validateAddress)
  function validateAddress() {
    if([...cartAddresses].every((address) => address.checked === false)) {
      addressError.innerText = "Selecione um endereço";
    } else if([...cartShippings].every((shipping) => shipping.checked === false)) {
      addressError.innerText = "Selecione um frete";
    } else {
      addressError.innerText = "";
      activePayment();
    }
  }

  // Validar pagamento
  paymentButton.addEventListener('click', validatePayment)
  function validatePayment() {
    if([...cartPayments].every((payment) => payment.checked === false)) {
      paymentError.innerText = "Selecione uma forma de pagamento";
    } else {
      paymentError.innerText = ""
      finalizePayment();
    }
  }
}
