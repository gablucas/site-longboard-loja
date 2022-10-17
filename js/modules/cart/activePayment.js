import { ElementHandler } from '../global/elementHandler.js';

const elementHandler = new ElementHandler();

export default function activePayment() {
  elementHandler.hide('[data-cart="shipping-container"]');
  elementHandler.show('[data-cart="edit-shipping"]');
  elementHandler.show('[data-cart="payment-container"]');
}