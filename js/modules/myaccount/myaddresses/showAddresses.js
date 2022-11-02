import { accounts } from "../../global/accounts.js";

export function showAddresses() {
  
  function insertAddress() {
    const addressesContainer = document.querySelector('[data-myaddresses="container"]');
    const addresses = accounts.loggedUser().enderecos;
  
    addresses.forEach((address) => {
      const newDiv =  document.createElement('div');
      newDiv.classList.add('endereco', 'mini-container');
      newDiv.setAttribute('id', address.id)
  
      if (address.main === true) {
        newDiv.classList.add('principal');
      }
  
      newDiv.innerHTML = `<span data-myaddresses="set-main" class="btn-container new-main font-2-xxxs-u">Definir como endereço principal</span>
      <ul class="dados-endereco font-2-xs-m cor-10">
        <li>Identificação: <span class="font-2-xs">${address.identificacao}</span></li>
        <li>CEP: <span class="font-2-xs">${address.cep}</span></li>
        <li>Rua: <span class="font-2-xs">${address.rua}</span></li>
        <li>Número: <span class="font-2-xs">${address.numero}</span></li>
        <li>Cidade: <span class="font-2-xs">${address.cidade}</span></li>
        <li>Bairro: <span class="font-2-xs">${address.bairro}</span></li>
        <li>Estado: <span class="font-2-xs">${address.estado}</span></li>
        <li>Complemento: <span class="font-2-xs">${address.complemento}</span></li>
      </ul>
  
      <span data-myaddresses="edit-active" class="btn-container editar font-2-xxxs-u">Editar</span>
      <span data-myaddresses="edit-delete-active" class="btn-container excluir font-2-xxxs-u">Excluir</span>
      <span data-myaddresses="edit-save" class="btn-container save font-2-xxxs-u">Salvar</span>
      <span data-myaddresses="edit-cancel" class="btn-container cancel font-2-xxxs-u">Cancelar</span>`
  
      addressesContainer.appendChild(newDiv);
    });
  }

  function mainAddress() {
    const addresses = document.querySelectorAll('[data-myaddresses="set-main"]');
    const userAddresses = accounts.loggedUser().enderecos;
  
    function setMainAddress({ currentTarget }) {
      const id = currentTarget.parentElement.getAttribute('id');
  
      // Define o endereço principal no array de enderecos do usuario
      userAddresses.forEach((address) => {
        if (address.id === id) {
          address.main = true;
        } else {
          address.main = false;
        }
      })
  
      // Coloca o endereço principal na primeira posição (array de endereços do usuario e do site)
      const indexMain = userAddresses.findIndex((address) => address.main === true);
      const mainAddress = userAddresses.splice(indexMain, 1)[0];
      userAddresses.unshift(mainAddress);
  
      // Atualiza os dados do usuario no localStorage e recarrega a pagina
      accounts.updateUser('enderecos', 'add', userAddresses)
      window.location.reload();
    }
  
    addresses.forEach((address) => {
      address.addEventListener('click', setMainAddress)
    })
  }

  insertAddress();
  mainAddress();
}
