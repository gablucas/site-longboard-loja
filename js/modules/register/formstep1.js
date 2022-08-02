export default function formstep1(inputElement, errorForm, insertError, registerForm) {

  // Senhas iguais
  if(inputElement.senha.value !== inputElement["confirmar-senha"].value && !!inputElement.senha.value && !!inputElement["confirmar-senha"].value) {
    insertError(inputElement["confirmar-senha"], "As senhas não conferem")
    errorForm = true;
  }
  
  // Senha fraca
  if(inputElement.senha.value.length <= 5 && inputElement.senha.value) {
    insertError(inputElement.senha, "A senha é muito fraca")
    errorForm = true;
  }
  
  // Ir para o proximo formulario
  if(!errorForm) {
    registerForm[0].classList.remove("active");
    registerForm[1].classList.add("active");
  }
}
    