import cartStorage from "../cart/cartStorage.js";

const quantityItensCart = document.querySelector('[data-cart="quantity"]');

export default function showQuantityItensCart() {
  cartStorage((products) => {
    quantityItensCart.innerText = products.length;
  })
  
}