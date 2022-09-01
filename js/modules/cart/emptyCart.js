const empty = document.querySelector('[data-cart="empty"]');
const filled = document.querySelector('[data-cart="filled"]');


// Trocar localStorage.cart para outra condição que funcione
export function emptyCart() {
  if(!!localStorage.cart) {
    empty.classList.remove('active');
    filled.classList.add('active');
  } else {
    empty.classList.add('active');
    filled.classList.remove('active');
  }
}
