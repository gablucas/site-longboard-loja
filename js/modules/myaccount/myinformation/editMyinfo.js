import { accounts } from "../../global/accounts.js";
import { showError } from "../../global/showError.js";
import * as validator from "../../global/validator.js";
import * as formatter from "../../global/formatter.js";
import formatCPF from "../../register/formatCPF.js";


const editButtons = document.querySelectorAll('[data-myinfo^="edit"]')
const [edit, save, cancel] = editButtons;

const changeButtons = (state) => {
  if(state === 'active') {
    edit.setAttribute('data-myinfo', 'edit');
    save.setAttribute('data-myinfo', 'edit-save-active');
    cancel.setAttribute('data-myinfo', 'edit-cancel-active');
  } else {
    edit.setAttribute('data-myinfo', 'edit-active');
    save.setAttribute('data-myinfo', 'edit-save');
    cancel.setAttribute('data-myinfo', 'edit-cancel');
  }
}


export function editInformation() {

  /** EDITAR INFORMAÇÕES */
  edit.addEventListener('click', editInfo)
  function editInfo({currentTarget}) {
    const form = currentTarget.parentElement.querySelector('form');
    const list = currentTarget.parentElement.querySelector('ul');
    const listItens = list.querySelectorAll('li span');

    // Desativa a lista e ativa o formulario
    list.setAttribute('data-myinfo', 'show-myinfo');
    form.setAttribute('data-myinfo', 'form-myinfo-active');

    // Altera os botões do container
    changeButtons('active');

    // Insere o formator de CPF
    // formatCPF(form.cpf);
    console.log(form.cpf);

    // Insere os valores atuais nos placeholder dos inputs
    [...form].forEach((input) => {
      input.value = "";
      input.setAttribute('placeholder', accounts.loggedUser()[input.name])

      // Remove as mensagens de erro se houver
      showError(input, 'removeError');
    })
    
    /** CANCELAR EDIÇÃO DE INFORMAÇÕES */
    cancel.addEventListener('click', cancelInfo)
    function cancelInfo() {

      // Desativa o formulario e ativa a lista
      list.setAttribute('data-myinfo', 'show-myinfo-active');
      form.setAttribute('data-myinfo', 'form-myinfo');

      // Altera os botões do container
      changeButtons();

      // Remove os eventos 
      cancel.removeEventListener('click', cancelInfo)
      save.removeEventListener('click', saveInfo)
    }

    /** SALVAR INFORMAÇÕES EDITADAS */
    save.addEventListener('click', saveInfo)
    function saveInfo() {
      
      // Faz uma validação dos inputs
      if(!validator.onlyCharacters(form.nome, form.sobrenome) && !validator.cpf(form.cpf)) {
        
        // Atualiza os dados do usuario com os valores dos inputs que foram preenchidos
        [...form].forEach((input) => {
          if(input.value) {

            if (input.name === "cpf") {
              accounts.updateUser('cpf', 'add', formatter.cpf(input));

            } else if (input.name === "nascimento") {
              accounts.updateUser('nascimento', 'add', formatter.date(input));

            } else {
              [...listItens].find((element) => element.getAttribute('data-myinfo').includes(input.name)).innerText = input.value;
              accounts.updateUser(input.name, 'add', input.value);
            }
          }

            // Desativa o formulario e ativa a lista
            list.setAttribute('data-myinfo', 'show-myinfo-active');
            form.setAttribute('data-myinfo', 'form-myinfo');

            // Altera os botões do container
            changeButtons();
      
            // Remove os eventos 
            cancel.removeEventListener('click', cancelInfo)
            save.removeEventListener('click', saveInfo)
  
            // Recarregar a pagina
            location.reload();
        })
      }
    }
  }
}