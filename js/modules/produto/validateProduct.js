import errorDescription from "../global/errorDescription.js";

export default function validateProduct(input) {
let error = false;

if(input.quantity.value <= 0) {
  errorDescription(input.quantity, "Mínimo 1 produto");
  error = true;
}else if(input.quantity.value > 4) {
  errorDescription(input.quantity, "Máximo 4 produtos");
  error = true
  console.log('teste')
}

return error;
}
