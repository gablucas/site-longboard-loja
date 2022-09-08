// Inserir mensagem de erro nas validações especificas
export function showError(input, text) {
  const errorElement = document.createElement('span');
  errorElement.classList.add('error')
  errorElement.innerText = text;
  input.parentElement.insertBefore(errorElement, input.nextElementSibling)
  input.style.border = "1px solid red"

  if(!text) {
    input.style.border = "1px solid var(--cor-6)";
  }
}