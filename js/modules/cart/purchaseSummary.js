import { fetchProducts } from "../global/fetchProducts.js";
import { cartStorage } from "./cartStorage.js";
import { emptyCart} from "./emptyCart.js";
import { shippingValue } from "./selectShipping.js";

const subtotal = document.querySelector('[data-cart="subtotal"]');
const frete = document.querySelector('[data-cart="value-shipping"]');
const total = document.querySelector('[data-cart="total"]');


export function purchaseSummary() {
  fetchProducts((fetchProducts) => {

    if(!!cartStorage().length) {
      
      const cartProducts = JSON.parse(localStorage.cart)
      const price = cartProducts.map((itemCart) => {
        return fetchProducts[itemCart.type].find(product => product.id === itemCart.id).price * itemCart.quantity})
        .reduce((acc, actual) => {return acc + actual})

      subtotal.innerText = `R$ ${price},00`;
      frete.innerText = `R$ ${shippingValue},00`;
      total.innerText = `R$ ${price + shippingValue},00`;

    } else {
      emptyCart();
    }
  });

}