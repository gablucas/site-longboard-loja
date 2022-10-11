import { accounts } from "../../global/accounts.js";
import fetchProducts from "../../global/fetchProducts.js";
import { verifyLocation } from "../../global/verifyLocation.js";

const personalData = document.querySelectorAll('[data-myinfo^="personal"]');
const addressData = document.querySelectorAll('[data-myinfo^="address"]');
const orderData = document.querySelectorAll('[data-myinfo^="last-order"]');

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
    [...orderData].forEach((data) => {
      const property = data.getAttribute('data-myinfo').replace(/\w+-(\w+)/, '$1');
      const lastOrder = accounts.loggedUser().pedidos[0][0];
      data.innerText = lastOrder[property];
    })
}

export { personalData }

