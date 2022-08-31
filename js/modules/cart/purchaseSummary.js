import fetchProducts from "../global/fetchProducts.js";

const subtotal = document.querySelector('[data-cart="subtotal"]');
const total = document.querySelector('[data-cart="total"]');

export default function purchaseSummary() {
  fetchProducts((fetchProducts) => {

    const cartProducts = JSON.parse(localStorage.cart)

    if(cartProducts.length) {
      const price = cartProducts.map((itemCart) => {
        return fetchProducts[itemCart.type].find(product => product.id === itemCart.id).price * itemCart.quantity})
        .reduce((acc, actual) => {return acc + actual})

      subtotal.innerText = `R$ ${price},00`;
      total.innerText = `R$ ${price + 30},00`;

    } else {
      subtotal.innerText = `R$ 0,00`;
      total.innerText = `R$ 0,00`;
    }
  });

}