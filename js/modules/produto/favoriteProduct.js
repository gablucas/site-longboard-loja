import { accounts } from "../global/accounts.js";
import { modal } from "../global/modal.js";

export function favoriteProduct() {
  const favorite = document.querySelector('.favorite');
  const productID = new URLSearchParams(location.search).get('id');

  if (accounts.loggedUser()?.favorites.some(item => item === productID)) {
    favorite.classList.add('active');
  }

  // Adiciona o produto nos favoritos do usuario
  function addFavorite() {
    accounts.updateUser('favorites', 'push', productID)
  }

  // Remove o produto dos favoritos do usuario
  function removeFavorite() {
    const index = accounts.loggedUser().favorites.findIndex((item) => item === productID);
    accounts.updateUser('favorites', 'splice', index);
  }

  // Adicionar ou remover produto dos favoritos do usuario
  function toggleFavorite(e) {
    e.stopPropagation();

    if (accounts.loggedUser()) {
      this.classList.toggle('active');
  
      if(this.classList.contains('active')) {
        addFavorite();
      } else {
        removeFavorite();
      }
    } else {
      modal('[data-modal]')
    }
  }

  favorite.addEventListener('click', toggleFavorite)
}