import errorDescription from "./errorDescription.js";

export default function verificaVazio(input) {
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