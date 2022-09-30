import { accounts } from "../../global/accounts.js";

export function mainAddress() {
  const addresses = document.querySelectorAll('[data-myaddresses="set-main"]');
  const userAddresses = accounts.loggedUser().enderecos;

  function setMainAddress({ currentTarget }) {
    const id = currentTarget.parentElement.getAttribute('id');

    // Define o endereço principla no array de enderecos do usuario
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