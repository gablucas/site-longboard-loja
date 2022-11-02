import { cartStorage } from "../cart/cartStorage.js";

const quantityItensCart = document.querySelector('[data-cart="quantity"]');

export function showQuantityItensCart() {
  cartStorage((products) => {
    const quantityPerProduct = products.map((item) => +item.quantity)
    const totalQuantityProducts = quantityPerProduct.reduce((anterior, atual) => anterior + atual, 0)

    quantityItensCart.innerText = totalQuantityProducts;
  })
  
}