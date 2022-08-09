import account from "../users.js";

export default function registerUser(forms) {
  const user = {endereco: {}};
  forms.forEach((form) => {
    Array.from(form).forEach((input) => {
      if(input.name === "confirmar-senha") {
      }else if(input.name === "cep" || input.name === "rua" || input.name === "numero" || input.name === "complemento" || input.name === "cidade" || input.name === "bairro" || input.name === "estado") {
        user.endereco[input.name] = input.value;
      }else{
        user[input.name] = input.value;
      }
    })
  })
  account.push(user)
  console.log(account)
  localStorage[account[account.length - 1].cpf] = JSON.stringify(account[account.length - 1])
}

