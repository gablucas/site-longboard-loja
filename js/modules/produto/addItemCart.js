const formtoCart = document.querySelector('[data-cart="formtoCart"]').elements;
const addtoCart = document.querySelector('[data-cart="addtoCart"]');
let cartArray = [];

export default function addItemCart() {

  addtoCart.addEventListener('click', saveItem)

  function saveItem() {
    const dataProduct = document.querySelector('[data-product="id"]').getAttribute('id').split('-');

    if(localStorage.cart) {
      cartArray = JSON.parse(localStorage.cart);
    }
    
    const product = {type: dataProduct[0], id: dataProduct[1], flex: formtoCart.flex.value, quantity: formtoCart.quantidade.value};
    cartArray.push(product)
    localStorage.cart = JSON.stringify(cartArray);

    window.location.href = "../carrinho.html";
  }
}