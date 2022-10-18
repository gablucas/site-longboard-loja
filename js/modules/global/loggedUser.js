import { accounts } from "./accounts.js";
import { ElementHandler } from "./elementHandler.js";

const elementHandler = new ElementHandler();

const loginMenu = document.querySelector('[data-menu^="login"]');
const loginUser = document.querySelector('[data-menu^="user"]');

// Verifica no localStorage se há um usuario logado
export default function loggedUser() {
  if(accounts.loggedUser()) {
    
    // Ativar o menu do usuario
    elementHandler.hide('[data-menu="login"]');
    elementHandler.show('[data-menu="user"]');
    loginUser.firstElementChild.innerText = accounts.loggedUser().nome;


    // Ativar a compra do produto no carrinho
    if(document.location.pathname.includes("carrinho")) {
      elementHandler.hide('[data-cart="login"]');
      elementHandler.show('[data-cart="shipping"]');
      elementHandler.show('[data-cart="payment"]');
    }
  }
}
