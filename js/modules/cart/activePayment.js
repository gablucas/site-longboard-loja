import { ElementHandler } from '../global/elementHandler.js';

const elementHandler = new ElementHandler();

export default function activePayment() {
  elementHandler.add('[data-cart="shipping-container"]', 'data-hide');
  elementHandler.add('[data-cart="edit-shipping"]', 'data-show');
  elementHandler.add('[data-cart="payment-container"]', 'data-show');
}