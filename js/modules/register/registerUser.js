import { accounts } from "../global/accounts.js";
import showDataUser from "./showDataUser.js";

export default function registerUser(forms) {
  const user = {endereco: {}, pedidos: {},};
  
  // Adiciona os dados do usuario em um objeto
  forms.forEach((form) => {
    Array.from(form).forEach((input) => {
      if(input.name === "confirmar-senha") {

      }else if(input.name.includes('endereco')) {
        user.endereco[input.name.replace(/\w+_(\w+)/, "$1")] = input.value;
      }else{
        user[input.name] = input.value;
      }
    })
  })

  // Adiciona o objeto criado no array de contas
  // e depois os insere no localStorage
  if(localStorage.accounts) {
    accounts.setUsers((accounts) => {
      accounts.push(user)
      localStorage.accounts = JSON.stringify(accounts);
    })
  } else {
    localStorage.accounts = JSON.stringify([user])
  }

  // Exibe os dados do usuario na tela
  showDataUser(user)
}

