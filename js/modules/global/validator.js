import { accounts } from "./accounts.js";
import { showError } from "./showError.js";

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
    if (inputs.some((input) => (/\D+/g).test(this.form[input].value))) {
      this.validate.onlynumbers = false;
    } else {
      this.validate.onlynumbers = true;
    }

    // Exibir ou remover erro
    inputs.forEach((input) => {
      if ((/\D+/g).test(this.form[input].value)) {
        showError(this.form[input], 'add', 'Apenas números');
      } else {
        showError(this.form[input], 'remove', 'Apenas números');
      }
    })
  }

  // LOGIN
  login(login, password) {
    const user = accounts.getUsers()?.find(user => user.email === this.form[login].value);

    // Validar email na hora do login
    if (this.form[login].value && !user) {
      showError(this.form.email, "add", "Usuário não existe");
      this.validate.login = false;
    } else {
      showError(this.form.email, "remove", "Usuário não existe");
      this.validate.login = true;
    }

    // Validar senha na hora do login
    if (this.form[login].value && this.form[password].value && user && user.senha !== this.form[password].value) {
      showError(this.form.password, "add", "Senha incorreta");
      this.validate.password = false;
    } else {
      showError(this.form.password, "remove", "Senha incorreta");
      this.validate.password = true;
    }

    // Validar campos vazios
    this.emptyInputs(
      'email',
      'password'
    );
  }

  // Valida se o argumento corresponde a quantidade minima e maxima
  minmaxValue(inputName, min, max, itemName) {
    const input = this.form[inputName];

    if (input.value < min || input.value > max) {
      this.validate.minmax = false;
      
      if (input.value < min) {
        showError(input, 'add', `Selecione no mínimo ${min} produto`);
      } else if (input.value > max) {
        showError(input, 'add', `Selecione no máximo ${max} produtos`);
      }
      
    } else {
      this.validate.minmax = true;
      showError(input, 'remove', `Selecione no mínimo ${min} produto`);
      showError(input, 'remove', `Selecione no máximo ${max} produtos`);
    }
  }

  // Valida se dois valores são iguais
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

  // Valida se o argumento passado corresponde a quantidade mínima de caracteres passados
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

  // Valida se o valor ja existe nos outros usuarios
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

  // Valida se contem o texto passado
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
