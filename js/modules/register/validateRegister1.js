import errorDescription from "../errorDescription.js";

export default function validateRegister1(form, btn) {

  const input = form[0].elements

  btn[0].addEventListener('click', validateClick)
  function validateClick(e) {
    let error = false;

    // Campos vazios - Criar um modulo com esse código
    Array.from(input).forEach((inp) => {
      if(!inp.value) {
        errorDescription(inp, "Campo vazio")
        error = true;
      } else {
        errorDescription(inp, "")
      }
    })

    // Email correto
    const verificaEmail = input.email.value.toLowerCase();
    if(!verificaEmail.includes("@") && input.email.value) {
      errorDescription(input.email, 'Está faltando o "@" no email')
      error = true;
    } else if(!verificaEmail.includes(".") && input.email.value) {
      errorDescription(input.email, 'Está faltando o "." no email')
      error = true;
    }

    // Senhas iguais
    if(input.senha.value !== input["confirmar-senha"].value && input.senha.value && input["confirmar-senha"].value) {
      errorDescription(input["confirmar-senha"], "As senhas não conferem");
      error = true;
    }
    
    // Senha fraca
    if(input.senha.value.length <= 5 && input.senha.value) {
      errorDescription(input.senha, "A senha é muito fraca");
      error = true;
    }

    // Ir para o proximo formulario
    if(!error) {
      form[0].parentElement.classList.remove("active");
      form[1].parentElement.classList.add("active");
    }
  }
}
    