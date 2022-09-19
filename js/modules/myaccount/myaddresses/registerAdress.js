import buscarEndereco from "../../register/buscarEndereco.js";
import * as validator from "../../global/validator.js";

const form = document.querySelector('[data-newaddress="form"]');
const formButton = document.querySelector('[data-newaddress="register"]');

export function registerAddress() {
  buscarEndereco(form)

  formButton.addEventListener('click', register);

  function register() {
    validator.emptyInputs(form)
  }
}