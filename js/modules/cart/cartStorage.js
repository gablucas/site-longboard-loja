export function cartStorage(callback) {

  let cartProducts = [];

  if(!!localStorage.cart) {
    cartProducts = JSON.parse(localStorage.cart)
  } 

  if(callback) {
    callback(cartProducts)
  }

  return cartProducts;
}