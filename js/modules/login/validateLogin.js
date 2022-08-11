import account from "../global/users.js"
import errorDescription from "../global/errorDescription.js"

export default function validateLogin(form) {
let error = false;

  if(!!form.password.value) {
    
    // Senha invalida
    if(!account.some(user => user.senha === form.password.value)){
      errorDescription(form.password, "Senha incorreta")
      error = true;
    }
  }
  
  if(!!form.email.value) {

    // Usuario não encontrado
    if(!account.some(user => user.email === form.email.value)){
      errorDescription(form.email, "Usuario não existente")
      errorDescription(form.password, "")
      error = true;
    }
  }
  return error;
}
