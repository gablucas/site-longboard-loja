import { accounts } from "../global/accounts.js";

const editData = document.querySelectorAll('[data-myinfo="edit-active"]');
const editButtons = document.querySelectorAll('[data-myinfo^="edit"]')
const [edit, save, cancel] = editButtons;

const editState = (state) => {
  if(state === 'active') {
    edit.setAttribute('data-myinfo', 'edit')
    save.setAttribute('data-myinfo', 'edit-save-active')
    cancel.setAttribute('data-myinfo', 'edit-cancel-active')
  } else {
    edit.setAttribute('data-myinfo', 'edit-active')
    save.setAttribute('data-myinfo', 'edit-save')
    cancel.setAttribute('data-myinfo', 'edit-cancel')
  }
}


export function editInformation() {
  for(const btn of editData) {
    btn.addEventListener('click', editInfo)
  }

  /** EDITAR INFORMAÇÕES */
  function editInfo({currentTarget}) {
    const lis = currentTarget.parentElement.querySelectorAll('li');

    for(const li of lis) {
      li.firstElementChild.innerText = "";
      li.innerHTML = li.innerHTML.replace(/(?<=<\/?)span/g, 'input');
      const property = li.firstElementChild.getAttribute('data-myinfo').replace(/\w+-(\w+)/, '$1')
      li.firstElementChild.setAttribute('placeholder', accounts.loggedUser()[property])
    }
    editState('active');
  }

  /** SALVAR INFORMAÇÕES EDITADAS */
  save.addEventListener('click', saveInfo)
  function saveInfo({currentTarget}) {
    const inputs = currentTarget.parentElement.querySelectorAll('input');

    // Pega os inputs preenchidos e atualiza os dados do usuario no localStorage
    for(const input of inputs) {
      console.log(input.name)
      if(!!input.value) {
        const property = input.getAttribute('data-myinfo').replace(/\w+-(\w+)/, '$1')

        if(property === 'cpf') {
          console.log(input.value)
        }
        accounts.updateUser(property, 'add', input.value)
      }
    }

    // Transforma os inputs em span novamente e com a informação atualizada
    const lis = currentTarget.parentElement.querySelectorAll('li');
    for(const li of lis) {
      li.innerHTML = li.innerHTML.replace(/(?<=<\/?)input/g, 'span');
      const property = li.firstElementChild.getAttribute('data-myinfo').replace(/\w+-(\w+)/, '$1')
      li.firstElementChild.innerText = accounts.loggedUser()[property]
    }
    editState();
  }

  /** CANCELAR EDIÇÃO DE INFORMAÇÕES */
  cancel.addEventListener('click', cancelInfo)
  function cancelInfo({currentTarget}) {
    const lis = currentTarget.parentElement.querySelectorAll('li');

    for(const li of lis) {
      li.firstElementChild.innerText = "";
      li.innerHTML = li.innerHTML.replace(/(?<=<\/?)input/g, 'span');
      const property = li.firstElementChild.getAttribute('data-myinfo').replace(/\w+-(\w+)/, '$1')
      li.firstElementChild.innerText = accounts.loggedUser()[property]
    }
    editState();
  }
}