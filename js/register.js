const registerButton = document.querySelectorAll("[data-register='button']");

// Inserir mensagem de erro nas validações especificas
function insertError(element, text) {
  element.nextElementSibling.innerText = text;
}

// Validação do primeiro formulario
registerButton.forEach((btn) => {
  btn.addEventListener('click', validateForm)
})

function validateForm(e) {
  const form = e.currentTarget.previousElementSibling.elements;
  const arrayForm = Array.from(form)
  
    // Campo vazio
    arrayForm.forEach((input) => {
      insertError(input, "")
  
      if(!input.value) {
        insertError(input, "Por favor, preencha o campo acima")
      }
    })

  // Senhas iguais
  if(form.senha.value !== form["confirmar-senha"].value && !!form.senha.value && !!form["confirmar-senha"].value) {
    insertError(form["confirmar-senha"], "As senhas não conferem")
  }
}




