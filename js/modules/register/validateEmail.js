import { getStorageAccounts } from "../global/accounts.js";
import errorDescription from "../global/errorDescription.js";

export default function validateEmail(input) {
  let error = false;
  const email = input.email.value.toLowerCase();

  if(!!email) {
    if(!email.includes("@")) {
      errorDescription(input.email, 'Está faltando o "@" no email')
      error = true;
    }else if(!email.includes(".com")) {
      errorDescription(input.email, 'Está faltando o ".com" no email')
      error = true;
    }else if(email.includes("@.")) {
      errorDescription(input.email, "Email inválido")
      error = true;
    }else if(!!getStorageAccounts() && getStorageAccounts().some(user => user.email === email)){
      errorDescription(input.email, "Email já registrado")
      error = true;
    }
  }
  return error;
}