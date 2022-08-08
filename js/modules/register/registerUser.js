import {account} from "../users.js";

export default function registerUser(forms) {
  const user = {};
  forms.forEach((form) => {
    Array.from(form).forEach((input) => {
      if(input.name === "confirmar-senha") {
      } else {
        user[input.name] = input.value;
      }
    })
  })
  account.push(user)
  console.log(account)
}


  