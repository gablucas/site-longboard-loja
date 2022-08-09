// Inserir mensagem de erro nas validações especificas
export default function errorDescription(input, text) {
  input.nextElementSibling.innerText = text;
  input.style.border = "1px solid red"

  if(!text) {
    input.style.border = "1px solid var(--cor-6)";
  }
}