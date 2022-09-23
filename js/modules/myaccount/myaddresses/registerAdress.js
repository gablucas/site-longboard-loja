import { accounts } from "../../global/accounts.js";
import { Validator } from "../../global/validator.js";
import buscarEndereco from "../../register/buscarEndereco.js";

const form = document.querySelector('[data-newaddress="form"]');
const formButton = document.querySelector('[data-newaddress="register"]');
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
      const novoEndereco = {main: false,};

      [...form].forEach((input) => {
        novoEndereco[input.name.replace(/\w+_(\w+)/, "$1")] = input.value;
      })

      accounts.updateUser('endereco', 'push', novoEndereco);
    }
  }
}