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
    if(input.cpf.value.length < 14 && input.cpf.value) {
      descriptionError(input.cpf, "CPF Incompleto")
      error = true;
    }

    // Ir para o proximo formulario
    if(!error) {
      form[1].parentElement.classList.remove("active");
      form[2].parentElement.classList.add("active");
    }
  }

  // Validar CPF
  input.cpf.addEventListener('keydown', validateCPF);
  function validateCPF(e) {
    const cpf = e.target.value
    const numeros = ["0","1","2","3","4","5","6","7","8","9"];

    if(e.key !== "Backspace") {
      if(cpf.length === 3 || cpf.length === 7) {
        e.target.value = cpf.concat(".")
      }else if(cpf.length === 11) {
        e.target.value = cpf.concat("-")
      }
      
      if(!numeros.some((numero => e.key === numero))) {
        e.preventDefault();
      }
    }
  }
}
    