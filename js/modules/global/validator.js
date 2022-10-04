import { accounts } from "./accounts.js";
import { showError } from "./showError.js";

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
      login: true,
      password: true,
      minmax: true,
      equalvalues: true,
      mincharacters: true,
      existingvalue: true,
      wordcontain: true,
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

  // LOGIN
  login() {

    // Validar email na hora do login
    if (!accounts.getUsers() || !accounts.getUsers().some(user => user.email === this.form.login.value)) {
      showError(this.form.email, "add", "Usuário não existe");
      this.validate.login = false;
    } else {
      showError(this.form.email, "remove", "Usuário não existe");
      this.validate.login = true;
    }

    // Validar senha na hora do login
    if (!accounts.getUsers() || !accounts.getUsers().some(user => user.senha === this.form.password.value)) {
      showError(this.form.password, "add", "Senha incorreta");
      this.validate.password = false;
    } else {
      showError(this.form.password, "remove", "Senha incorreta");
      this.validate.password = true;
    }
  }

  // MINMAX
  minmax(input, min, max, itemName) {
    if (this.form[input].value < min) {
      this.validate.minmax = false;
      showError(this.form[input], 'add', `Mínimo de ${min} ${itemName}`);
    } else if (this.form[input].value > max) {
      this.validate.minmax = false;
      showError(this.form[input], 'add', `Máximo de ${max} ${itemName}`);
    } else {
      this.validate.minmax = true;
      showError(this.form[input], 'remove', `Mínimo de ${min} ${itemName}`);
      showError(this.form[input], 'remove', `Máximo de ${max} ${itemName}`);
    }
  }

  equalValues(inputName1, inputName2, text) {
    const input1 = this.form[inputName1];
    const input2 = this.form[inputName2];

    if (!!input1.value.length && input1.value !== input2.value) {
      this.validate.value = false;
      showError(input1, 'add', text)
    } else {
      this.validate.equalvalues = true;
      showError(input1, 'remove', text)
    }
  }

  minCharacters(inputName, min) {
    const input = this.form[inputName];

    if (!!input.value.length && input.value.length < min) {
      this.validate.mincharacters = false;
      showError(input, 'add', `Mínimo de ${min} caracteres`);
    } else {
      this.validate.mincharacters = true;
      showError(input, 'remove', `Mínimo de ${min} caracteres`);
    }
  }

  existingValue(inputName, value, text) {
    const input = this.form[inputName];
    const inputValue = input.value.toLowerCase();

    if (!!accounts.getUsers() && accounts.getUsers().some(user => user[value].toLowerCase() === inputValue)){
      this.validate.existingvalue = false;
      showError(input, 'add', text)
    } else {
      this.validate.existingvalue = true;
      showError(input, 'remove', text)
    }
  }

  wordContain(inputName, regex, text) {
    const input = this.form[inputName];
    const inputValue = input.value;

    if(!!inputValue.length && !regex.test(inputValue)){
      this.validate.wordcontain = false;
      showError(input, 'add', text);
      console.log('teste')
    } else {
      this.validate.wordcontain = true;
      showError(input, 'remove', text);
    }
  }

  // VALIDAR
  isValid() {
    const validateValues = Object.values(this.validate)
    return validateValues.every((item) => item === true);
  }
}
