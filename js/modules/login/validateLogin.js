import { accounts } from "../global/accounts.js";
import errorDescription from "../global/errorDescription.js";

export default function validateLogin(form) {
let error = false;

if(!!form.email.value) {

  // Usuario não encontrado
  if(!accounts.getUsers() || !accounts.getUsers().some(user => user.email === form.email.value)){
    errorDescription(form.email, "Usuario não existente")
    errorDescription(form.password, "")
    error = true;
  }
}

  if(!!form.password.value) {
    
    // Senha invalida
    if(!accounts.getUsers().some(user => user.senha === form.password.value)){
      errorDescription(form.password, "Senha incorreta")
      error = true;
    }
  }
  
  return error;
}
