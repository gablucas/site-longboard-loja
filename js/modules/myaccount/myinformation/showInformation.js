import { accounts } from "../../global/accounts.js";
import { ElementHandler } from "../../global/elementHandler.js";

const personalData = document.querySelectorAll('[data-myinfo^="personal"]');
const addressData = document.querySelectorAll('[data-myinfo^="address"]');
const orderData = document.querySelectorAll('[data-myinfo^="last-order"]');
const elementHandler = new ElementHandler();

export function showInformation() {
  
    /** DADOS PESSOAIS */
    [...personalData].forEach((data) => {
      
      // Utilizado regex para separar as palavras separadas com _ e pegar a segunda palavra
      const property = data.getAttribute('data-myinfo').replace(/\w+-(\w+)/, '$1')
      data.innerText = accounts.loggedUser()[property];
    });
  
    /** ENDEREÇO */
    [...addressData].forEach((data) => {
  
      // Utilizado regex para separar as palavras separadas com _ e pegar a terceira palavra
      const property = data.getAttribute('data-myinfo').replace(/\w+-(\w+)/, '$1')
      const mainAddress = accounts.loggedUser().enderecos.find((address) => address.main === true);
      data.innerText = mainAddress[property];
    });
  
    /** ULTIMO PEDIDO */
    if (accounts.loggedUser().pedidos.length) {
      [...orderData].forEach((data) => {
        const property = data.getAttribute('data-myinfo').replace(/\w+-(\w+)/, '$1');
        const lastOrder = accounts.loggedUser().pedidos[0][0];
        data.innerText = lastOrder[property];
      })

      elementHandler.hide('.last-order-empty');
      elementHandler.show('.last-order-info');
    }
}

export { personalData }

