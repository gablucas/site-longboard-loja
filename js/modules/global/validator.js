import { accounts } from "./accounts.js";
import { showError } from "./showError.js";

// export function date(input) {
//   let error = false
//   showError(input, "removeError");

//   if (input.value.length !== 8) {
//     showError(input, "Digite a data no formato XX XX XXXX")
//     error =  true;

//   } else if (onlyNumbers(input)){
//     showError(input, "Somente números")
//     error =  true;

//   } else {
//     showError(input, "removeError")
//   }

//   return error;
// }

export function cpf(input) {
  let error = false

  if(input.value) {
    if (input.value.length !== 14) {
        showError(input, "CPF Incompleto")
        error =  true;
    
    } else if (accounts.getUsers() && accounts.getUsers().some(user => user.cpf === input.value)) {
      showError(input, "CPF já esta sendo usado");
      error = true;
    
    } else {
      showError(input, "removeError")
    }
  }
  return error;
}

export function email(input) {
  let error = false

  const email = input.value.toLowerCase();
  
  if(!!email) {
    if(!email.includes("@")) {
      showError(input, 'Está faltando o "@" no email')
      error = true;
    }else if(!email.includes(".com")) {
      showError(input, 'Está faltando o ".com" no email')
      error = true;
    }else if(email.includes("@.")) {
      showError(input, "Email inválido")
      error = true;
    }else if(!!accounts.getUsers() && accounts.getUsers().some(user => user.email === email)){
      showError(input, "Email já registrado")
      error = true;
    }
  }
  return error;
}

export function password(input1, input2) {
  let error = false

  // Senhas iguais
  if(input1.value !== input2.value && input1.value && input2.value) {
    showError(input2, "As senhas não conferem");
    error = true;
  }
  
  // Senha fraca
  if(input1.value.length <= 5 && input1.value) {
    showError(input1, "A senha é muito fraca");
    error = true;
  }

  return error;
}

export class Validator {
  constructor(form) {
    this.form = form;

    this.validate = {
      emptyimputs: true,
      onlycharacters: true,
      onlynumbers: true,
    }
  }

  // CAMPOS VAZIOS
  emptyInputs(...inputs) {

    // Validar
    if(inputs.some((input) => !this.form[input].value)) {
      this.validate.emptyimputs = false;
    } else {
      this.validate.emptyimputs = true;
    }

    // Exibir ou remover erro
    inputs.forEach((input) => {
      if (!this.form[input].value) {
        showError(this.form[input], 'add', 'Campo vazio');
      } else {
        showError(this.form[input], 'remove', 'Campo vazio');
      }
    })
  }

  // APENAS LETRAS
  onlyCharacters(...inputs) {

    // Validador
    if (inputs.some((input) => (/\d+/g).test(this.form[input].value))) {
      this.validate.onlycharacters = false;
    } else {
      this.validate.onlycharacters = true;
    }


    // Exibir ou remover erro
    inputs.forEach((input) => {
      if ((/\d+/g).test(this.form[input].value)) {
        showError(this.form[input], 'add', 'Apenas letras');
      } else {
        showError(this.form[input], 'remove', "Apenas letras");
      }
    })
  }

  // APENAS NUMEROS
  onlyNumbers(...inputs) {

    // Validador
    if (inputs.some((input) => (/\D+/g).test(input.value))) {
      this.validate.onlynumbers = false;
    } else {
      this.validate.onlynumbers = true;
    }

    // Exibir ou remover erro
    inputs.forEach((input) => {
      if ((/\D+/g).test(input.value)) {
        showError(input, 'add', 'Apenas números');
      } else {
        showError(input, 'remove', 'Apenas números');
      }
    })
  }

  // VALIDAR
  isValid() {
    const validateValues = Object.values(this.validate)
    return validateValues.every((item) => item === true);
  }

}