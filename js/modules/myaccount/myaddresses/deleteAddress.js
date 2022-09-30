import { accounts } from "../../global/accounts.js";

export function deleteAddress() {
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