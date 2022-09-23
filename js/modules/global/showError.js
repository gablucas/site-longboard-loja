// Inserir mensagem de erro nas validações especificas
export function showError(input, task, text) {
  const errorElement = input.nextElementSibling;

  if(task === "add") {
    errorElement.innerText = text;
    input.style.border = "2px solid red";
  }

  if (task === "remove" && errorElement.innerText === text) {
    errorElement.innerText = "";
    input.style.border = "1px solid var(--cor-6)";
  }
}