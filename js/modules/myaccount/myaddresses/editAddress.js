import { accounts } from "../../global/accounts.js";
import buscarEndereco from "../../register/buscarEndereco.js";

const form = document.querySelector('[data-editaddress="form"]');
const button = document.querySelector('[data-editaddress="save"]');
const userAddresses = accounts.loggedUser().enderecos;
const selectedAddress = userAddresses.find((address) => address.id === localStorage.editAddress);

// Adiciona um evento de editar endereço a cada endereço do usuario
// Salva o id do endereço selecionado para editar no localStorage
// Redireciona para página de edição de endereço
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

// Insere dentro dos dados do formulario o endereço escolhido para editar
export function insertAddressForm() {
  buscarEndereco(form);
  
  [...form].forEach((input) => {
    const property = input.name.replace(/\w+_/, "");
    input.value = selectedAddress[property];
  })
}

// Salva os dados alterados de endereço
export function saveAddressChange() {
  function saveAddress() {
    [...form].forEach((input) => {
      const property = input.name.replace(/\w+_/, "");
      selectedAddress[property] = input.value;
    })
    accounts.updateUser('enderecos', "add", userAddresses);
  }

  button.addEventListener('click', saveAddress)
}
