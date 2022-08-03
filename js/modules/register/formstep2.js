export default function formstep2(form, btn, descriptionError) {
  const input = form[1].elements

  btn[1].addEventListener('click', validateClick)
  function validateClick() {
    let error = false;

    // Campos vazios
    Array.from(input).forEach((inp) => {
      if(!inp.value) {
        descriptionError(inp, "Campo vazio")
        error = true;
      } else {
        descriptionError(inp, "")
      }
    })
    
    // CPF Incompleto
    if(input.cpf.value.length < 11 && input.cpf.value) {
      descriptionError(input.cpf, "CPF Incompleto")
    }

    // Ir para o proximo formulario
    if(!error) {
      form[1].parentElement.classList.remove("active");
      form[2].parentElement.classList.add("active");
    }
  }
}
    