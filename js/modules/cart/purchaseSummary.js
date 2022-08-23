import fetchProducts from "../global/fetchProducts.js";

const subtotal = document.querySelector('[data-cart="subtotal"]');

export default function purchaseSummary() {
  fetchProducts((fetchProducts) => {
    const cartProducts = JSON.parse(localStorage.cart)

    const price = cartProducts.map((itemCart) => {
      const productValue = fetchProducts[itemCart.type].find(product => product.id === itemCart.id).price;return productValue * itemCart.quantity
    }).reduce((acc, actual) => {
      return acc + actual
    })
    
    subtotal.innerText = `R$ ${price},00`;

  });

}