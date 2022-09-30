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
    const [image, name, price, date] = orderData
    const lastOrder = [...accounts.loggedUser().pedidos].slice(-1)[0];
    
    if(!!lastOrder) {
      fetchProducts((product) => {
        const getProduct = product[lastOrder.type].find((item) => item.id === lastOrder.id);
        image.setAttribute('src', `../${getProduct.images[0]}`);
        name.innerText = getProduct.name;
        price.innerText = `R$ ${getProduct.price},00`;
        date.innerText = lastOrder.orderdate;
      })
    }
}

export { personalData }
