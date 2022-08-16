import showDataUser from "./showDataUser.js";

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

  showDataUser(user)
  localStorage[user.email] = JSON.stringify(user)
}

