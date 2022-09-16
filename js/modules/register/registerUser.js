import { accounts } from "../global/accounts.js";
import * as formatter from "../global/formatter.js";
import showDataUser from "./showDataUser.js";

export default function registerUser(forms) {
  const user = {endereco: [], pedidos: [],};
  const endereco = {};
  endereco.main = true;

  // Adiciona os dados do usuario em um objeto
  forms.forEach((form) => {
    Array.from(form).forEach((input) => {
      if (input.name !== "confirmar-senha") {
        if(input.name === "cpf") {
          user.cpf = formatter.cpf(input);
        } else if (input.name === "nascimento"){
          user.nascimento = formatter.date(input);
        } else if (input.name.includes('endereco')) {
          endereco[input.name.replace(/\w+_(\w+)/, "$1")] = input.value;
        } else {
          user[input.name] = input.value;
        }
      }
    })
  })


  user.endereco.push(endereco)

  // Adiciona o objeto criado no array de contas
  // e depois os insere no localStorage
  if(localStorage.accounts) {
    const newAccount = accounts.getUsers();
    newAccount.push(user);
    localStorage.accounts = JSON.stringify(newAccount);
  } else {
    localStorage.accounts = JSON.stringify([user])
  }

  // Exibe os dados do usuario na tela
  showDataUser(user)
}

