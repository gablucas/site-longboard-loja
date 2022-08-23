export default function cartStorage(callback) {
  const cartProducts = JSON.parse(localStorage.cart)

  callback(cartProducts)
}