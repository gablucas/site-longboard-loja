import validateProduct from "./validateProduct.js";
import campoVazio from "../global/campoVazio.js";
import showQuantityItensCart from "../global/showQuantityItensCart.js";
import cartStorage from "../cart/cartStorage.js";

const form = document.querySelector('[data-cart="form"]');
const buyItem = document.querySelector('[data-cart="buy"]');
const addCart = document.querySelector('[data-cart="addCart"]');

export default function addItemCart() {
  [buyItem, addCart].forEach((btn) => {
    btn.addEventListener('click', saveItem)
  })

  function saveItem({currentTarget}) {

    if(!validateProduct(form) && !campoVazio(form)) {
      const dataProduct = document.querySelector('[data-product="id"]').getAttribute('id').split('-');
  
      
      // Armazena o produco escolhido em um objeto
      const product = {type: dataProduct[0], id: dataProduct[1], flex: form.flex.value, quantity: form.quantity.value};
      
      // Insere o objeto do produto numa array e depois na localStorage
      cartStorage((cart) => {

        // Verifica se o produto comprado ja existe no carrinho
        const indexRP = cart.findIndex((item) => {
          if(item.id === product.id && item.flex === product.flex){
            return item;
          }
        })
        
        // Se o produto ja existir, ele soma a quantidade
        // Se não, coloca o objeto dentro do array
        if(indexRP >= 0) {
          cart[indexRP].quantity = (+cart[indexRP].quantity) + (+product.quantity);
        } else {
          cart.push(product)
        }
        localStorage.cart = JSON.stringify(cart);
      })
      
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
}