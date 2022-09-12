import errorDescription from "./errorDescription.js";
import { showError } from "./showError.js";

export function onlyCharacters(...inputs) {
  let error = false;

  inputs.forEach((input) => {

    if ((/\d+/g).test(input.value)) {
      showError(input, "Apenas letras")
      error =  true;
    } else {
      showError(input, "removeError")
    }
  })

  return error;
}

export function onlyNumbers(...inputs) {
  let error = false;

  inputs.forEach((input) => {

    if ((/\D+/g).test(input.value)) {
      showError(input, "Apenas números")
      error =  true;
    } else {
      showError(input, "removeError")
    }
  })

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

// export function date(input) {
//   let error = false
//   showError(input, "removeError");

//   if (input.value.length !== 8) {
//     showError(input, "Digite a data no formato XX XX XXXX")
//     error =  true;

//   } else if (onlyNumbers(input)){
//     showError(input, "Somente números")
//     error =  true;

//   } else {
//     showError(input, "removeError")
//   }

//   return error;
// }

export function cpf(input) {
  let error = false

  if(input.value) {
    if (onlyNumbers(input)){
      showError(input, "Somente números")
      error =  true;
  
    } else if (input.value.length !== 11) {
        showError(input, "Digite os 11 digitos do CPF")
        error =  true;
  
    } else {
      showError(input, "removeError")
    }
  }
  return error;
}