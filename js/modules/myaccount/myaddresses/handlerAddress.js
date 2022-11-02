import { accounts } from "../../global/accounts.js";

// Adiciona um evento de editar endereço a cada endereço do usuario
// Salva o id do endereço selecionado para editar no localStorage
// Redireciona para página de edição de endereço

export function handlerAddress() {

  function editAddress() {
    const addresses = document.querySelectorAll('[data-myaddresses="edit-active"]');
  
    function toPage({ currentTarget }) {
      localStorage.editAddress = currentTarget.parentElement.getAttribute('id');
      window.location.href ='my-addresses/edit-address.html';
    }
  
    addresses.forEach((address) => {
      address.addEventListener('click', toPage)
    })
  }
  
  function deleteAddress() {
    const addresses = document.querySelectorAll('[data-myaddresses="edit-delete-active"]');
    const userAddresses = accounts.loggedUser().enderecos;
  
    function deleteHandler({ currentTarget }) {
      const id = currentTarget.parentElement.getAttribute('id');
      const indexAddress = userAddresses.findIndex((address) => address.id === id)
      userAddresses.splice(indexAddress, 1)
      accounts.updateUser('enderecos', 'add', userAddresses);
      window.location.reload();
    }
  
    addresses.forEach((address) => {
      address.addEventListener('click', deleteHandler);
    })
  }
  
  editAddress();
  deleteAddress();
}

