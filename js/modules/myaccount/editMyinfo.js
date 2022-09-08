import { accounts } from "../global/accounts.js";
import * as validator from "../global/validator.js";


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

    // Insere os valores atuais nos placeholder dos inputs
    [...form].forEach((input) => {
      input.value = "";
      input.setAttribute('placeholder', accounts.loggedUser()[input.name])
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
      
      // Busca o elemento referente a informação alterada e insere a nova informação dentro dele
      // Atualiza as novas informações nos dados do usuario
      [...form].forEach((input) => {
        if(!!input.value) {
          [...listItens].find((element) => element.getAttribute('data-myinfo').includes(input.name)).innerText = input.value;
          accounts.updateUser(input.name, 'add', input.value);
        }
      });

        // Desativa o formulario e ativa a lista
        list.setAttribute('data-myinfo', 'show-myinfo-active');
        form.setAttribute('data-myinfo', 'form-myinfo');

        // Altera os botões do container
        changeButtons();

        // Remove os eventos 
        cancel.removeEventListener('click', cancelInfo)
        save.removeEventListener('click', saveInfo)
    }
  }
}