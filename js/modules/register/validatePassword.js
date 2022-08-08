import errorDescription from "../errorDescription.js";

export default function validatePassword(input) {
  let error = false;

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

  return error;
}