// Inserir mensagem de erro nas validações especificas
export function showError(input, text) {
  const errorElement = document.createElement('span');
  errorElement.classList.add('error')
  

  input.nextElementSibling.innerText = text;
  input.style.border = "1px solid red"

  if(!text) {
    input.style.border = "1px solid var(--cor-6)";
  }
}