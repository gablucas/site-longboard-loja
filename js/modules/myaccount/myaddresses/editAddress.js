import { accounts } from "../../global/accounts.js";
import { Validator } from "../../global/validator.js";
import buscarEndereco from "../../register/buscarEndereco.js";

const form = document.querySelector('[data-formaddress="form"]');
const validate = new Validator(form);
const button = document.querySelector('[data-formaddress="save"]');
const userAddresses = accounts.loggedUser().enderecos;
const selectedAddress = userAddresses.find((address) => address.id === localStorage.editAddress);
const ulChangeAddress = document.querySelector('[data-formaddress="user-data"]');
const registerContainer = document.querySelector('[data-formaddress="register-container-active"]');
const sucessfullContainer = document.querySelector('[data-formaddress="register-sucessfull"]');

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
    validate.emptyInputs(
      'endereco_identificacao', 
      'endereco_cep', 
      'endereco_rua', 
      'endereco_numero', 
      'endereco_cidade', 
      'endereco_bairro', 
      'endereco_estado');
  
    validate.onlyCharacters(
      'endereco_identificacao');

    if(validate.isValid()) {
      [...form].forEach((input) => {
        const property = input.name.replace(/\w+_/, "");
        selectedAddress[property] = input.value;
      })
  
      accounts.updateUser('enderecos', "add", userAddresses);
  
      ulChangeAddress.innerHTML = `
        <li>Identificação: <span class="font-2-xs">${selectedAddress.identificacao}</span></li>
        <li>CEP: <span class="font-2-xs">${selectedAddress.cep}</span></li>
        <li>Rua: <span class="font-2-xs">${selectedAddress.rua}</span></li>
        <li>Número: <span class="font-2-xs">${selectedAddress.numero}</span></li>
        <li>Cidade: <span class="font-2-xs">${selectedAddress.cidade}</span></li>
        <li>Bairro: <span class="font-2-xs">${selectedAddress.bairro}</span></li>
        <li>Estado: <span class="font-2-xs">${selectedAddress.estado}</span></li>
        <li>Complemento: <span class="font-2-xs">${selectedAddress.complemento}</span></li>`;
  
      registerContainer.setAttribute('data-formaddress', 'register-container');
      sucessfullContainer.setAttribute('data-formaddress', 'register-sucessfull-active');
    }
  }
  button.addEventListener('click', saveAddress)
}
