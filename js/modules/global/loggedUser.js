import { accounts } from "./accounts.js";

const loginMenu = document.querySelector('[data-menu^="login"]');
const loginUser = document.querySelector('[data-menu^="user"]');

const shipping = document.querySelector('[data-cart^="shipping"]')
const payment = document.querySelector('[data-cart^="payment"]')
const login = document.querySelector('[data-cart^="login"]')

// Verifica no localStorage se há um usuario logado
export default function loggedUser() {
  if(accounts.loggedUser()) {
    
    // Ativar o menu do usuario
    loginMenu.setAttribute("data-menu", "login")
    loginUser.setAttribute("data-menu", "user-active")
    loginUser.firstElementChild.innerText = accounts.loggedUser().nome;


    // Ativar a compra do produto no carrinho
    if(document.location.pathname.includes("carrinho")) {
      shipping.setAttribute("data-cart", "shipping-active")
      payment.setAttribute("data-cart", "payment-active")
      login.setAttribute("data-cart", "login")
    }
  }
}
