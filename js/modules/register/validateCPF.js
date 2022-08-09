import errorDescription from "../global/errorDescription.js";

export default function validateCPF(input) {

  // CPF Incompleto
  if(input.cpf.value.length < 14 && input.cpf.value) {
    errorDescription(input.cpf, "CPF Incompleto")
    error = true;
  }
}