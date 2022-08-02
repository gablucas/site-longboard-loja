import formstep1 from "./modules/register/formstep1.js";
import formstep2 from "./modules/register/formstep2.js"
import formstep3 from "./modules/register/formstep3.js";

const registerForm = document.querySelectorAll('[data-register^="step"]')
const registerButton = document.querySelectorAll("[data-register='button']");


// Inserir mensagem de erro nas validações especificas
function insertError(element, text) {
  element.nextElementSibling.innerText = text;
}


registerButton.forEach((btn) => {
  btn.addEventListener('click', validateForm)
})

function validateForm(e) {
  const inputElement = e.currentTarget.previousElementSibling.elements;
  const arrayInputElement = Array.from(inputElement)
  let errorForm = false;

    // Campo vazio
    arrayInputElement.forEach((input) => {
      insertError(input, "")
  
      if(!input.value) {
        insertError(input, "Por favor, preencha o campo acima")
        errorForm = true;
      }
    })


  // Validação do primeiro formulario
  if(e.currentTarget === registerButton[0]){
    formstep1(inputElement, errorForm, insertError, registerForm);
  }

  // Validação do segundo formulario
  if(e.currentTarget === registerButton[1]){
    formstep2(inputElement, errorForm, insertError, registerForm);
  }

  // Validação do terceiro formulario
  if(e.currentTarget === registerButton[1]){
    formstep3(inputElement, errorForm, insertError, registerForm);
  }
}




