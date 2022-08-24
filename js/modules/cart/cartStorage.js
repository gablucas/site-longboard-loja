export default function cartStorage(callback) {
  if(localStorage.cart) {
    const cartProducts = JSON.parse(localStorage.cart)
    callback(cartProducts)
  }
}