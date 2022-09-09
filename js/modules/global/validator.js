import errorDescription from "./errorDescription.js";
import { showError } from "./showError.js";

export function onlyCharacters(...inputs) {
  let error = false;

  inputs.forEach((input) => {
    // showError(input, "removeError")

    if ((/\d+/g).test(input.value)) {
      showError(input, "Apenas letras")
      error =  true;
    } else {
      showError(input, "removeError")
    }


  })

  return error;
}

export function onlyNumbers(input) {

  let error = false;
    if(input.match(/\d+/g) === null || input.match(/\D+/g)[0] !== input) {
      error =  true;
    }

  return error;
}

export function emptyInputs(input) {
  let error = false;
  
    Array.from(input).forEach((inp) => {
      if(!!inp.nextElementSibling) {
        if(!inp.value) {
          errorDescription(inp, "Campo vazio");
          error = true;
        } else {
          errorDescription(inp, "");
        }
      }
    });
    return error;
  }