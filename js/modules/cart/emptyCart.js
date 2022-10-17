import cartStorage from "./cartStorage.js";
import { ElementHandler } from "../global/elementHandler.js";

const elementHandler = new ElementHandler();

export function emptyCart() {
  if(cartStorage().length) {
    elementHandler.hide('[data-cart="empty"]');
    elementHandler.show('[data-cart="filled"]');
  } else {
    elementHandler.hide('[data-cart="filled"]');
    elementHandler.show('[data-cart="empty"]');
  }
}
