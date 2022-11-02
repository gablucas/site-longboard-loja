import { accounts } from "./accounts.js";
import { verifyLocation } from './verifyLocation.js';
import { ElementHandler } from "./elementHandler.js";

const elementHandler = new ElementHandler();

const loginUser = document.querySelector('[data-menu="user"]');

// Verifica no localStorage se há um usuario logado
export function loggedUser() {
  if(accounts.loggedUser()) {
    
    // Ativar o menu do usuario
    elementHandler.add('[data-menu="login"]', 'data-hide');
    elementHandler.remove('[data-menu="user"]', 'data-hide');
    loginUser.firstElementChild.innerText = accounts.loggedUser().nome;

    // Ativar a compra do produto no carrinho
    if(verifyLocation("carrinho.html")) {
      elementHandler.add('[data-cart="login"]', 'data-hide');
      elementHandler.remove('[data-cart="shipping"]', 'data-hide');
      elementHandler.remove('[data-cart="payment"]', 'data-hide');
    }

  } else {

    // Desativa o menu do usuario
    elementHandler.add('[data-menu="user"]', 'data-hide');
    elementHandler.remove('[data-menu="login"]', 'data-hide');
    loginUser.firstElementChild.innerText = "";
    
    // Desativa a compra do produto no carrinho
    if(verifyLocation("carrinho.html")) {
      elementHandler.add('[data-cart="shipping"]', 'data-hide');
      elementHandler.add('[data-cart="payment"]', 'data-hide');
      elementHandler.remove('[data-cart="login"]', 'data-hide');
    }
  }
}
