import {account, createAccount} from "../users.js";


export default function formstep3(form, btn, descriptionError) {
  const input = form[2].elements
  const registerSucessfull = document.querySelector("[data-register='sucessfull']");

  btn[2].addEventListener('click', validateClick)
  function validateClick() {
    let error = false;

    // Campos vazios
    Array.from(input).forEach((inp) => {
      if(inp.name === "complemento") {
      } else if(!inp.value) {
        descriptionError(inp, "Campo vazio")
        error = true;
      } else {
        descriptionError(inp, "");
      }
    })

    if(!error) {
      form[2].parentElement.classList.remove("active");
      registerSucessfull.classList.add("active");
      
      // Cadastrar o usuario
      createAccount(input.cep.value)
      console.log(account)
    }
  }

    // Buscar dados de endereço
    input.cep.addEventListener('change', validateChange) 
    function validateChange(inp) {
      fetch(`https://viacep.com.br/ws/${inp.target.value}/json`)
      .then(r => r.json())
      .then(endereco => {
        input.rua.value = endereco.logradouro;
        input.cidade.value = endereco.localidade;
        input.bairro.value = endereco.bairro;
        input.estado.value = endereco.uf;
      })
    }
}