import { accounts } from "../global/accounts.js";

export function showAddressesCart() {
  const addressesContainer = document.querySelector('[data-cart="addresses"]');
  
  const user = accounts.loggedUser().enderecos;
  
  user.forEach((address) => {
    console.log(address)
    const div = document.createElement('div');
    div.setAttribute("data-cart","address-item");
    div.classList.add('cart-address-item', 'font-2-xxs', 'cor-12');

    div.innerHTML = `
    <input type="radio" name="endereco" value="${address.identificacao}">
    <label for="${address.identificacao}" class="font-2-xs-m-u cor-10">${address.identificacao}</label>
    <span>${address.rua}, ${address.numero}</span>
    <span>${address.bairro} - ${address.cidade} - ${address.estado}</span>
    <span>${address.complemento}</span>`

    addressesContainer.appendChild(div);
  })
}