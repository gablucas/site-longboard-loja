import { accounts } from "../../global/accounts.js";
import { idGenetaror } from "../../global/idGenerator.js";
import { Validator } from "../../global/validator.js";
import { buscarEndereco } from "../../register/buscarEndereco.js";

const registerContainer = document.querySelector('[data-formaddress="register-container-active"]');
const sucessfullContainer = document.querySelector('[data-formaddress="register-sucessfull"]');
const ulNewAddress = document.querySelector('[data-formaddress="user-data"]');

const form = document.querySelector('[data-formaddress="form"]');
const formButton = document.querySelector('[data-formaddress="register"]');
const validate = new Validator(form);

export function registerAddress() {
  buscarEndereco(form)

  formButton.addEventListener('click', register);

  function register() {
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
    
    // Adicionar o novo endereço na conta do usuario
    if(validate.isValid()) {
      const novoEndereco = {main: false, id: idGenetaror('address', accounts.loggedUser().enderecos)};
      
      [...form].forEach((input) => {
        novoEndereco[input.name.replace(/\w+_(\w+)/, "$1")] = input.value;
      })

      accounts.updateUser('enderecos', 'push', novoEndereco);

      ulNewAddress.innerHTML = `
      <li>Identificação: <span class="font-2-xs">${novoEndereco.identificacao}</span></li>
      <li>CEP: <span class="font-2-xs">${novoEndereco.cep}</span></li>
      <li>Rua: <span class="font-2-xs">${novoEndereco.rua}</span></li>
      <li>Número: <span class="font-2-xs">${novoEndereco.numero}</span></li>
      <li>Cidade: <span class="font-2-xs">${novoEndereco.cidade}</span></li>
      <li>Bairro: <span class="font-2-xs">${novoEndereco.bairro}</span></li>
      <li>Estado: <span class="font-2-xs">${novoEndereco.estado}</span></li>
      <li>Complemento: <span class="font-2-xs">${novoEndereco.complemento}</span></li>`;

      registerContainer.setAttribute('data-formaddress', 'register-container');
      sucessfullContainer.setAttribute('data-formaddress', 'register-sucessfull-active');
    }
  }
}