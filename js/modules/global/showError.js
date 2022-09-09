// Inserir mensagem de erro nas validações especificas
export function showError(input, text) {
  input.nextElementSibling.innerText = text;
  input.style.border = "2px solid red";

  if (text === "removeError") {
    input.nextElementSibling.innerText = "";
    input.style.border = "1px solid var(--cor-6)";
  }
}