import cartStorage from "./cartStorage.js";
import purchaseSummary from "./purchaseSummary.js";

export default function removeItem() {
  const btnRemoveItem = document.querySelectorAll('[data-cart="remove-item"]');

  btnRemoveItem.forEach((btn) => {
    btn.addEventListener('click', removeItemCart)
  })

  
  function removeItemCart({currentTarget}) {
    const itens = document.querySelectorAll('[data-cart="remove-item"]');
    const index = Array.from(itens).findIndex(item => item === currentTarget);
    
    cartStorage((product) => {
      product.splice(index, 1);
      localStorage.cart = JSON.stringify(product);
    });

    currentTarget.parentElement.remove();
    purchaseSummary();
  }
}