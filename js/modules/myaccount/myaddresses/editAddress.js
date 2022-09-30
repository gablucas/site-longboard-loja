import { accounts } from "../../global/accounts.js";
import buscarEndereco from "../../register/buscarEndereco.js";

export function editAddress() {
  const addresses = document.querySelectorAll('[data-myaddresses="edit-active"]');

  function toPage({ currentTarget }) {
    localStorage.editAddress = currentTarget.parentElement.getAttribute('id');
    window.location.href ='my-addresses/edit-address.html';
  }

  addresses.forEach((address) => {
    address.addEventListener('click', toPage)
  })
}

export function saveAddressChange() {
  const form = document.querySelector('[data-newaddress="form"]');
  buscarEndereco(form);
  
  const userAddresses = accounts.loggedUser().enderecos;
  const selectedAddress = userAddresses.find((address) => address.id === localStorage.editAddress);

  [...form].forEach((input) => {
    const property = input.name.replace(/\w+_/, "");
    input.value = selectedAddress[property];
  })

}