import { accounts } from "../global/accounts.js";

export function favoriteProduct() {
  const favorite = document.querySelector('.favorite');
  const productID = new URLSearchParams(location.search).get('id');

  if (accounts.loggedUser().favorites.some(item => item === productID)) {
    favorite.classList.add('active');
  }

  function addFavorite() {
    accounts.updateUser('favorites', 'push', productID)
  }

  function removeFavorite() {
    const index = accounts.loggedUser().favorites.findIndex((item) => item === productID);
    accounts.updateUser('favorites', 'splice', index);
  }

  function toggleFavorite() {
    this.classList.toggle('active');

    if(this.classList.contains('active')) {
      addFavorite();
    } else {
      removeFavorite();
    }
  }

  favorite.addEventListener('click', toggleFavorite)
}