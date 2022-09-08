import errorDescription from "./errorDescription.js";

export function onlyCharacters(input) {

  let error = false;
    if(input.match(/\D+/g) === null || input.match(/\D+/g)[0] !== input) {
      error =  true;
    }

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