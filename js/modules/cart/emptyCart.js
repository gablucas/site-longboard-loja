import { cartStorage } from "./cartStorage.js";
import { ElementHandler } from "../global/elementHandler.js";

const elementHandler = new ElementHandler();

export function emptyCart() {
  if(cartStorage().length) {
    elementHandler.add('[data-cart="empty"]', 'data-hide');
    elementHandler.remove('[data-cart="filled"]', 'data-hide');
  } else {
    elementHandler.remove('[data-cart="empty"]' , 'data-hide');
    elementHandler.add('[data-cart="filled"]', 'data-hide');
  }
}
