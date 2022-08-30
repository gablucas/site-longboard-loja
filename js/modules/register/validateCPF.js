import { getStorageAccounts } from "../global/accounts.js";
import errorDescription from "../global/errorDescription.js";

export default function validateCPF(input) {
  let error = false;

  // CPF Incompleto
  if(input.cpf.value.length < 14 && input.cpf.value) {
    errorDescription(input.cpf, "CPF Incompleto")
    error = true;
  } else if(!!getStorageAccounts() && getStorageAccounts().some(user => user.cpf === input.cpf.value)) {
    errorDescription(input.cpf, "CPF já cadastrado")
    error = true;
  }
  return error;
}