import showQuantityItensCart from "../global/showQuantityItensCart.js";

const formtoCart = document.querySelector('[data-cart="formtoCart"]').elements;
const buyItem = document.querySelector('[data-cart="buy"]');
const addCart = document.querySelector('[data-cart="addCart"]');
let cartArray = [];

export default function addItemCart() {
  [buyItem, addCart].forEach((btn) => {
    btn.addEventListener('click', saveItem)
  })

  function saveItem({currentTarget}) {
    const dataProduct = document.querySelector('[data-product="id"]').getAttribute('id').split('-');

    if(localStorage.cart) {
      cartArray = JSON.parse(localStorage.cart);
    }
    
    const product = {type: dataProduct[0], id: dataProduct[1], flex: formtoCart.flex.value, quantity: formtoCart.quantidade.value};
    cartArray.push(product)
    localStorage.cart = JSON.stringify(cartArray);

    // Se o cliente clicar no botao de comprar
    // O codigo abaixo direciona para a pagina do carrinho
    if(currentTarget.getAttribute("data-cart") === "buy") {
      window.location.href = "../carrinho.html";
    }

    // Se o cliente clicar no botao de adicionar ao carrinho
    // O codigo abaixo atualiza o valor do inficador de itens do carrinho
    if(currentTarget.getAttribute("data-cart") === "addCart") {
      showQuantityItensCart();
    } 
  }
}