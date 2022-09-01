import cartStorage from "./cartStorage.js";
const empty = document.querySelector('[data-cart^="empty"]');
const filled = document.querySelector('[data-cart^="filled"]');


export function emptyCart() {
  if(!!cartStorage().length) {
    empty.setAttribute('data-cart', 'empty');
    filled.setAttribute('data-cart', 'filled-active');
  } else {
    empty.setAttribute('data-cart', 'empty-active');
    filled.setAttribute('data-cart', 'filled');
  }
}
