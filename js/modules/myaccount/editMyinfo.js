import { accounts } from "../global/accounts.js";
import * as validator from "../global/validator.js";

const editButtons = document.querySelectorAll('[data-myinfo^="edit"]')
const [edit, save, cancel] = editButtons;

const changeButtons = (state) => {
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

const changeTag = (elements, newTag) => {
  elements.forEach((element) => {
    const propertie = element.firstElementChild.getAttribute('data-myinfo').replace(/\w+-(\w+)/, '$1');

      if(newTag === "input") {
      element.firstElementChild.innerText = "";
      element.innerHTML = element.innerHTML.replace(/(?<=<\/?)span/g, newTag);
      element.firstElementChild.setAttribute('name', propertie);
      element.firstElementChild.setAttribute('placeholder', accounts.loggedUser()[propertie]);
    } else if(newTag === "span") {
      element.innerHTML = element.innerHTML.replace(/(?<=<\/?)input/g, newTag);
      element.firstElementChild.setAttribute('placeholder', accounts.loggedUser()[propertie]);
      element.firstElementChild.innerText = accounts.loggedUser()[propertie];
      element.firstElementChild.removeAttribute('name');
      element.firstElementChild.removeAttribute('placeholder');
    }
  });
}

export function editInformation() {

  /** EDITAR INFORMAÇÕES */
  edit.addEventListener('click', editInfo)
  function editInfo({currentTarget}) {
    const lis = currentTarget.parentElement.querySelectorAll('li');

    changeTag(lis, 'input');
    changeButtons('active');


    /** CANCELAR EDIÇÃO DE INFORMAÇÕES */
    cancel.addEventListener('click', cancelInfo)
    function cancelInfo() {

      changeTag(lis, 'span')
      changeButtons();
      cancel.removeEventListener('click', cancelInfo)
      save.removeEventListener('click', saveInfo)
    }


    /** SALVAR INFORMAÇÕES EDITADAS */
    save.addEventListener('click', saveInfo)
    function saveInfo({currentTarget}) {
      
      // Pega os inputs preenchidos e atualiza os dados do usuario no localStorage
      const inputs = currentTarget.parentElement.querySelectorAll('input');
      inputs.forEach((input) => {
        
        if(!!input.value) {

          if(input.name === "nome" || input.name === "sobrenome" && validator.characters(input.value)) {

          } else {
            accounts.updateUser(input.name, 'add', input.value)
            // Transforma os inputs em span novamente e com a informação atualizada
            changeTag(lis, 'span')
            changeButtons();
            cancel.removeEventListener('click', cancelInfo)
            save.removeEventListener('click', saveInfo)
            }
        }
      })
      

    }
  }
}