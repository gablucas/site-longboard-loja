import { accounts } from "../../global/accounts.js";

export function removeFavorite() {
  const button = document.querySelectorAll('[data-favorites="delete"]');

  function removeFav(e) {
    const element = e.currentTarget.parentElement;
    const elementID = element.getAttribute('id');
    const index = accounts.loggedUser().favorites.findIndex((item) => item === elementID);

    accounts.updateUser('favorites', 'splice', index);
    element.remove();
  }

  button.forEach((btn) => {
    btn.addEventListener('click', removeFav)
  })
}