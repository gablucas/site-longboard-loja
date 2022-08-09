import account from "../global/users.js"
import errorDescription from "../global/errorDescription.js"

export default function validateLogin(form) {

  if(!!form.password.value) {
    
    // Senha invalida
    if(!account.some(user => user.password === form.password.value)){
      errorDescription(form.password, "Senha incorreta")
    }
  }
  
  if(!!form.email.value) {

    // Usuario não encontrado
    if(!account.some(user => user.email === form.email.value)){
      errorDescription(form.email, "Usuario não existente")
      errorDescription(form.password, "")
    }
  }
}
